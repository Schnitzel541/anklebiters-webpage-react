import '/src/App.css'
import shirtFront from '/src/assets/merch_front.jpg';
import shirtBack from '/src/assets/merch_back.jpg';


const Merch = () => {
    <div className="mainContent">
        <div className="merchPageContent">
            <div className="leftContent"></div>
                <img src={shirtFront} alt="" className="shirtImage" />
                <img src={shirtBack} alt="" className="shirtImage" />
            <div className="rightContent"></div>
        </div>
    </div>
}

export default Merch;