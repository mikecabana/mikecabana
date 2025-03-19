'use client'

import type { PayloadAdminBarProps, PayloadMeUser } from '@payloadcms/admin-bar'

import { useRouter } from 'next/navigation'
import { PayloadAdminBar } from '@payloadcms/admin-bar'
import React, { useState } from 'react'

import classes from './admin-bar.module.css'
import { cn } from '@/lib/utils'

const collectionLabels = { posts: { plural: 'Posts', singular: 'Post' } }

const Title: React.FC = () => <span>Dashboard</span>

export function AdminBar(props: { adminBarProps?: PayloadAdminBarProps }) {
  const { adminBarProps } = props || {}
  const [show, setShow] = useState(false)
  const collection = 'posts'
  const router = useRouter()

  const onAuthChange = React.useCallback((user: PayloadMeUser) => {
    setShow(!!user?.id)
  }, [])

  return (
    <div
      className={cn(
        'z-10 w-full bg-black py-2 px-4 hidden opacity-0 transition-all rounded-2xl mb-6',
        { 'block opacity-100': show },
      )}
    >
      <PayloadAdminBar
        {...adminBarProps}
        className={'text-foreground'}
        classNames={{
          controls: 'font-medium',
          logo: 'font-medium mr-1',
          user: 'font-medium mr-1',
          logout: 'font-medium',
        }}
        cmsURL={process.env.NEXT_PUBLIC_SERVER_URL}
        collectionSlug={collection}
        collectionLabels={{
          plural: collectionLabels[collection]?.plural || 'Posts',
          singular: collectionLabels[collection]?.singular || 'Post',
        }}
        logo={<Title />}
        onAuthChange={onAuthChange}
        onPreviewExit={() => {
          fetch('/next/exit-preview')
            .then(() => {
              router.push('/')
              router.refresh()
            })
            .catch((error) => {
              console.error('Error exiting preview:', error)
            })
        }}
        style={{
          backgroundColor: 'transparent',
          padding: 0,
          position: 'relative',
          zIndex: 'unset',
        }}
      />
    </div>
  )
}
