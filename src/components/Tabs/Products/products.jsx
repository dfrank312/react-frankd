import './products.css'
import { useEffect, useState } from 'react'
import PRODUCTS_DATA from './data.json'
import Item from '../../Items/item';

const filterProducts = (searchText, listOfProducts) => {
    if (!searchText) {
        return listOfProducts;
    }
    return listOfProducts.filter(({namep}) =>
        namep.toLowerCase().includes(searchText.toLowerCase())
    );
}

const ProductsTab = () => {
    const data = PRODUCTS_DATA;

    const [productsList, setProductsList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const FilteredProducts = filterProducts(searchTerm, data)
            setProductsList(FilteredProducts);
        }, 300);
        
        return () => clearTimeout(Debounce);
    }, [searchTerm] );

    
    return (
        <div className="main">
            <h1 className='list'>СПИСОК ТОВАРОВ</h1>
            <input value={searchTerm} autoFocus type="search" autoComplete="off" placeholder="Поиск..." onChange={(e) => setSearchTerm(e.target.value)}></input>
            <div className="items">
            {productsList.map((items) => {
                    return <Item name={items.namep} price={items.pricep} description={items.descriptionp} photourl={items.photourlp}></Item>
                })}
            </div>
        </div>
    )
}

export {ProductsTab}