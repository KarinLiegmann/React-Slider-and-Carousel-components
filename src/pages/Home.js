import { Link } from 'react-router-dom';
import standardsliderimg from '../assets/standard-slider.png';

const Home = () => {
    return (
        <div className="home">
            <Link to="/standard-slider">
                <img className="preview-image" src={standardsliderimg} alt="standard slider" />
            </Link>
        </div>
    )
}

export default Home
