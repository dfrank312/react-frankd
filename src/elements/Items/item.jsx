import './item.css'
import CButton from '../Button/Button'
import { useState } from 'react';
import { info } from '../data/data';


export default function Item({photo, name, price, description}) {
const [hidden, setHidden] = useState(false);
  return (  
    <div className="card">
        <div className="photo">{photo}</div>
        <div className="infoholder">
            <div className="name" >{name}</div>
            <div className="price">{price}</div>
            <div className="description">{description}</div>
            <CButton name="Подробнее"/>
        </div>
    </div>
  )
}

export function CardHolder ({first, second, third}) {
  return (
    <div className="cardholder">
      <Item {...info[first]}/>
      <Item {...info[second]}/>
      <Item {...info[third]}/>
    </div>
  )
}
