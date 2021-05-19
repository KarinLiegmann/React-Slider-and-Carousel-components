import { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {

    const [currentImage, setCurrentImage] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === currentImage ? 'slide active' : 'slide'} key={index}>
                        {index === currentImage && (<div>
                            <img src={slide.image} alt="cat" className="image" />
                            <p className="credit">Photo by <a href={slide.credit} target="_blank">{slide.author}</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
                            </p>
                        </div>)}
                    </div>
                )
            })}
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </section>
    )
}

export default ImageSlider
