"use client"

import { FC } from 'react'

interface ZalandoLogoProps {
  className?: string
  width?: number
  height?: number
}

const ZalandoLogo: FC<ZalandoLogoProps> = ({ 
  className = "w-14 h-14", 
  width = 56, 
  height = 56 
}) => {
  return (
    <div className={className}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height}
        viewBox="0 0 180 40"
        className="text-orange-600"
      >
        <path fill="currentColor" d="M132.5 7.7h-4.5v24.4h4.5V7.7zm-28.2 0v24.5h4.5V13.5l5.4 18.7h5.8L125.5 13v19.2h4.5V7.7h-7l-5.7 18.7-5.3-18.7h-7.7zm-30 24.5H88l-6.7-24.5h-5l-6.4 24.5h4.5l1.3-5.3h7.3l1.3 5.3zm-10.9-9.8l2.4-9.8 2.4 9.8h-4.8zm-18 9.8h4.5v-24.5h-4.5v24.5zm71.5-24.5V32h15.3v-4.5h-10.7v-5.9h8.9v-4.5h-8.9v-5.1h10.4V7.7h-15z"/>
      </svg>
    </div>
  )
}

export default ZalandoLogo
