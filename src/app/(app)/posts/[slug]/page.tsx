import { RefreshRouteOnSave } from '@/components/refresh-route-on-save'
import RichText from '@/components/rich-text'
import { getPayload } from '@/lib/payload'
import { formatDateTime } from '@/lib/utils'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import NextImage from 'next/image'
import { Media } from '@/payload-types'

type PostPageProps = { params: Promise<{ slug?: string }> }

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  if (!slug || slug === 'null') {
    return <p>No post found</p>
  }

  const post = await queryPostBySlug({ slug })

  if (post === null) {
    return notFound()
  }

  return (
    <>
      <RefreshRouteOnSave />
      <div className="mb-8">
        {post.heroImage && (
          <NextImage
            src={(post.heroImage as Media).url!}
            width={(post.heroImage as Media).width!}
            height={(post.heroImage as Media).height!}
            alt={(post.heroImage as Media).alt}
          />
        )}
        <h1 className="text-2xl">{post.title}</h1>
        <p className="text-sm opacity-75">{formatDateTime(post.createdAt)}</p>
      </div>
      <RichText data={post.content} />
      {/* {JSON.stringify(post)} */}
    </>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload()

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: { slug: { equals: slug } },
  })

  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayload()

  const pages = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params || []
}
