
import React, {useState} from 'react'
import data from '../data/data.json'

const Crew = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  

  const handleToggle = (index)=>{
    setCurrentDestination(index)
  }
  return (
    <section className="crew">
      <h1> 02 meet our crew</h1>
      <article className='crew-content'>
        <div className="crew-id">
          <div className="crew-details">
            <h3>{data.crew[currentDestination].role}</h3>
            <h2>{data.crew[currentDestination].name}</h2>
            <p>{data.crew[currentDestination].bio}</p>
          </div>
          <div className="crew-image">
            <img src={data.crew[currentDestination].images.png} alt={data.crew[currentDestination].name} />
          </div>
        </div>
      </article>
    <div className="dot-indicator">
    {data.crew.map((_, index) => (
          <button className={index === currentDestination ? 'dot active' : 'dot'} key={index} onClick={() => handleToggle(index)}>
          </button>
        ))}
    </div>
    </section>
  )
}

export default Crew