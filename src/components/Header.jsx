import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import logoML from '../assets/images/Logo_ML.png';
import ic_Search from '../assets/images/ic_Search.png';
import '../sass/header.scss';

const Header = () => {
  const refInput = useRef(null);
  const [value, setValue] = useState('');
  let history = useNavigate();
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get('search') || '';

  useEffect(() => {
    if (!query) {
      refInput.current.value  = '';
    }
  }, [query])

  const onSearch = (value) => {
    history(`/items?search=${value}`);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.keyCode === 13) {
      event.preventDefault();
      onSearch(event.target.value);
      event.target.blur();
    }
  };

  const handleClick = () => {
    onSearch(value);
  };

  return (
    <header className="custom-header">
      <div className="custom-container-header">
        <img className="img-ml" src={logoML} alt="logo_ML" />
        <div className="input-group">
          <input
            ref={refInput}
            type="text"
            className="form-control"
            defaultValue={query}
            placeholder="Nunca dejes de buscar"
            aria-label="Nunca dejes de buscar" aria-describedby="basic-addon1"
            onKeyUp={handleChange}
          />
          <span
            onClick={handleClick}
            className="input-group-text"
            id="basic-addon1"
          >
            <img className="img-search" src={ic_Search} alt="ic-search" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
