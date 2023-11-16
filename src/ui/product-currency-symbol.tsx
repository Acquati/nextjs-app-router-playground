import Dinero from 'dinero.js'

const ProductCurrencySymbol = ({ dinero }: { dinero: Dinero.Dinero }) => {
  let symbol = ''
  switch (dinero.getCurrency()) {
    case 'GBP': {
      symbol = '£'
      break
    }

    case 'EUR': {
      symbol = '€'
      break
    }

    default: {
      symbol = '$'
      break
    }
  }

  return <>{symbol}</>
}

export default ProductCurrencySymbol
