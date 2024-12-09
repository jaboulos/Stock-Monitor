import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import StockList from '../components/StockList'
import { describe, it, expect } from 'vitest' // Use Vitest imports

describe('StockList Component', () => {
  it('renders the StockList component', () => {
    render(
      <BrowserRouter>
        <StockList />
      </BrowserRouter>,
    )

    // Check if the heading is rendered
    expect(screen.getByText(/Stocks/i)).toBeInTheDocument()

    // Check if the select dropdown is rendered
    expect(screen.getByRole('combobox')).toBeInTheDocument()

    // Check if at least one stock item is rendered
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0)
  })
})
