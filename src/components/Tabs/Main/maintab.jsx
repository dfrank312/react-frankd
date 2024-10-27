import Infoblock from './infoblock/infoblock'
import './maintab.css'
import CBigButton from '../../Button/BigButton'
import { Link } from 'react-router-dom'
import { InfoForm } from './infoform/infoform'

const linkstyle = {
    textDecoration: "none",
    color: 'white'
  }

const MainTab = () => {
    return  (
        <div className="maintab">
            <Infoblock/>
            <Link style={linkstyle} to="/products">
                <CBigButton name="К ПОКУПКАМ"/>
            </Link>
            <InfoForm/>
        </div>
    )
}

export {MainTab}