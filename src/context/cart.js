import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([])

  const addItem = (itemId) => {
    setItemsInCart(oldItems => [...oldItems, itemId])
  }

  const removeItem = (itemId) => {
    setItemsInCart(oldItems => oldItems.filter((id) => id !== itemId))
  }

  const isItemInCart = (itemId) => {
    return !!itemsInCart.find((id) => id === itemId)
  }

  return (
    <CartContext.Provider
      value={{ itemsInCart, addItem, removeItem, isItemInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}