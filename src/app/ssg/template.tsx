import Boundary from '@/ui/boundary'
import React from 'react'

const Template = ({ children }: { children: React.ReactNode }) => {
  return <Boundary>{children}</Boundary>
}

export default Template
