import Boundary from '@/ui/boundary'

const Page = () => {
  return (
    <Boundary labels={['@audience/demographics/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Demographics</h2>
      </div>
    </Boundary>
  )
}

export default Page
