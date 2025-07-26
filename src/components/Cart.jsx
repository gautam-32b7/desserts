import { useState } from "react";
import { createPortal } from "react-dom";

import { useContext } from "react";
import { CartContext } from "../store/cart-context.js";

import CartItem from "./CartItem.jsx";
import Modal from "./Modal.jsx";

import formatPrice from "../utils/formatPrice.js";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, val) => acc + val.price * val.quantity, 0);

  return (
    <div className="bg-white rounded p-6">
      <h2 className="text-lg text-rose-500 font-bold mb-4">
        Your Cart ({cart.length})
      </h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="flex items-center justify-between mb-4">
        <p className="text-base">Order Total</p>
        <p className="text-2xl font-bold">{formatPrice(total)}</p>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="bg-rose-500 text-rose-50 px-4 py-2 font-semibold w-full rounded cursor-pointer hover:bg-rose-600"
      >
        Confirm Order
      </button>

      {/* {open && <Modal />} */}
      {open && createPortal(<Modal />, document.getElementById("modal"))}
    </div>
  );
}
