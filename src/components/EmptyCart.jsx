import emptyCartImage from "../assets/empty-cart.svg";

export default function EmptyCart() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg text-rose-500 font-bold mb-4">Your Cart (0)</h2>
      <img
        src={emptyCartImage}
        alt="empty cart"
        className="block mx-auto mb-4"
      />
      <p className="text-base text-rose-900 text-center">
        Your added items will appear here
      </p>
    </div>
  );
}
