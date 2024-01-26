import { FaEdit, FaRegCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { PiTriangleThin } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import "./ClockStyling.css"

const Icons = () => {
    return(
    <div>
        <div >
            <FaEdit />
        </div>
        <div >
            <PiTriangleThin />
        </div>
        <div >
            <FaRegCircle />
        </div>
        <div >
            <GiCheckMark />
        </div>
        <div >
            <FaXmark />
        </div>
    </div>
    )
}

export { FaEdit, PiTriangleThin, FaRegCircle, FaXmark, GiCheckMark, Icons}