import './Header.css'
import { Link } from 'react-router-dom';
import Hondje from '../assets/hondje_blauw.png'

const Header = () => {
    return (
        <header>
            <ul className="header-ul" style={{margin: '0'}}>
                <img className="header-logo" src={Hondje} alt="Band Logo" style={{maxWidth: '40px', padding: '10px'}}/>
                <li className="header-list-item" key="home"><Link to="/">Home</Link></li>
                <li className="header-list-item" key="over"><Link to="/over">Over</Link></li>
                <li className="header-list-item" key="merch"><Link to="/merch">Merch</Link></li>
                <li className="header-list-item" key="shows"><Link to="/shows">Shows</Link></li>
            </ul>
        </header>
    )
}

export default Header;