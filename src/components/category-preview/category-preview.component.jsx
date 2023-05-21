import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'

export default function CategoryPreview({ title, products }) {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>
          <Link to={`/shop/${title}`}>
            {title.toUpperCase()}
          </Link>
        </span>
      </h2>
      <div className='preview'>
        {products?.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}