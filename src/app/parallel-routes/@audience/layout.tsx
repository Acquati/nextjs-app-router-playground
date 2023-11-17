import Boundary from '@/ui/boundary'
import TabGroup from '@/ui/tab-group'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Boundary labels={['parallel-routes/@audience/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/parallel-routes"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Demographics',
              slug: 'demographics',
            },
            {
              text: 'Subscribers',
              slug: 'subscribers',
            },
          ]}
        />

        {children}
      </div>
    </Boundary>
  )
}

export default Layout
