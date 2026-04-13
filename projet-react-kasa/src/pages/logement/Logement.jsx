import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/slideshow/Slideshow'
import Collapse from '../../components/collapse/Collapse'
import './logement.css'

function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchLogement() {
      try {
        const response = await fetch('http://localhost:8080/api/properties')

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du logement')
        }

        const data = await response.json()
        const logementTrouve = data.find((item) => item.id === id)

        if (!logementTrouve) {
          setError(true)
          return
        }

        setLogement(logementTrouve)
      } catch (err) {
        console.error('Erreur API :', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchLogement()
  }, [id])

  if (loading) {
    return (
      <main className="logement">
        <div className="logement__container">
          <p>Chargement...</p>
        </div>
      </main>
    )
  }

  if (error || !logement) {
    return <Navigate to="/error" replace />
  }

  const rating = Number(logement.rating)

  return (
    <main className="logement">
      <div className="logement__container">
        <Slideshow pictures={logement.pictures} title={logement.title} />

        <section className="logement__infos">
          <div className="logement__main">
            <h1 className="logement__title">{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>

            <div className="logement__tags">
              {logement.tags.map((tag) => (
                <span key={tag} className="logement__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="logement__host-rating">
            <div className="logement__host">
              <p className="logement__host-name">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="logement__host-picture"
              />
            </div>

            <div className="logement__rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= rating
                      ? 'logement__star logement__star--active'
                      : 'logement__star'
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="logement__collapses">
          <div className="logement__collapse">
            <Collapse
              title="Description"
              content={logement.description}
            />
          </div>

          <div className="logement__collapse">
            <Collapse
              title="Équipements"
              content={logement.equipments.join('\n')}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Logement