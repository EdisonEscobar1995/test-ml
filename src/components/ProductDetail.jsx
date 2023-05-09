import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { default as currencyFormatter } from 'currency-formatter';
import Breadcrumb from './Breadcrumb';
import '../sass/productDetail.scss';

const ProductDetail = ({ data }) => {
  const product = data.item;
  return (
    <>
      <Breadcrumb categories={data?.categories || []} />
      <div className="content-detail">
        <section className="section-product">
          <div className='content-image'>
            <img src={product.picture} alt="alt_product_img" />
          </div>
          <div className="detail">
            <span>
              {`${product.condition === "new" ? "Nuevo - " : ""} ${
                product.sold_quantity
              } vendidos`}
            </span>
            <span>{product.title}</span>
            <span>
              {currencyFormatter.format(product.price.amount, {
                symbol: "$ ",
                decimal: ",",
                thousand: ".",
                precision: 0,
              })}
            </span>
            <Button variant="primary">Comprar</Button>
          </div>
        </section>
        <section className="section-description">
          <div>Descripción del producto</div>
          <div>{product.description}</div>
        </section>
      </div>
    </>
  );
};

ProductDetail.propTypes = {
  data: PropTypes.object,
};

export default ProductDetail;
