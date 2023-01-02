import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import Layout from "../../components/Layout"
import '@testing-library/jest-dom'

describe('Layout', () => {
  it('renders a main heading', () => {
    render(<Layout />)

    const main = screen.getByRole('heading', {
      name: /bits/i,
    })

    expect(main).toBeInTheDocument()

    const sub = screen.getByRole('heading', {
      name: /to further reiterate/i,
    })

    expect(sub).toBeInTheDocument()
  })
})