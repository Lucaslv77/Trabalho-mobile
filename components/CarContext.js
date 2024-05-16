import React, {createContext, useState} from "react";

const CarContext = createContext();

export default function CarProvider(children) {
    //criando o estado carro que vai ser compartilhado entre
    //os outros componentes
   const[carros, setCarros] = useState([]);

    //children fala para o contexto que ele te´r uns componentes
    //que vão utilizar dos valores que ele for gerados
    return(
        <CarContext.Provider value={{carros, setCarros}}>
              {children}
        </CarContext.Provider>
    )
}

export {CarContext}