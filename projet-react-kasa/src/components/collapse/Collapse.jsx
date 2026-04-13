import { useState } from 'react'
import arrowIcon from '../../assets/collapse-arrow.png'
import './collapse.css'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="collapse__title">{title}</span>

        <img
          src={arrowIcon}
          alt=""
          className="collapse__icon"
        />
      </button>

      <div className="collapse__body">
        <div className="collapse__inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Collapse