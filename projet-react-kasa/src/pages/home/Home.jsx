import { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import homeBanner from '../../assets/image-home.png'
import './home.css'

function Home() {
  const [logements, setLogements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchLogements() {
      try {
        const response = await fetch('http://localhost:8080/api/properties')

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des logements')
        }

        const data = await response.json()
        setLogements(data)
      } catch (err) {
        console.error('Erreur API :', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchLogements()
  }, [])

  if (loading) {
    return (
      <main className="home">
        <div className="home__container">
          <p>Chargement...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="home">
        <div className="home__container">
          <p>Une erreur est survenue lors du chargement des logements.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="home">
      <div className="home__container">
        <Banner
         title="Chez vous, partout et ailleurs"
         image={homeBanner}
         variant="home"
        />

        <section className="home__gallery">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Home