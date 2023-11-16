import Dinero from 'dinero.js'
import { add, formatDistanceToNow } from 'date-fns'
import ProductDeal from '@/ui/product-deal'

const ProductLighteningDeal = ({
  price,
  discount,
}: {
  price: Dinero.Dinero
  discount: {
    amount: Dinero.Dinero
    expires?: number
  }
}) => {
  const date = add(new Date(), { days: discount.expires })

  return (
    <>
      <div className="flex">
        <div className="rounded bg-gray-600 px-1.5 text-xs font-medium leading-5 text-white">
          Expires in {formatDistanceToNow(date)}
        </div>
      </div>

      <ProductDeal price={price} discount={discount} />
    </>
  )
}

export default ProductLighteningDeal
