import { isAdminOrEditor, isLoggedIn } from '@/lib/access'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: isAdminOrEditor,
    read: isLoggedIn,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [{ name: 'alt', type: 'text', required: true }],
  upload: true,
}
