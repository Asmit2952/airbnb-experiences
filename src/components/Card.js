import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="images" className="card--image" />
            <div className="card--stats">
                <FontAwesomeIcon icon={faStar} className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}