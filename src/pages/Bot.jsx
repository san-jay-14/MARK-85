import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Ironman from '../components/Ironman.jsx';
import { OrbitControls } from '@react-three/drei';
import '../styles/fonts.css';
import Modal from '../components/Modal.jsx';
import { useState } from 'react';
import Chat from '../components/Chat.jsx';
import info from '../assets/info.svg';
import InfoModal from '../components/infoModal.jsx';
import maker from '../assets/maker.svg';
import MakerModal from '../components/makerModal.jsx';
import { useEffect } from 'react';


const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iisOpen, isetIsOpen] = useState(false);
  const [misOpen, msetIsOpen] = useState(false);
  const [rotateModel, setRotateModel] = useState(true);
  


  const handleButtonClick = () => {
    setRotateModel(false); // Stop rotation
  };
  const ihandleButtonClick = () => {
    setRotateModel(true); // Stop rotation
  };
  const mhandleButtonClick = () => {
    setRotateModel(true); // Stop rotation
  };

  const handleModalClose = () => {
    setRotateModel(true); // Allow rotation when modal is closed
    setIsOpen(false);
  };
  const ihandleModalClose = () => {
    setRotateModel(true); // Allow rotation when modal is closed
    isetIsOpen(false);
  };
  const mhandleModalClose = () => {
    setRotateModel(true); // Allow rotation when modal is closed
    msetIsOpen(false);
  };
  const buttonStyles = {
    width: '100%',
    fontFamily: 'AudioWide',
    fontSize: "0.9375rem",
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    height: '100%'
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      
      position: 'absolute',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      background: 'Black',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        width: '50%',
      }}>
        <div style={{width: '100%', display: 'flex' ,flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',}}>
              <div><span style={{
                  fontSize: '6.25rem',
                  color: 'white',
                  fontFamily: 'Electrolize',
                  lineHeight: '0.8',
                }}>MARK-85</span>
                </div>
                <div style={{
                  marginBottom: "70px"
                }}><span style={{
                  color: 'white',
                  fontFamily: 'Electarolize',
                  marginBottom: '12.47vh',
                }}>THE NEXT GEN AI</span>
                </div>
            </div>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '10px', 
              width: '19.53vw',
              marginBottom: '12.47vh',
              alignItems: 'center',
            }}
            >
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                  
                  <button  onClick={() => { isetIsOpen(true); ihandleButtonClick(); }} style={{ ...buttonStyles, boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)' }}>
                  <img src={info}></img>
                    <span>info</span>
                    </button>
                </div>
                <div onClick={() => console.log('clicked')} style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px'}}>
                  <button  onClick={() => { setIsOpen(true); handleButtonClick(); }} style={{
                        ...buttonStyles,
                        fontSize: '20px',
                        boxShadow: '0 4px 50px rgba(255, 255, 255, 0.1)',
                      }}>Initiate M85</button>
                </div>
                
                <div style={{width: '100%', display: 'flex', justifyContent: 'center',}}>
                  
                  <button onClick={() => { msetIsOpen(true); mhandleButtonClick(); }} style={{ ...buttonStyles, boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)' }}>
                  <img src={maker}></img>
                    <span>Maker</span>
                    </button>
                </div>
            </div>
            

        <Modal open={isOpen} onClose={handleModalClose}>
          <div>
            <Chat />
          </div>
        </Modal> 
        <InfoModal open={iisOpen} onClose={ihandleModalClose} />
        <MakerModal open={misOpen} onClose={mhandleModalClose} />
          
        

      </div>
    
      
      <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '100%'}}>
          <Canvas
            className='canvas'
            style={{
              boxSizing: 'border-box',
              marginTop: '50px',
              height: '80.69vh',
              width: '75%',
              backgroundColor: 'black',
              
              marginRight: '7.81vw',
            }}
            camera={{ position: [0, 15, 30], fov: 60 }}
          > 
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1.0} />
            <directionalLight position={[0, 0, 1]} intensity={3.0} />
            <pointLight position={[5, 5, 5]} intensity={15} />
            <spotLight position={[0, 20, 0]} angle={0.3} intensity={20} />
            <Suspense fallback={null}>
              <Ironman rotate={rotateModel}/>
              <pointLight position={[0, 10, 0]} intensity={20} color="gold" />
            </Suspense>
          </Canvas>
          </div>
        </div>
          
    </div>
  );
}

export default Bot;
