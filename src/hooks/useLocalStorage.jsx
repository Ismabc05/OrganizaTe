import React from "react";

function useLocalStorage (name, valorInicial) {

  const [item, setItem] = React.useState(valorInicial);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {

    setTimeout(() => {

      try {
        const localStorageitem = localStorage.getItem(name);
        let parsedItem;

        if(!localStorageitem){
        localStorage.setItem(name, JSON.stringify(valorInicial));
        parsedItem = valorInicial;
        }else{
        parsedItem = JSON.parse(localStorageitem);
        setItem(parsedItem)
        setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        setError(true)
      }

    },2000)

  }, [])



  const actualizar = (newItem) => {
    localStorage.setItem(name, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {item, actualizar, loading, error};

}

export  { useLocalStorage };


//const listaDeLaCompra = [
  //{text: "Lata de tomate", complete: false},
  //{text: "Yogures naturales", complete: false},
  //{text: "Ensalada César", complete: false},
  //{text: "Pizza 4 quesos", complete: false},
  //{text: "Spagetti con queso", complete: false},
  //{text: "Chocolate negro", complete: false},
  //{text: "Rollitos de opio", complete: false},
  //{text: "fffjfjfj", complete: false},
  //{text: "fkfkfkff verde", complete: false},
  //{text: "qqqq verde", complete: false},
  //{text: "wwww verde", complete: false},
  //{text: "eeee verde", complete: false},
  //{text: "rrrr verde", complete: false},
  //{text: "ttt verde", complete: false},
  //{text: "yyyy verde", complete: false},
  //{text: "uuuu verde", complete: false},
//]

//localStorage.setItem("LISTA_V1", JSON.stringify(listaDeLaCompra));