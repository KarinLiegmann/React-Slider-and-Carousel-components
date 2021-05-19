import '../App.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';


const StandardSlider = () => {
    return (
        <ImageSlider
            slides={SliderData} />
    );
}

export default StandardSlider




