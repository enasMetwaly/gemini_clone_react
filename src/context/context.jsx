import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    //2-we will create state variables
    const [input, setInput] = useState(""); //to save input data
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false); //true will remove crds suggestion and display
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    //1
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        // becuase its async functio  we use await
        const response = await runChat(input);
        setResultData(response)
        setLoading(false)
        setInput("")
    };

    const contextValue = {
        //this is one objct inside it any variable or function that we can use any where  in project
        //we will pass state variables & setter func in context value  so we can acess them in main&sidebar component
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    };
    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    );
};

export default ContextProvider;
