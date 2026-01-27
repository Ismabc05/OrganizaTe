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