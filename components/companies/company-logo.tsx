"use client"

import { FC } from 'react'
import MotorwayLogo from './motorway-logo'
import DeliverooLogo from './deliveroo-logo'
import ZalandoLogo from './zalando-logo'
import IBMLogo from './ibm-logo'

interface CompanyLogoProps {
  company: string
  className?: string
}

const CompanyLogo: FC<CompanyLogoProps> = ({ company, className = "w-14 h-14" }) => {
  switch (company.toLowerCase()) {
    case 'motorway':
      return <MotorwayLogo className={className} />
    case 'deliveroo':
      return <DeliverooLogo className={className} />
    case 'zalando':
      return <ZalandoLogo className={className} />
    case 'nordcloud (ibm)':
    case 'ibm':
      return <IBMLogo className={className} />
    default:
      return <div className={className}>
        <span className="text-xl font-bold">{company.charAt(0)}</span>
      </div>
  }
}

export default CompanyLogo
