import './Header.css'

export default function Header({ onChange }) {
    return (
      <header className="Header">
        <img className="logo" onClick={() => onChange('main')} src={require('../Header/logo.png')}></img>
        <a className='headerbutton' onClick={() => onChange('products')}>Товары</a>
      </header>
    )
  }