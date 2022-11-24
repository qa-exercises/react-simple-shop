import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/cart'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import ItemsPage from './pages/Items'
import CheckoutPage from './pages/Checkout/'

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
