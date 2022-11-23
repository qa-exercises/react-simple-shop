import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/items" element={<h1>Items</h1>} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
