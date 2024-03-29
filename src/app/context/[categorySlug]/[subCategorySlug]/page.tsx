import { getCategory } from '@/app/api/categories/getCategories'
import { Counter } from '@/app/context/context-click-counter'
import Boundary from '@/ui/boundary'

const Page = async ({ params }: { params: { categorySlug: string; subCategorySlug: string } }) => {
  const category = await getCategory({ slug: params.subCategorySlug })

  return (
    <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

        <Counter />
      </div>
    </Boundary>
  )
}

export default Page
