import React from 'react'

const Image = ({ src, alt, caption,formCaption, showCaptions, handleCaptionChange, handleSubmit, handlePrev, handleNext }) => {
    return (
        <>
            <h1>Image</h1>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            <div>
                <img src={src} alt={alt} />
                <p>{caption}</p>
            </div>
            {showCaptions
                && <form onSubmit={handleSubmit}>
                    Caption: <input type="text" value={formCaption} onChange={handleCaptionChange} />
                    <br />
                    <button type="submit">Save Caption</button>
                </form>
            }

        </>
    )
}

export default Image