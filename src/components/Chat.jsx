// ChatApp.jsx
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import '../css/chat.css'; // Import the CSS file
import '../styles/fonts.css'; // Import the CSS file

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyAKTvynOoY7eiZLsdVXky_gehP72bntk-0";

const ChatApp = ({ conversationHistory, setConversationHistory }) => {
  const [userInput, setUserInput] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const chatMessagesRef = useRef(null);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const startChat = async () => {
    if (isChatting || !userInput.trim()) {
      return;
    }

    setIsChatting(true);

    const newUserConversation = {
      role: 'user',
      parts: [{text: `${userInput}`}],
    };

    setConversationHistory([...conversationHistory, newUserConversation]);

    setUserInput('');

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: conversationHistory,
    });

    try {
      const result = await chat.sendMessage(userInput);
      const response = result.response.text();

      const newAIConversation = {
        role: 'model',
        parts: [{text:`${response}`}],
      };

      setConversationHistory((prevHistory) => [...prevHistory, newAIConversation]);
    } catch (error) {
      console.error('Error in chat.sendMessage:', error);

      if (error.message.includes('Candidate was blocked due to SAFETY')) {
        alert('Your message was blocked due to safety concerns. Please Initaite a new gen M85.');
        
      }
      if (error.message.includes('Response was blocked due to SAFETY')) {
        alert('Your message was blocked due to incoherence. You made M85 angry. To continue, initiate a new gen M85 and try to avoid such words.');
      }
    } finally {
      setIsChatting(false);
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [conversationHistory]);

  return (
    <div style={{}}>
      <div
        id="chat-messages"
        style={{ display: "flex", flexDirection: 'column', overflowY: 'auto', maxHeight: '300px' }}
        ref={chatMessagesRef}
      >
        {conversationHistory.map((conversation, index) => (
        index>9 &&
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: conversation.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px',
              fontFamily: 'Expletus sans'
            }}
            className={conversation.role}
          >
            <div
              style={{
                backgroundColor: conversation.role === 'user' ? '#575959' : '#e6e6e6',
                color: conversation.role === 'user' ? 'white' : 'black',
                borderRadius: '10px',
                padding: '8px',
                maxWidth: '70%',
              }}
            >
              {conversation.parts.map((parts, partIndex) => (
                 <span key={partIndex}>{parts.text}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between'}}>
        <textarea
          id="user-input"
          placeholder="Ask Anything"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ fontFamily: 'Play', borderWidth: '2px',borderColor: isChatting ? 'rgba(123, 61, 255, 1)' : 'rgba(96, 239, 255, 1)', boxShadow: isChatting? '0 0 20px rgba(123, 61, 255, 1)': ''}}
          disabled={isChatting}
        />
        <button
          onClick={startChat}
          style={{ fontFamily: 'AudioWide', borderRadius: '8px', marginLeft: '10px', width: 'auto', backgroundColor: isChatting ? 'rgba(123, 61, 255, 1)' : 'rgba(96, 239, 255, 1)', }}
          disabled={isChatting}
        >
          {isChatting ? 'Analyzing Data...' : 'Send Data'}
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
