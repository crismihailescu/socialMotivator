// Tutorial Referenced: https://dev.to/rakumairu/simple-react-carousel-24m0

import {React, useState, useEffect} from 'react'
import '../styles/carousel.css'

function Carousel(props) {

    const {children, show} = props; // children is the component to be displayed in carousel
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                currentIndex > 0 &&
                <button onClick={prev} className="left-arrow" style={{color: 'white', fontWeight: 'bold'}} >
                    &lt;
                </button>
                }
                <div className="carousel-content-wrapper" >
                    <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                        {children}
                    </div>
                </div>
                {
                currentIndex < (length - show) &&
                <button onClick={next} className="right-arrow" style={{color: 'white', fontWeight: 'bold'}} >
                    &gt;
                </button>
                }
            </div>
        </div>
    )
}

export default Carousel;
