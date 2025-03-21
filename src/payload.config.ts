// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { s3Storage } from '@payloadcms/storage-s3'

import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Guests } from './collections/Guests'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    livePreview: { breakpoints: [{ label: 'Mobile', name: 'mobile', width: 375, height: 667 }] },
    avatar: 'default',
  },
  collections: [Users, Media, Posts, Guests, Projects],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI || '' } }),
  sharp,
  plugins: [
    s3Storage({
      collections: { media: { prefix: 'media' } },
      bucket: process.env.S3_BUCKET!,
      config: {
        endpoint: `https://${process.env.S3_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION,
      },
    }),
    // seoPlugin({
    //   collections: ['posts'],
    //   uploadsCollection: 'media',
    //   generateTitle: ({ doc }) => `Mike Cabana — ${doc.title}`,
    //   generateDescription: ({ doc }) => doc.excerpt,
    // }),
  ],

  email: resendAdapter({
    defaultFromAddress: 'payload@mikecabana.com',
    defaultFromName: 'Payload CMS',
    apiKey: process.env.RESEND_API_KEY!,
  }),

  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
})
