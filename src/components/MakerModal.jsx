// Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/modal.css';
import '../styles/fonts.css';
import close from '../assets/close.svg';
import sanju from '../assets/sanju.jpg';

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
                marginBottom: '50px',
              }}
              onClick={handleClose}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '8px',
                }}
              >
                <img src={close} alt="Close" />
              </div>
              <div>Terminate</div>
            </div>
          </div>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'felx-start', alignItems: 'center'}}>
        <div
          className="line-pattern"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: '20px',
            
            
            width: '100%',
            marginBottom: '20px',
            opacity: '1',
            
          }}
        >  
           <img src={sanju} alt="Sanjay" style={{borderRadius: '100%', height: '100px', width: '100px', border: '5px solid rgba(96, 239, 255, 1)'}}/>
        </div>
        </div>
        <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '30px', fontFamily: 'Expletus sans'}}>
            <div>
            Meet Sanjay, a dynamic and ambitious first-year student at the Indian Institute of Information Technology (IIITK), 
            where he is passionately pursuing his studies in Computer Science Engineering. Sanjay's curiosity and enthusiasm for 
            technology have led him to explore and master the realms of programming. In a remarkable display of his skills, 
            he has successfully crafted a sophisticated chatbot using React.js and Three.js, coupled with the powerful Gemini 
            Pro API model. This showcases not only his technical prowess but also his dedication to creating innovative solutions.
             Sanjay's journey is defined by a relentless pursuit of creativity and a commitment to pushing the boundaries of what is 
             possible in the world of technology. With a keen eye for detail and a fervor for building groundbreaking projects, 
             Sanjay is undoubtedly a promising force in the field of computer science and engineering.
            </div>
        </div>
        
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
