import { useState } from 'react';
import Header from '../components/Header';

const Layout = () => {
  const [querySearch, setQuerySearch] = useState('');
  return (
    <div className="custom-layout">
      <Header
        querySearch={querySearch}
        setQuerySearch={setQuerySearch}
      />
    </div>
  );
};

export default Layout;