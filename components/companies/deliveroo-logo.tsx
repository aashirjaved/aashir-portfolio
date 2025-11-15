"use client"

import { FC } from 'react'

interface DeliverooLogoProps {
  className?: string
  width?: number
  height?: number
}

const DeliverooLogo: FC<DeliverooLogoProps> = ({ 
  className = "w-14 h-14", 
  width = 56, 
  height = 56 
}) => {
  return (
    <div className={className}>
      <svg 
        viewBox="0 0 87 87" 
        width={width}
        height={height}
        className="text-teal-600"
      >
        <path
          fill="currentColor"
          d="M43.5 0C19.477 0 0 19.477 0 43.5S19.477 87 43.5 87 87 67.523 87 43.5 67.523 0 43.5 0zm.7 64.417c-2.683 0-4.867-2.184-4.867-4.917 0-2.683 2.184-4.866 4.867-4.866 2.733 0 4.916 2.183 4.916 4.866 0 2.733-2.233 4.917-4.916 4.917zm15.983-18.9H42.25v-4.567c0-1.7 1.4-3.15 3.15-3.15 1.75 0 3.15 1.4 3.15 3.15v.316h11.633v-.316c0-8.167-6.65-14.817-14.816-14.817-8.167 0-14.817 6.65-14.817 14.817v4.567H28.1v9.483h2.45v-7.033h11.7v7.033h2.45v-7.033h11.634v7.033h2.45v-7.033h2.4v-2.45h-2.4z"
        />
      </svg>
    </div>
  )
}

export default DeliverooLogo
