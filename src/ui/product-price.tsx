import Dinero from 'dinero.js'
import { Product } from '@/app/api/products/product'
import ProductCurrencySymbol from '@/ui/product-currency-symbol'
import ProductDeal from '@/ui/product-deal'
import ProductLighteningDeal from '@/ui/product-lightening-deal'

const isDiscount = (obj: any): obj is { percent: number; expires?: number } => {
  return typeof obj?.percent === 'number'
}

const formatDiscount = (price: Dinero.Dinero, discountRaw: Product['discount']) => {
  return isDiscount(discountRaw)
    ? {
        amount: price.multiply(2),
        expires: discountRaw.expires,
      }
    : undefined
}

const ProductPrice = ({
  price,
  discount: discountRaw,
}: {
  price: Dinero.Dinero
  discount: Product['discount']
}) => {
  const discount = formatDiscount(price, discountRaw)

  if (discount) {
    if (discount?.expires && typeof discount.expires === 'number') {
      return <ProductLighteningDeal price={price} discount={discount} />
    }
    return <ProductDeal price={price} discount={discount} />
  }

  return (
    <div className="flex">
      <div className="text-sm leading-snug text-white">
        <ProductCurrencySymbol dinero={price} />
      </div>
      <div className="text-lg font-bold leading-snug text-white">{price.toUnit()}</div>
    </div>
  )
}

export default ProductPrice
