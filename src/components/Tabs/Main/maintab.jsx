import Infoblock from './infoblock/infoblock'
import './maintab.css'
import CButton from '../../Button/Button'
import { Link } from 'react-router-dom'

const linkstyle = {
    textDecoration: "none",
    color: 'white'
  }

const MainTab = () => {
    return  (
        <div className="maintab">
            <Infoblock/>
            <Link style={linkstyle} to="/products">
                <CButton name="К ПОКУПКАМ"/>
            </Link>
        </div>
    )
}

export {MainTab}