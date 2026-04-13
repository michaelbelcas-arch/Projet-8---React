import { Link } from 'react-router-dom'
import './card.css'

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div
        className="card__image"
        style={cover ? { backgroundImage: `url(${cover})` } : {}}
      >
        <div className="card__overlay"></div>
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  )
}

export default Card