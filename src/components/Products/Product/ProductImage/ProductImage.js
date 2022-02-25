import styles from '../Product.module.scss';
import PropTypes from 'prop-types';

const ProductImage = props => {
    return <div className={styles.imageContainer}>
    <img 
      className={styles.image}
      alt={props.title}
      src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
  </div>
}

ProductImage.propTypes = {
  name: PropTypes.string,
  currentColor: PropTypes.string,
  title: PropTypes.string
};

export default ProductImage;