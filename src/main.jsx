import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/productcontext.jsx'
import { FilterProvider } from './context/filterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <FilterProvider>
        <CartProvider>
    <App />
        </CartProvider>
    </FilterProvider>
    </AppProvider>
  </StrictMode>,
)
