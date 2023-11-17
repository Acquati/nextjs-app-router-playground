import React from 'react'

const title = 'Route Groups'

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return children
}

export default Layout
