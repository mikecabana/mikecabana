import NextImage from 'next/image'
import SiteTitle from './site-title'
import { Socials } from './socials'

export function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row-reverse gap-8 mb-12 items-center">
        <div className="flex-grow text-center md:text-right">
          <SiteTitle />
          <p className="px-12 md:px-0 md:text-2xl font-bold opacity-90 mb-8">
            Code whisperer, espresso not depresso, dog daddy, AI wrangler.
          </p>
          <Socials />
        </div>
        <div className="relative w-48 h-48 flex-shrink-0">
          <NextImage
            src="/p.jpg"
            alt="Profile pic of mike cabana"
            fill={true}
            sizes="138px, 138px"
            className="z-10 rounded-full"
          />
        </div>
      </div>
    </>
  )
}
