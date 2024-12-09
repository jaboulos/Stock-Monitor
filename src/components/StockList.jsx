import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import stockData from '../data/dummy_stock_data.json'
import '../styles/StockList.css'

const StockList = () => {
  const [stocks, setStocks] = useState([])
  const [sortBy, setSortBy] = useState('name')

  // local storage for offline use.
  useEffect(() => {
    const storedStocks = localStorage.getItem('stocks')
    if (storedStocks) {
      setStocks(JSON.parse(storedStocks))
    } else {
      localStorage.setItem('stocks', JSON.stringify(stockData.stocks))
      setStocks(stockData.stocks)
    }
  }, [])

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'price') return b.price - a.price
    return b.daily_change - a.daily_change
  })

  return (
    <div className="stock-list-container">
      <h1>Stock Monitor</h1>
      <h2>Stocks</h2>
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
        <option value="daily_change">Sort by Change</option>
      </select>
      <ul className="stock-list">
        {sortedStocks.map((stock) => (
          <li key={stock.symbol} className="stock-card">
            <Link to={`/stock/${stock.symbol}`}>
              <h3>{stock.name}</h3>
              <p>Price: ${stock.price.toFixed(2)}</p>
              <p
                className={
                  stock.daily_change >= 0
                    ? 'positive-change'
                    : 'negative-change'
                }
              >
                Daily Change: {stock.daily_change}%
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StockList
