import Dinero from 'dinero.js'
import ProductCurrencySymbol from '@/ui/product-currency-symbol'

const ProductDeal = ({
  price: priceRaw,
  discount: discountRaw,
}: {
  price: Dinero.Dinero
  discount: {
    amount: Dinero.Dinero
  }
}) => {
  const discount = discountRaw.amount.toUnit()
  const price = priceRaw.toUnit()
  const percent = Math.round(100 - (discount / price) * 100)

  return (
    <div className="flex gap-x-1.5">
      <div className="text-vercel-cyan text-lg font-bold leading-snug">-{percent}%</div>
      <div className="flex">
        <div className="text-sm leading-snug text-white">
          <ProductCurrencySymbol dinero={discountRaw.amount} />
        </div>
        <div className="text-lg font-bold leading-snug text-white">{discount}</div>
      </div>
      <div className="text-sm leading-snug text-gray-400 line-through">
        <ProductCurrencySymbol dinero={priceRaw} />
        {price}
      </div>
    </div>
  )
}

export default ProductDeal
