import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home"
import ItemsPage from "./pages/Items"

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
