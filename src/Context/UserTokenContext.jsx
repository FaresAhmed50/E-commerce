import {createContext, useEffect, useState} from "react";


export let UserTokenContext = createContext(null);


export default function UserTokenContextProvider (propos){

    const [Token, setToken] = useState(null);

    useEffect(() => {


        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }

    }, []);


    return ( <UserTokenContext.Provider value={{Token , setToken}} >

            {propos.children}

        </UserTokenContext.Provider>

    );


}