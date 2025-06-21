import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Main.css';
import { Context } from '../../context/Context';


function Main(){
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSent();
        }}
    const {onSent,recentPrompts,resultData,showResult,loading,setInput,input} = useContext(Context);
    return (
      <>
        <div className="main">
          <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon" />
          </div>
          <div className="main-container">
            {!showResult
            ?<>
            <div className="greet">
              <p>
                <span>Hello  Sai</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on your upcoming trip</p>
                <img src={assets.compass_icon} alt="compass icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="bulb icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work together</p>
                <img src={assets.message_icon} alt="message icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="code icon" />
              </div>
            </div>
            </>
            :
            <div className='result'>
              <div className="result-title">
                <img src={assets.user_icon} alt=''/>
                <p>{recentPrompts}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt=''/>
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              </div>
            </div>
            }
            
            <div className="main-bottom">
              <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} onKeyDown={handleKeyDown} type="text" placeholder="Enter a prompt here" />
                <div>
                  <img src={assets.gallery_icon} alt="gallery icon" />
                  <img src={assets.mic_icon} alt="mic icon" />
                  <img onClick={()=>onSent()} src={assets.send_icon} alt="send icon" />
                </div>
              </div>
              <p className="bottom-info">
                Gemini can help you with questions, ideas, and more.
              </p>
            </div>  
          </div>
        </div>
      </>
    );
}
export default Main