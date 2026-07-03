import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faFire} className="text-red-500"/>
            <FontAwesomeIcon icon={faFire} className="text-red-500" />
            <FontAwesomeIcon icon={faFire} className="text-red-500"/>
            <FontAwesomeIcon icon={faFire} className="text-red-500"/>
            </div>
    )
}

export default PriorityDisplay;
