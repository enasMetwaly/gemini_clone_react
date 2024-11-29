import { createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const contextValue = { //this is one objct inside it any variable or function that we can use any where  in project



    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
