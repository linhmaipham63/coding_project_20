function DestinationSelector({ tours, selected, onSelect }) {
    const destinations = ["All Destinations", ...new Set(tours.map((t) => t.name))];
  
    return (
      <div className="text-center mb-4">
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="p-2 border rounded"
        >
          {destinations.map((dest, idx) => (
            <option key={idx} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default DestinationSelector;