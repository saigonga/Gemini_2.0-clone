import { assets } from '../../assets/assets';
import './Main.css';

function Main({name}) {
    return (
      <>
        <div className="main">
          <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon" />
          </div>
          <div className="main-container">
            <div className="greet">
              <p>
                <span>Hello, {name}.</span>
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
            <div className="main-bottom">
              <div className="search-box">
                <input type="text" placeholder="Enter a prompt here" />
                <div>
                  <img src={assets.gallery_icon} alt="gallery icon" />
                  <img src={assets.mic_icon} alt="mic icon" />
                  <img src={assets.send_icon} alt="send icon" />
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