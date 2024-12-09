import React from 'react'
import { useParams, Link } from 'react-router-dom'
import stockData from '../data/dummy_stock_data.json'
import '../styles/StockDetail.css'

const StockDetail = () => {
  const { symbol } = useParams()
  const stock = stockData.stocks.find((s) => s.symbol === symbol)

  if (!stock) {
    return <p className="stock-not-found">Stock not found!</p>
  }

  return (
    <div className="stock-detail-container">
      <h2 className="stock-name">{stock.name}</h2>
      <div className="stock-info">
        <p>Price: ${stock.price.toFixed(2)}</p>
        <p
          className={
            stock.daily_change >= 0 ? 'positive-change' : 'negative-change'
          }
        >
          Daily Change: {stock.daily_change}%
        </p>
        <p>Symbol: {stock.symbol}</p>
      </div>
      <Link to="/" className="back-link">
        Back to Stock List
      </Link>
    </div>
  )
}

export default StockDetail
