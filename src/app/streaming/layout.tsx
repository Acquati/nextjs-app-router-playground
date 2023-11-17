import TabGroup from '@/ui/tab-group'
import React from 'react'

const title = 'Streaming'

export const metadata = {
  title,
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/streaming"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Edge Runtime',
              slug: 'edge/product/1',
              segment: 'edge',
            },
            {
              text: 'Node Runtime',
              slug: 'node/product/1',
              segment: 'node',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Layout
