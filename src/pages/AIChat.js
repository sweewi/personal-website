import React from 'react';

const AIChat = () => {
  return (
    <div className="ai-chat-container">
      <h1>Chat with William AI</h1>
      <p>Ask me anything about William's projects, experience, or skills!</p>
      
      <div className="chat-embed">
        <iframe
          src="https://chat.openai.com/share/embed"
          width="100%"
          height="600px"
          style={{ border: "1px solid #ddd", borderRadius: "8px" }}
          title="Chat with William AI"
          allow="microphone"
        ></iframe>
      </div>
      
      <div className="ai-explanation">
        <h3>How This Works</h3>
        <p>This AI assistant is powered by ChatGPT and has been custom trained with information about my background, skills, and projects. Feel free to ask specific questions about my work experience, technical abilities, or details about any project you see on this site.</p>
      </div>
    </div>
  );
};

export default AIChat;
