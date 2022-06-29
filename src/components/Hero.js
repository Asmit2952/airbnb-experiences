import photogrid from "../images/photo-grid.png"

export default function Hero () {
    return (
        <div className="hero-section">
            <div className="photog">
                <img src={photogrid} alt="airbnb grid" className="air-grid"/>
            </div>
            <div className="info">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}