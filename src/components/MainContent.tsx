import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, FileText } from 'lucide-react'
import ChatInterface from './ChatInterface'
import Editor from './Editor'

interface MainContentProps {
  isSidebarOpen: boolean
  showChat: boolean
  setShowChat: (show: boolean) => void
  showEditor: boolean
  setShowEditor: (show: boolean) => void
}

const MainContent: React.FC<MainContentProps> = ({
  isSidebarOpen,
  showChat,
  setShowChat,
  showEditor,
  setShowEditor,
}) => {
  const [splitPosition, setSplitPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const splitPaneRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && splitPaneRef.current) {
      const splitPaneRect = splitPaneRef.current.getBoundingClientRect()
      const newPosition = ((e.clientX - splitPaneRect.left) / splitPaneRect.width) * 100
      setSplitPosition(Math.min(Math.max(newPosition, 20), 80))
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className={`flex-1 h-full overflow-hidden ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 bg-white dark:bg-gray-900`}>
      <div ref={splitPaneRef} className="flex h-full w-full">
        {showChat && (
          <div 
            className="relative h-full" 
            style={{ width: showEditor ? `${splitPosition}%` : '100%' }}
          >
            <ChatInterface onClose={() => setShowChat(false)} />
          </div>
        )}
        {showChat && showEditor && (
          <div
            className="w-[1px] bg-transparent relative cursor-col-resize group"
            onMouseDown={handleMouseDown}
          >
            <div className="absolute inset-y-0 -left-2 -right-2 bg-transparent"></div>
            <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="absolute inset-y-0 left-0 w-[15px] bg-gradient-to-l from-white to-gray-300 dark:from-gray-800 dark:to-gray-600 shadow-[-4px_0_15px_rgba(0,0,0,0.1)] dark:shadow-[-4px_0_15px_rgba(255,255,255,0.05)]"></div>
          </div>
        )}
        {showEditor && (
          <div 
            className="relative h-full" 
            style={{ width: showChat ? `${100 - splitPosition}%` : '100%' }}
          >
            <Editor onClose={() => setShowEditor(false)} />
          </div>
        )}
      </div>
      <div className="fixed bottom-4 right-4 space-x-2">
        {!showChat && (
          <button
            onClick={() => setShowChat(true)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            <MessageSquare size={20} />
          </button>
        )}
        {!showEditor && (
          <button
            onClick={() => setShowEditor(true)}
            className="p-2 bg-green-500 text-white rounded"
          >
            <FileText size={20} />
          </button>
        )}
      </div>
    </div>
  )
}

export default MainContent