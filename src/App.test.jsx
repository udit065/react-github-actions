import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'

describe('App', () => {
  it('renders the Practice heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Practice' })).toBeInTheDocument()
  })
})
