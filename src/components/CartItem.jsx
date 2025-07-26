import { useContext } from "react";
import { CartContext } from "../store/cart-context.js";

import formatPrice from "../utils/formatPrice.js";

import { Minus, Plus } from "lucide-react";

export default function CartItem({ item }) {
  const { handleUpdateQuantity, handleRemoveItem } = useContext(CartContext);

  return (
    <div className="">
      <div className="flex items-center gap-4 mb-4 rounded w-full p-2 bg-gray-50">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="h-16 w-16 object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-medium">{item.name}</span>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="p-2 flex-shrink-0 cursor-pointer"
            >
              X
            </button>
          </div>
          <p className="text-gray-600">{item.quantity}x</p>
          <div className="flex items-center justify-between">
            <p className="text-base font-bold">
              {formatPrice(item.price * item.quantity)}
            </p>
            <div className="flex items-center rounded border border-gray-300">
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                className="p-1 cursor-pointer"
              >
                <Minus size={20} />
              </button>
              <span className="px-3 py-1">{item.quantity}</span>
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                className="p-1 cursor-pointer"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
