import { createContext } from 'react';
import main from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {

    const onSet =async(props)=>{
      await main(props);       
    }

    onSet("hello my name is sai");

    const contextValue = {

   };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;