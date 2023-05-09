import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { default as currencyFormatter } from "currency-formatter";
import ic_shipping from '../assets/images/ic_shipping.png';
import Breadcrumb from './Breadcrumb';
import '../sass/results.scss';

const Results = ({ data }) => {
  return (
    <>
      <Breadcrumb categories={data?.categories || []} />
      <div className="content-results">
        {data?.items.length > 0 ? (
          data?.items.map((item, index) => (
            <div className="item-result" key={item.id}>
              <div className='img-container'>
                <Link to={`/items/${item.id}`}>
                  <img className="img-item" src={item.picture} alt={item.title} />
                </Link>
              </div>
              <div key={`${index}_${item.id}`} className="item-detail">
                <span className="span-price">
                  {currencyFormatter.format(item.price.amount, {
                    symbol: "$ ",
                    decimal: ",",
                    thousand: ".",
                    precision: 0
                  })}
                  {item.condition === 'new' ? <img src={ic_shipping} alt={'ic_shipping'} /> : ''}
                </span>
                <span className="span-title">{item.title}</span>
              </div>
              <div className="item-city">
                <span>{item.seller_state}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <strong style={{ fontSize: '1.5rem' }}>
                  {`Sin resultados.`}
                </strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Results.propTypes = {
  data: PropTypes.object
};

export default Results;
