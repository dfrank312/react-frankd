import './products.css'
import Search from '../../Search/Search'
import { CardHolder } from '../../Items/item'

export default function ProductsTab() {

    return (
        <div className="main">
            <h1>СПИСОК ТОВАРОВ</h1>
            <Search/>
            <CardHolder first={0} second={1} third={2}/>
            <CardHolder first={3} second={4} third={5}/>
            <CardHolder first={6} second={7} third={8}/>
            <CardHolder first={9} second={10} third={11}/>
        </div>
    )
  }