import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import StockList from './components/StockList'
import StockDetail from './components/StockDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StockList />,
  },
  {
    path: '/stock/:symbol',
    element: <StockDetail />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
