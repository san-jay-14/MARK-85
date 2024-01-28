// Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/modal.css';
import '../styles/fonts.css';
import close from '../assets/close.svg';

const Modal = ({ open, onClose,  }) => {
  
  if (!open) return null;

  const handleClose = () => {
    onClose();
    // Call the function to update rotation
  };
  

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <div
        className="modal"
        style={{
          borderWidth: '5px',
          height: '80%',
          width: '45%',
          opacity: '0.5',
        }}
      >
        <div
          style={{
            height: 'auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'relative',
          }}
        >
          

          <div style={{ height: 'auto' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                height: '3vh',
                width: '11.72vw',
                backgroundColor: 'rgba(255, 96, 96, 1)',
                padding: '10px',
                paddingRight: '20px',
                borderRadius: '30px',
                fontFamily: 'AudioWide',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                marginBottom: '20px',
                
              }}
              onClick={handleClose}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px',
                }}
              >
                <img src={close} alt="Close" />
              </div>
              <div>Terminate</div>
            </div>
          </div>
        </div>

        
        <div style={{backgroundColor: 'white', height: '80%', fontFamily: 'Expletus sans', borderRadius: '30px', padding: '10px', overflowY: 'auto'}}>
            <div style={{marginBottom: '10px'}}>
                Introducing MARK-85, your personalized chat companion built with the powerful Gemini Pro API. 
                MARK-85 ensures a secure and private interaction by adopting a strict policy of not storing any prompts or
                data provided during conversations. With a robust tech stack comprising React.js and Three.js, this chatbot not
                only offers a seamless user experience but also boasts a developer-friendly UI.
            </div>
            <div style={{marginBottom: '10px'}}>
                Inspired by the iconic Jarvis and Arc Reactor from Iron Man, 
                MARK-85 elevates your chatbot experience to new heights. Unlike raw Gemini and ChatGPT, MARK-85 stands out with its 
                personalized touch, tailoring responses to your unique preferences. The design, influenced by Iron Man's technological marvels, 
                brings a touch of sophistication to your interactions.
            </div>
            <div style={{marginBottom: '10px'}}>
                Enjoy the benefits of a personalized, secure, and free chatbot experience with MARK-85. 
                Its cutting-edge technology and user-friendly design ensure that every conversation is a pleasure. 
                Have a good experience as you explore the capabilities of MARK-85, 
                your AI companion for personalized and secure interactions.
            </div>
            <div style={{marginBottom: '10px'}}>
                MARK-85 takes your chat experience to the next level by maintaining context from previous conversations, 
                allowing for a more coherent and personalized interaction. Users can seamlessly pick up where they left 
                off or create a completely new chat, offering flexibility and convenience.
            </div>
            <div style={{marginBottom: '10px'}}>
                One of MARK-85's standout features is its integration with Three.js, enabling users
                to playfully interact with a 3D model of MARK-85 using their cursor. This unique 
                and entertaining aspect sets MARK-85 apart from other chatbots, providing a lighthearted and engaging way to 
                interact with technology.
            </div>
            <div style={{marginBottom: '10px'}}>
                Unlike traditional chatbots, MARK-85 goes beyond mere text-based interactions, 
                introducing a 3D presence that adds a touch of humor and innovation to your conversations. 
                Immerse yourself in a one-of-a-kind experience, where technology meets entertainment seamlessly. 
                Engage with MARK-85, your chat companion with a dynamic 3D twist, and have a truly enjoyable and interactive chat experience.
            </div>
            <div style={{marginBottom: '10px'}}>
                *Terminate M85 : Closes the modal and the chat history and context is gone.
            </div>
            <div style={{marginBottom: '10px'}}>
                *New Gen M85 : A new chat is initialised and the previous chat history and context is gone.
            </div>
            <div style={{marginBottom: '10px'}}>
                *Minimise : Just closes the modal and the chat history and context is saved temporarily.
            </div>
            
            </div>   
        </div>
        
      
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
