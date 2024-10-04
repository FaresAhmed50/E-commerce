import {createContext, useState} from "react";


const CounterContext = createContext(0);


export default function CounterContextProvider (propos){

    const [Counter, setCounter] = useState(0);

    return( <CounterContext.Provider value={{Counter , setCounter}} >

            {propos.children}

    </CounterContext.Provider>
    );

}
