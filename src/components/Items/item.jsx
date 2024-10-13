import './item.css'
import CButton from '../Button/Button'
import React from "react";
import { useState } from 'react';
import ReactDOM from "react-dom";

const onButtonClickHandler = () => {
  this.setState({ showMessage: !this.state.showMessage })
};


export default function Item({index, photourl, name, price, description}) {
  const [isVisible, setIsVisible] = useState(false);
  return (  
    <div className="card">
        <div className="photo"></div>
        <div className="infoholder">
            <div className="name" >{name}</div>
            <div className="price">{price} ₽</div>
            {isVisible && ( <div>  <p className="description">{description}</p></div>)}
            <button onClick={() => setIsVisible(!isVisible)}> {isVisible ? 'Скрыть' : 'Подробнее'} </button>
        </div>
    </div>
  )
}
