import { Link } from 'react-router-dom'
import './Header.css'

const linkstyle = {
  textDecoration: "none",
  color: 'white'
}

export default function Header() {
    return (
      <div className="headerholder">
        <div className="logoholder">
        <Link style={linkstyle} to="/">
        <div className="logo"></div>
        </Link>
        </div>
        <header className="Header">
        <div className="headerbuttons">
          <Link style={linkstyle} to="/products"><div className="headerbuttons"><div className="headerbutton">Товары</div></div></Link>
        </div>
      </header>
      </div>

    )
  }