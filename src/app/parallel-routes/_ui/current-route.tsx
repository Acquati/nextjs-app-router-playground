'use client'
import { usePathname } from 'next/navigation'

const CurrentRoute = ({ slice = 2 }: { slice?: number }) => {
  const pathname = usePathname()

  return <>{pathname?.split('/').slice(slice).join('/')}</>
}

export default CurrentRoute
