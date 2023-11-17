import { getCategory } from '@/app/api/categories/getCategories'
import Boundary from '@/ui/boundary'
import { Counter } from '@/app/context/context-click-counter'

const Page = async ({ params }: { params: { categorySlug: string } }) => {
  const category = await getCategory({ slug: params.categorySlug })

  return (
    <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-400/80">All {category.name}</h1>

        <Counter />
      </div>
    </Boundary>
  )
}

export default Page
