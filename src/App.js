import './App.css';
import Header from './elements/Header/Header';
import Footer from './elements/Footer/Footer';
import { useState } from 'react';
import { useState } from 'react';

import Maintab from './elements/Tabs/Main/maintab';
import ProductsTab from './elements/Tabs/Products/products';

export default function App() {
  const [tab, setTab] = useState('main')
  return (
    <div className="App">
      <Header onChange={(current) => setTab(current)}/>
      {tab === 'main' && <>
        <Maintab/>
      </>}
      {tab === 'products' && <>
        <ProductsTab/>
      </>}
      <Footer/>
    </div>
  );
}
