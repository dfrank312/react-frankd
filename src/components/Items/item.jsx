import './item.css'
import CButton from '../Button/Button'
import React from "react";
import { useState } from 'react';

const onButtonClickHandler = () => {
  this.setState({ showMessage: !this.state.showMessage })
};


export default function Item({index, photourl, name, price, description}) {
  const [isVisible, setIsVisible] = useState(false);
  return (  
    <div className="card">
        <div className="photo" style={{ backgroundImage: `url(${photourl})` }}></div>
        <div className="infoholder">
            <div className="name" >{name}</div>
            {isVisible && ( <h1 className='pricename'>Стоимость:</h1>)}
            {isVisible && ( <div className="price"> {price} ₽</div>)}
            {isVisible && ( <h1 className='descriptioname'>Описание:</h1>)}
            {isVisible && ( <div>  <p className="description">{description}</p></div>)}
            <button onClick={() => setIsVisible(!isVisible)}> {isVisible ? 'Скрыть' : 'Подробнее'} </button>
        </div>
    </div>
  )
}
