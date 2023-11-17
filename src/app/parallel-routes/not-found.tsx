import Boundary from '@/ui/boundary'

const NotFound = () => {
  return (
    <Boundary labels={['parallel-routes/not-found.tsx']} color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className="text-lg font-bold">Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </Boundary>
  )
}

export default NotFound
