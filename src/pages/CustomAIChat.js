import React, { useState, useRef, useEffect } from 'react';

const CustomAIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm William's AI assistant. Ask me anything about William's projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    // In a real implementation, you would send the message to your API
    // and receive a response from your trained AI model
    setTimeout(() => {
      // This is just a simulation - replace with actual API call
      const demoResponses = [
        "I'd be happy to tell you about William's project experience! He has worked on web development, data analysis, and machine learning projects.",
        "William specializes in React, Node.js, and Python. He's particularly interested in building user-friendly web applications.",
        "William graduated from his university with a degree in Computer Science and has 3+ years of professional experience.",
        "You can contact William directly through the Contact page or via his LinkedIn profile.",
        "William's portfolio includes projects using React, MongoDB, Express, and Node.js.",
        "William has experience in both frontend and backend development, with a focus on creating responsive and accessible web applications.",
      ];
      
      // Simulate AI response with random delay and message
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      const assistantMessage = { role: 'assistant', content: randomResponse };
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="custom-ai-chat-container">
      <h1>Chat with William AI</h1>
      <p>Ask me anything about William's projects, experience, or skills!</p>
      
      <div className="chat-window">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-bubble">
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-bubble typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
          >
            Send
          </button>
        </form>
      </div>
      
      <div className="ai-explanation">
        <h3>How This Works</h3>
        <p>This is a demonstration of how a custom AI assistant could work on your website. In a production version, this would connect to OpenAI's API with custom training data about your background and projects.</p>
        <p className="ai-description">Note: This demo version provides simulated responses. To implement a real AI assistant, you would need to set up an API key and backend service.</p>
      </div>
    </div>
  );
};

export default CustomAIChat;
