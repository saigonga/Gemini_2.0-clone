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


    const delayPara =(index,nextWord)=>{
        setTimeout(function (){
            setResultData(prev => prev + nextWord)
        },75*index)

    }


    const onSent = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        setError('');   
        let usedPrompt;
        if (prompt !== undefined) {
            usedPrompt = prompt;
            setRecentPrompts(prompt);
        } else {
            usedPrompt = input;
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompts(input);
        }
        try {
            const response = await main(usedPrompt);
            let responseArray = response.split('**');
            let newResponse = '';
            for (let i = 0; i < responseArray.length; i++) {
                if (i === 0 || i % 2 !== 1) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }
            let newResponse2 = newResponse.split('*').join("<br>");
            let newResponseArray = newResponse2.split(" ");
            for (let i = 0; i < newResponseArray.length; i++) {
                const nextWord = newResponseArray[i];
                delayPara(i, nextWord + " ");
            }
        } catch (err) {
            setError('Something went wrong');
        }
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