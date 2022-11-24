import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/cart"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home"
import ItemsPage from "./pages/Items"

function App() {
  return (
    <CartProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
