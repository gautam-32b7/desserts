import { useContext } from "react";
import { CartContext } from "../store/cart-context.js";

import formatPrice from "../utils/formatPrice.js";

import { ShoppingCart } from "lucide-react";

export default function Card({ dessert }) {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <article className="bg-white rounded-lg overflow-hidden">
      <img src={dessert.image_url} alt={dessert.dessert_name} className="" />
      <div className="p-4">
        <p className="text-base text-rose-950 font-bold mb-4">
          {dessert.dessert_name}
        </p>
        <p className="text-base text-rose-900 mb-4">{dessert.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg text-rose-950 font-bold">
            {formatPrice(dessert.price)}
          </p>
          <button
            onClick={() => handleAddToCart(dessert)}
            className="flex items-center gap-2 p-2 bg-rose-500 text-rose-50 font-semibold rounded cursor-pointer hover:bg-rose-600"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  );
}
