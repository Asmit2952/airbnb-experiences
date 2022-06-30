import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'

function App() {

  const card = data.map(item => {
    return (
      <Card
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
      />
    )
  })

  return (
    <div>
       <Navbar />
       <Hero />
            <section className="cards-list">
                {card}
            </section>
    </div>
  )
}

export default App;
