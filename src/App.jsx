import { useEffect, useState } from "react";

import { CartContext } from "./store/cart-context.js";

import Dessert from "./components/Dessert.jsx";
import EmptyCart from "./components/EmptyCart.jsx";
import Cart from "./components/Cart.jsx";

// const DESSERTS = [
//   {
//     id: crypto.randomUUID(),
//     image: "./images/waffle.jpg",
//     name: "Waffle with Berries",
//     description: "Crispy golden waffle topped with fresh mixed berries",
//     price: 362,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/creme-brulee.jpg",
//     name: "Vanilla Creme Brulee",
//     description: "Creamy vanilla bean custard topped with burnt sugar",
//     price: 400,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/macaron.jpg",
//     name: "Macaron Mix of Five",
//     description: "Selection of five colorful macarons with creamy fillings",
//     price: 492,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/tiramisu.jpg",
//     name: "Classic Tiramisu",
//     description: "Classic Italian treat with coffee, mascarpone, and cocoa",
//     price: 275,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/baklava.jpg",
//     name: "Pistachio Baklava",
//     description: "Flaky phyllo pastry layered with pistachios and honey syrup",
//     price: 146,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/meringue.jpg",
//     name: "Lemon Meringue Pie",
//     description: "Classic American pie with bright lemon and airy meringue",
//     price: 232,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/cake.jpg",
//     name: "Red Velvet Cake",
//     description: "Moist red velvet layers with cream cheese frosting",
//     price: 189,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/brownie.jpg",
//     name: "Salted Caramel Brownie",
//     description: "Moist chocolate brownie with salted caramel glaze",
//     price: 189,
//   },
//   {
//     id: crypto.randomUUID(),
//     image: "./images/panna-cotta.jpg",
//     name: "Vanilla Panna Cotta",
//     description: "Creamy vanilla dessert with delicate texture",
//     price: 362,
//   },
// ];

export default function App() {
  const [desserts, setDesserts] = useState([]);
  const [cart, setCart] = useState([]);

  // Get all desserts from backend
  async function fetchDesserts() {
    const res = await fetch(
      "https://fastapi-image-upload-m1b1.onrender.com/desserts"
    );
    const data = await res.json();
    console.log(data);
    setDesserts(data);
  }

  useEffect(() => {
    fetchDesserts();
  }, desserts);

  // add to cart
  const handleAddToCart = (dessert) => {
    const existingItem = cart.find((item) => item.id === dessert.id);
    if (!existingItem) {
      setCart((preCart) => [...preCart, { ...dessert, quantity: 1 }]);
    }
  };

  // update quantity
  const handleUpdateQuantity = (id, num) => {
    setCart((prevCart) => {
      if (num <= 0) {
        return prevCart.filter((item) => item.id !== id);
      }

      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: num } : item
      );
    });
  };

  // remove item
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // cart context values
  const cartContext = {
    cart,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      <div className="md:grid grid-cols-[7fr_3fr] items-start gap-10">
        <Dessert desserts={desserts} onAddToCart={handleAddToCart} />
        {cart.length === 0 ? <EmptyCart /> : <Cart />}
      </div>
    </CartContext.Provider>
  );
}
