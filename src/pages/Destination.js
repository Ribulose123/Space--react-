import React, {  useState } from 'react'
import data from '../data/data.json'
const Destination = () => {
    const [currentDestination, setCurrentDestination] = useState(data.destinations[0]);

  const handleToggle = (destinationName) => {
    const destination = data.destinations.find(dest => dest.name === destinationName);
    setCurrentDestination(destination);
  };

  return (
    <section className="destination">
      <h1>01 Pick Your Destination</h1>

      <article className='destination-content'>
      <div className='destination-toggle'>
        {data.destinations.map((destination, index) => (
          <button key={index} onClick={() => handleToggle(destination.name)}>
            {destination.name}
          </button>
        ))}
      </div>

      <div className='destination-id'>
        <div className="destination-image">
        <img src={currentDestination.images.png} alt={currentDestination.name} />
        </div>
        <div className="destination-detials">
        <h2>{currentDestination.name}</h2>
        <p>{currentDestination.description}</p>
       <div className="strong">
       <p>Distance: <strong>{currentDestination.distance}</strong></p>
       <p>Travel Time: <strong>{currentDestination.travel}</strong></p>
       </div>
        </div>
      </div>
      </article>
    </section>
  );
}

export default Destination