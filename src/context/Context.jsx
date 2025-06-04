import { createContext, use, useState } from 'react';
import main from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState('');
    const [recentPrompts, setRecentPrompts] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');
    const [error, setError] = useState('');

    const onSent =async(props)=>{

        setResultData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompts(input)
        setError('');
        const response =await main(input);
        setResultData(response);
        setLoading(false);  
        setInput('');

    
    }
    const contextValue = {
        input, 
        setInput,
        recentPrompts,
        setRecentPrompts,
        prevPrompts,
        setPrevPrompts,
        showResult,
        loading,
        resultData,
        error,
        onSent
};

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;