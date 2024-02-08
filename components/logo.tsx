'use client'

import Image from 'next/image'
import DallioLogo from '@/public/images/dallio-logo.png'



export default function Logo({}) {
  return (
    <div>
      <div className="inline-flex relative justify-center items-center">
        <svg className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4" />
          <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6" />
          <defs>
            <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
              <stop stopColor="#D5A768" />
              <stop offset="1" stopColor="#D5A768" stopOpacity=".01" />
            </radialGradient>
            <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
              <stop stopColor="#86A496" stopOpacity=".7" />
              <stop offset="1" stopColor="#86A496" stopOpacity=".01" />
            </radialGradient>
          </defs>
        </svg>
        <Image className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none" src={DallioLogo} width={270} height={600} priority alt="iPhone mockup" aria-hidden="true" />
      </div>
    </div>
  )
}
