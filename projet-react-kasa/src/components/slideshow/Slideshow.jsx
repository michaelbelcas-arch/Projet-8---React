import { useState } from 'react'
import './slideshow.css'

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const hasMultiplePictures = pictures.length > 1

  function goToPrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  function goToNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="slideshow">
      <div className="slideshow__container">
        <div
          className="slideshow__track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {pictures.map((picture, index) => (
            <img
              key={`${title}-${index}`}
              src={picture}
              alt={`${title} - image ${index + 1}`}
              className="slideshow__image"
            />
          ))}
        </div>

        {hasMultiplePictures && (
          <>
            <button
              type="button"
              className="slideshow__arrow slideshow__arrow--left"
              onClick={goToPrevious}
              aria-label="Image précédente"
            >
              ‹
            </button>

            <button
              type="button"
              className="slideshow__arrow slideshow__arrow--right"
              onClick={goToNext}
              aria-label="Image suivante"
            >
              ›
            </button>

            <p className="slideshow__counter">
              {currentIndex + 1}/{pictures.length}
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default Slideshow