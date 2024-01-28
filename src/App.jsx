import React from 'react';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Bot from './pages/Bot.jsx';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Ironman from '../src/components/Ironman.jsx';


function App() {
  return (
    <div>
    <Bot />
    </div>
    
  );
}

export default App;
