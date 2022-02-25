import styles from '../Product.module.scss';
import Button from './Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
          <OptionSize data={props.data} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
          <OptionColor data={props.data} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} prepareColorClassName={props.prepareColorClassName} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  currentColor: PropTypes.string,
  currentSize: PropTypes.string,
  setCurrentColor: PropTypes.func,
  setCurrentSize: PropTypes.func,
  prepareColorClassName: PropTypes.func
};

export default ProductForm;