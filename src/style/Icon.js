import { BsTriangle } from "react-icons/bs";
import { FaEdit, FaRegSquare,FaRegCircle } from "react-icons/fa";
import "./ClockStyling.css"
import { PiTriangleThin } from "react-icons/pi";

const Icons = () => {
    return(
    <div>
        <div>
            <BsTriangle />
        </div>
        <div >
            <FaEdit />
        </div>
        <div >
        <PiTriangleThin />
        </div>
        <div >
            <FaRegCircle />
        </div>
    </div>
    )
}

export {BsTriangle, FaEdit, PiTriangleThin, FaRegCircle, Icons}