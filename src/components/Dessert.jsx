import Card from "./Card.jsx";

export default function Dessert({ desserts, onAddToCart }) {
  return (
    <div>
      <h1 className="text-2xl text-rose-950 font-bold mb-6">Desserts</h1>
      <div className="md:grid grid-cols-3 gap-6">
        {desserts.map((dessert) => (
          <Card key={dessert.id} dessert={dessert} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
