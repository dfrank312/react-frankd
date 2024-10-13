import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Routes, Route, Link } from 'react-router-dom'

import {MainTab} from './components/Tabs/Main/maintab'
import {ProductsTab} from './components/Tabs/Products/products'

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>  
        <Route path="/" element={<MainTab />}/>
        <Route path="/products" element={<ProductsTab />}/>
      </Routes>
      <Footer/>
    </div>
  );
}
