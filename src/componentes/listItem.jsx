import "../estilos/listItem.css";
import { MdCheckCircle } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";

function ListItem(props) {
    return ( 
        <li className={`lista ${props.complete ? "lista-check" : ""}`}  >
            <div className="accionCheck"><span className={`check ${props.complete ? "check-active" : ""}`} onClick={props.onComplete}><MdCheckCircle /></span></div>
            
            <p className={`parrafo ${props.complete ? "parrafo-check" : ""}`}>{props.text}</p>
            <div className="accionEdit"><span className="edit" onClick={props.onEdit}><MdModeEdit /></span></div>
            <div className="accionDelete"><span className="remove" onClick={props.onDelete}><TiDelete /></span></div>
        </li>
    )
}

export { ListItem };
