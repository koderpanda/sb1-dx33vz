import React, { useState } from 'react'
import { MessageSquare, FileText, Sun, Moon, FilePlus, Folder, File } from 'lucide-react'
import NewReportModal from './NewReportModal'
import { useTheme } from '../contexts/ThemeContext'

interface SidebarContentProps {
  showChat: boolean
  setShowChat: (show: boolean) => void
  showEditor: boolean
  setShowEditor: (show: boolean) => void
  toggleTheme: () => void
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  showChat,
  setShowChat,
  showEditor,
  setShowEditor,
  toggleTheme,
}) => {
  const [isNewReportModalOpen, setIsNewReportModalOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2 cursor-pointer flex items-center" onClick={() => setShowChat(!showChat)}>
          <MessageSquare size={18} className="mr-2" />
          {showChat ? 'Hide Chat' : 'Show Chat'}
        </li>
        <li className="mb-2 cursor-pointer flex items-center" onClick={() => setShowEditor(!showEditor)}>
          <FileText size={18} className="mr-2" />
          {showEditor ? 'Hide Editor' : 'Show Editor'}
        </li>
        <li className="mb-2 cursor-pointer flex items-center" onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={18} className="mr-2" /> : <Sun size={18} className="mr-2" />}
          Toggle Theme
        </li>
        <li className="mb-2 cursor-pointer flex items-center" onClick={() => setIsNewReportModalOpen(true)}>
          <FilePlus size={18} className="mr-2" />
          New Report
        </li>
      </ul>
      <div className="mt-4">
        <h3 className="font-bold mb-2 flex items-center">
          <Folder size={18} className="mr-2" />
          Projects
        </h3>
        <ul className="ml-6">
          <li className="mb-1 flex items-center">
            <File size={14} className="mr-2" />
            Project 1
          </li>
          <li className="mb-1 flex items-center">
            <File size={14} className="mr-2" />
            Project 2
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2 flex items-center">
          <Folder size={18} className="mr-2" />
          Pages
        </h3>
        <ul className="ml-6">
          <li className="mb-1 flex items-center">
            <File size={14} className="mr-2" />
            Page 1
          </li>
          <li className="mb-1 flex items-center">
            <File size={14} className="mr-2" />
            Page 2
          </li>
        </ul>
      </div>
      <NewReportModal
        isOpen={isNewReportModalOpen}
        onClose={() => setIsNewReportModalOpen(false)}
      />
    </div>
  )
}

export default SidebarContent