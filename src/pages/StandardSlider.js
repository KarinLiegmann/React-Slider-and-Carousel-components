import '../App.css';
import ImageSlider from '../components/StandardSlider/ImageSlider';
import { SliderData } from '../components/StandardSlider/SliderData';


const StandardSlider = () => {
    return (
        <section className="standard-slider-page">
            <ImageSlider
                slides={SliderData} />
        </section>
    );
}

export default StandardSlider




