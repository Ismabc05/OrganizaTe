import "../estilos/listItem.css";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ListItem(props) {
    return ( 
        <li className={`lista ${props.complete ? "lista-check" : ""}`}  >

            <p className={`parrafo ${props.complete ? "parrafo-check" : ""}`}>{props.text}</p>

            <img className="imagen" src={props.image} alt={props.text} />

            <div className="acciones">
                
                <span className={`check ${props.complete ? "check-active" : ""}`} onClick={props.onComplete}><FaCheck /></span>
                <span className="remove" onClick={props.onDelete}><MdDelete /></span>

            </div>
        </li>
    )
}

export { ListItem };
