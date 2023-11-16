import Dinero from 'dinero.js'
import { Product } from '@/app/api/products/product'

const ProductUsedPrice = ({ usedPrice: usedPriceRaw }: { usedPrice: Product['usedPrice'] }) => {
  const usedPrice = Dinero(usedPriceRaw)

  return (
    <div className="text-sm">
      <div className="text-gray-400">More buying choices</div>
      <div className="text-gray-200">${usedPrice.toUnit()} (used)</div>
    </div>
  )
}

export default ProductUsedPrice
