import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // buscar o elemento e verificar a existencia dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render  the colors correctly', () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // verifica se o background color está correto
    expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' })
  })
})
