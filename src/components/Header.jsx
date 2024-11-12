import './Header.css'
import Hondje from '../assets/hondje_blauw.png'

const Header = () => {
    return (
        <header>
            <ul className="header-ul" style={{margin: '0'}}>
                <img className="header-logo" src={Hondje} alt="Band Logo" style={{maxWidth: '40px', padding: '10px'}}/>
                <li className="header-list-item" key="home"><a href="/">Home</a></li>
                <li className="header-list-item" key="over"><a href="/over">Over</a></li>
                <li className="header-list-item" key="merch"><a href="/merch">Merch</a></li>
                <li className="header-list-item" key="shows"><a href="/shows">Shows</a></li>
            </ul>
        </header>
    )
}

export default Header;