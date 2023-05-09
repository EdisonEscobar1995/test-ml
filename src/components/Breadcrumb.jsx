import { Breadcrumb as BreadcrumbRb } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../sass/breadcrumb.scss';

const { Item } = BreadcrumbRb;

const Breadcrumb = ({ categories }) => {
  return (
    <BreadcrumbRb className='nav-breadcrum'>
      {categories.map((category, index) =>
        <Item key={index}>{category}</Item>
      )}
    </BreadcrumbRb>
  );
}

Breadcrumb.propTypes = {
  categories: PropTypes.array
};

export default Breadcrumb;