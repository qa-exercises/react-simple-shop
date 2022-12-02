import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/cart'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ItemsPage from './pages/ItemsPage'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
