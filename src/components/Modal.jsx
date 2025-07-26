import { useEffect } from "react";
import cakeImage from "../assets/cake_cup.png";

export default function Modal() {
  useEffect(() => {
    const img = new Image();
    img.src = cakeImage;
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        {/* <img src={cakeImage} alt="cake" className="block mx-auto mb-4" /> */}
        <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
          <img src={cakeImage} alt="cake" className="max-w-full max-h-full" />
        </div>
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
