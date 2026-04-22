import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Card from '../src/components/card/Card'

describe('Card component', () => {
  test('affiche le titre du logement', () => {
    render(
      <MemoryRouter>
        <Card
          id="abc123"
          title="Appartement cosy"
          cover="https://example.com/image.jpg"
        />
      </MemoryRouter>
    )

    expect(screen.getByText('Appartement cosy')).toBeInTheDocument()
  })

  test('contient un lien vers la bonne page logement', () => {
    render(
      <MemoryRouter>
        <Card
          id="abc123"
          title="Appartement cosy"
          cover="https://example.com/image.jpg"
        />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/logement/abc123')
  })

  test('applique l’image de couverture en background', () => {
    render(
      <MemoryRouter>
        <Card
          id="abc123"
          title="Appartement cosy"
          cover="https://example.com/image.jpg"
        />
      </MemoryRouter>
    )

    const imageContainer = document.querySelector('.card__image')

    expect(imageContainer).toHaveStyle(
      'background-image: url(https://example.com/image.jpg)'
    )
  })
})