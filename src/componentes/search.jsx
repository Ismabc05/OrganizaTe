import "../estilos/search.css";

function Buscador({valorInput, setvalorInput}) {
    return ( <input placeholder="Busca tu tarea aqui..." value={valorInput} onChange={(event) => {
        setvalorInput(event.target.value);
        
    }}></input> )
};

export { Buscador };