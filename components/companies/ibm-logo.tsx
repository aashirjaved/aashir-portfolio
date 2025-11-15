"use client"

import { FC } from 'react'

interface IBMLogoProps {
  className?: string
  width?: number
  height?: number
}

const IBMLogo: FC<IBMLogoProps> = ({ 
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
        viewBox="0 0 1000 400"
        className="text-blue-600"
      >
        <path fill="currentColor" d="M0 0v27.4h194.2v-27.4H0zm222.2 0v27.4h277.4c0 0-29.4-27.4-65.5-27.4H222.2zM555.4 0v27.4h166.7l-13.3-27.4H555.4zM0 55.6v27.4h194.2v-27.4H0zm222.2 0v27.4h304.9c0 0-5.4-20.6-8.9-27.4H222.2zm333.2 0v27.4h64.5c0 0 17.3-24.4 23.1-27.4H555.4zm166.7 0l-13.3 27.4h112.1v-27.4H722.1zM0 111.1v27.5h194.2v-27.5H0zm222.2 0v27.5h241.2v-27.5H222.2zm166.7 0v27.5h196.7v-27.5H388.9zm250.3 0v27.5h194.2v-27.5H639.2zM0 166.7v27.4h194.2v-27.4H0zm222.2 0v27.4h241.2v-27.4H222.2zm166.7 0v27.4h196.7v-27.4H388.9zm250.3 0v27.4h194.2v-27.4H639.2zM0 222.2v27.5h194.2v-27.5H0zm222.2 0v27.5h408c0 0 6.4-20.6 8.9-27.5H222.2zm333.2 0v27.5h86.5c0 0-17.8-24.4-23.1-27.5H555.4zm111.1 0l13.3 27.5h153.2v-27.5H666.5zM0 277.8v27.4h194.2v-27.4H0zm222.2 0v27.4h408c0 0-5.4-17.7-8.9-27.4H222.2zm333.2 0v27.4h63.5c0 0 16.7-24.4 23.1-27.4H555.4zm125.4 0l13.3 27.4h139v-27.4H680.8zM0 333.3v27.5h194.2v-27.5H0zm222.2 0v27.5h241.2v-27.5H222.2zm166.7 0v27.5h196.7v-27.5H388.9zm250.3 0v27.5h194.2v-27.5H639.2zM0 388.9v27.4h194.2v-27.4H0zm222.2 0v27.4h241.2v-27.4H222.2zm166.7 0v27.4h196.7v-27.4H388.9zm250.3 0v27.4h194.2v-27.4H639.2z"/>
      </svg>
    </div>
  )
}

export default IBMLogo
