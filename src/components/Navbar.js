import logo from "../images/airbnb-logo.svg"

export default function Navbar () {
    return (
        <nav className="navbar">
            <img src={logo} alt="airbnb logo" className="air-logo" />
        </nav>
    )
}