import Dinero from 'dinero.js'
import ProductCurrencySymbol from '@/ui/product-currency-symbol'

const ProductSplitPayments = ({ price }: { price: Dinero.Dinero }) => {
  // only offer split payments for more expensive items
  if (price.toUnit() < 150) {
    return null
  }

  const [perMonth] = price.allocate([1, 2])
  return (
    <div className="text-sm text-gray-400">
      Or <ProductCurrencySymbol dinero={price} />
      {perMonth.toUnit()}/month for 3 months
    </div>
  )
}

export default ProductSplitPayments
