import React, { useState } from 'react'
import { X, Send, Copy, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
}

interface ChatInterfaceProps {
  onClose: () => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInputMessage('')

    // Simulate AI response (replace with actual AI integration later)
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now(),
        text: `Echo: ${inputMessage}`,
        sender: 'ai',
      }
      setMessages((prevMessages) => [...prevMessages, aiMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 relative">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'
            }`}
          >
            {message.sender === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
                A
              </div>
            )}
            <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
              <div
                className={`p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    : 'bg-transparent text-gray-900 dark:text-white'
                }`}
              >
                {message.text}
              </div>
              {message.sender === 'ai' && (
                <div className="flex mt-2 space-x-2">
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    <Copy size={16} className="opacity-80 dark:opacity-60" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    <RefreshCw size={16} className="opacity-80 dark:opacity-60" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    <ThumbsUp size={16} className="opacity-80 dark:opacity-60" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                    <ThumbsDown size={16} className="opacity-80 dark:opacity-60" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Write a message..."
            className="flex-1 p-2 bg-transparent outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-lg"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default ChatInterface