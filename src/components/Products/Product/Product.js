
import styles from './Product.module.scss';
import ProductForm from './ProductForm/ProductForm';
import ProductImage from './ProductImage/ProductImage';
import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const Product = props => {
  const data = props.data;
  const [currentColor, setCurrentColor] = useState(data.colors[0]);
  const [currentSize , setCurrentSize] = useState(data.sizes[0].name);
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  const getPrice = useMemo (() => {
    const result = data.sizes.find( ({ name }) => name === currentSize)
    return data.basePrice + result.additionalPrice;
  }, [data.basePrice, currentSize, data.sizes]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('===========')
    console.log('Name: ', data.title)
    console.log('Price: ', getPrice())
    console.log('Size: ', currentSize)
    console.log('Color: ', currentColor)
  }

  return (
    <article className={styles.product}>
      <ProductImage title={data.title} name={data.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{data.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm 
          data={data} 
          handleSubmit={handleSubmit} 
          currentSize={currentSize} 
          currentColor={currentColor} 
          setCurrentSize={setCurrentSize} 
          setCurrentColor={setCurrentColor} 
          prepareColorClassName={prepareColorClassName} 
          getPrice={getPrice}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  data: PropTypes.object
};

export default Product;