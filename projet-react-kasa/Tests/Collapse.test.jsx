import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Collapse from '../src/components/collapse/Collapse'

describe('Collapse component', () => {
  test('affiche le titre', () => {
    render(
      <Collapse
        title="Description"
        content="Contenu du collapse"
      />
    )

    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  test('est fermé par défaut', () => {
    render(
      <Collapse
        title="Description"
        content="Contenu du collapse"
      />
    )

    const collapse = document.querySelector('.collapse')
    expect(collapse).not.toHaveClass('collapse--open')
  })

  test('s’ouvre au clic', async () => {
    const user = userEvent.setup()

    render(
      <Collapse
        title="Description"
        content="Contenu du collapse"
      />
    )

    const button = screen.getByRole('button', { name: /description/i })
    await user.click(button)

    const collapse = document.querySelector('.collapse')
    expect(collapse).toHaveClass('collapse--open')
    expect(screen.getByText('Contenu du collapse')).toBeInTheDocument()
  })

  test('se referme au second clic', async () => {
    const user = userEvent.setup()

    render(
      <Collapse
        title="Description"
        content="Contenu du collapse"
      />
    )

    const button = screen.getByRole('button', { name: /description/i })

    await user.click(button)
    await user.click(button)

    const collapse = document.querySelector('.collapse')
    expect(collapse).not.toHaveClass('collapse--open')
  })
})