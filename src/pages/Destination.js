import React, {  useState } from 'react'
import data from '../data/data.json'
const Destination = () => {
    const [currentDestination, setCurrentDestination] = useState(data.destinations[0]);

  const handleToggle = (destinationName) => {
    const destination = data.destinations.find(dest => dest.name === destinationName);
    setCurrentDestination(destination);
  };

  return (
    <div>
      <h1>Pick Your Destination</h1>

      
      <div>
        {data.destinations.map((destination, index) => (
          <button key={index} onClick={() => handleToggle(destination.name)}>
            {destination.name}
          </button>
        ))}
      </div>

      <div>
        <h2>{currentDestination.name}</h2>
        <img src={currentDestination.images.png} alt={currentDestination.name} />
        <p>{currentDestination.description}</p>
        <p>Distance: {currentDestination.distance}</p>
        <p>Travel Time: {currentDestination.travel}</p>
      </div>
    </div>
  );
}

export default Destination