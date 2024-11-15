import '/src/App.css'
import './Home.css'
import logoWhite from '../assets/anklebiters-logo-white.png'

const Home = () => {
    return (
      <div className="homepage-container">
        <img src={logoWhite}></img>
        <p>---COMING SOON---</p>
        <button>SHOWS</button>
      </div>
    )
  }

  export default Home;