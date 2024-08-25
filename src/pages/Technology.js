import React, {useState} from 'react'
import data from '../data/data.json'

const Technology = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  

  const handleToggle = (index)=>{
    setCurrentDestination(index)
  }
  return (
    <section className="tech">
      <h1>03 our Technology</h1>

      <article className='tech-content'>
        <div className="tech-btn">
        {data.technology.map((_, index) => (
          <button className={index === currentDestination ? 'dot active' : 'dot'} key={index} onClick={() => handleToggle(index)}>
            {index + 1}
          </button>
        ))}
        </div>
        <div className="tech-id">
          <div className="tech-details">
            <h3>The Technology.....</h3>
            <h2>{data.technology[currentDestination].name}</h2>
            <p>{data.technology[currentDestination].description}</p>
          </div>
          <div className="tech-image">
            <img src={data.technology[currentDestination].images.portrait} alt={data.technology[currentDestination].name} />
          </div>
        </div>
      </article>
    </section>
  )
}

export default Technology