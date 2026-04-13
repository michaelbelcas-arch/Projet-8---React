import { useState } from 'react'
import './collapse.css'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{title}</span>
        <span className={isOpen ? 'collapse__icon collapse__icon--open' : 'collapse__icon'}>
          ˄
        </span>
      </button>

      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse