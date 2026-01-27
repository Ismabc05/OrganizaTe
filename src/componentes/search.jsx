import "../estilos/search.css";

function Buscador({valorInput, setvalorInput}) {
    return ( <input placeholder="Que quieres buscar?" value={valorInput} onChange={(event) => {
        setvalorInput(event.target.value);
        
    }}></input> )
};

export { Buscador };