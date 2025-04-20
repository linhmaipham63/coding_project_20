function TourCard({ tour, onRemove }) {
    const { id, name, info, image, price } = tour;
  
    return (
      <div className="border rounded shadow p-4">
        <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-2" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-green-600 font-semibold mb-2">${price}</p>
        <p className="text-sm mb-4">{info.slice(0, 100)}...</p>
        <button
          onClick={() => onRemove(id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Not Interested
        </button>
      </div>
    );
  }
  
  export default TourCard;
