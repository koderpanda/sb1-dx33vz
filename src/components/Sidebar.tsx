import React from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import SidebarContent from './SidebarContent'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  showChat: boolean
  setShowChat: (show: boolean) => void
  showEditor: boolean
  setShowEditor: (show: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  showChat,
  setShowChat,
  showEditor,
  setShowEditor,
}) => {
  const { toggleTheme } = useTheme()

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
        >
          <Menu size={20} />
        </button>
      )}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-0'
        } fixed left-0 top-0 h-full transition-all duration-300 bg-gray-200 dark:bg-gray-800 overflow-hidden`}
      >
        <div className="relative h-full">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-gray-300 dark:bg-gray-700 rounded-full"
          >
            <X size={20} />
          </button>
          <SidebarContent
            showChat={showChat}
            setShowChat={setShowChat}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            toggleTheme={toggleTheme}
          />
        </div>
      </div>
    </>
  )
}

export default Sidebar