import * as React from 'react'
import EmailFormSection from './EmailFormSection'
import PhoneIntroSection from './PhoneIntroSection'
import TechIntroSection from './TechIntroSection'
import ArchiveIntroSection from './ArchiveIntroSection/'

const index: React.FC = () => {
  return (
    <>
      <EmailFormSection />
      <PhoneIntroSection />
      <TechIntroSection />
      <ArchiveIntroSection />
    </>
  )
}

export default index
