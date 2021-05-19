import { Link } from 'react-router-dom';
import standardsliderimg from '../assets/standard-slider.png';
import animatedcardimg from '../assets/animated-card.png';

const Home = () => {
    return (
        <div className="home">
            <Link to="/standard-slider">
                <img className="preview-image" src={standardsliderimg} alt="standard slider" />
            </Link>
            <Link to="/animated-card">
                <img className="preview-image" src={animatedcardimg} alt="animated card" />
            </Link>
        </div>
    )
}

export default Home
