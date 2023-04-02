import React, { useState } from 'react'
import Image from './Image';
import {images as imagesData} from '../images'

const Gallery = () => {
    const [showCaptions, setShowCaptions] = useState(false);
    const [images, setImages] = useState(imagesData)
    const [formCaption, setFormCaption] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)
    
    const handleToggle = () => {
        setShowCaptions(!showCaptions);
    }

    const handleCaptionChange = (e) => {
        setFormCaption(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(formCaption){
            setImages((prevImages) => {
                const newImages = [...prevImages]
                newImages[activeIndex].caption = formCaption
                return newImages
            })
        }
        setFormCaption(""); //empties the form input
    }

    const handlePrev = () => {
        setActiveIndex(prevIndex => {
            if(prevIndex == 0){
                return images.length - 1
            }else {
                return prevIndex - 1
            }
        })
        setFormCaption(""); // because the image has changed, so form input should be reset.
    }

    const handleNext = () => {
        setActiveIndex(prevIndex => {
            if(prevIndex == images.length - 1){
                return 0
            }else {
                return prevIndex + 1
            }
        })
        setFormCaption(""); 
    }

  return (
    <div>
        <Image 
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            caption={images[activeIndex].caption} 
            formCaption={formCaption}
            showCaptions={showCaptions}
            handleCaptionChange={handleCaptionChange}
            handleSubmit={handleSubmit}
            handlePrev={handlePrev}
            handleNext={handleNext}
        />
        <button onClick={handleToggle}>
            {showCaptions ? "Hide Caption Form" : "Show Caption Form"}
        </button>
        
    </div>
  )
}

export default Gallery