import cakeImage from "../assets/order-confirm.png";

export default function Modal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        <img src={cakeImage} alt="cake" className="block mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-rose-950 mb-4">
          Order Confirmed
        </h2>
        <p className="text-base text-rose-900 mb-4">
          We hope you enjoy your food
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-rose-500 text-rose-50 px-4 py-2 font-semibold w-full rounded cursor-pointer hover:bg-rose-600"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
