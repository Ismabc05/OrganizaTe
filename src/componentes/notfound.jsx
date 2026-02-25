import { Link } from "react-router-dom";
import "../estilos/notfound.css";

export function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página no encontrada</p>

      <Link to="/" className="btn-home">
        Volver
      </Link>
    </div>
  );
}