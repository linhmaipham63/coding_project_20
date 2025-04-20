import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";

const API_URL = "https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [selected, setSelected] = useState("All Destinations");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTours(data);
      setFilteredTours(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleSelectionChange = (destination) => {
    setSelected(destination);
    if (destination === "All Destinations") {
      setFilteredTours(tours);
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === destination));
    }
  };

  const handleRemoveTour = (id) => {
    const newList = filteredTours.filter((tour) => tour.id !== id);
    setFilteredTours(newList);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">🌍 Tour Explorer</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error fetching data.</p>
      ) : (
        <>
          <DestinationSelector
            tours={tours}
            selected={selected}
            onSelect={handleSelectionChange}
          />
          <Gallery
            tours={filteredTours}
            onRemove={handleRemoveTour}
            onRefresh={fetchTours}
          />
        </>
      )}
    </main>
  );
}

export default App;
