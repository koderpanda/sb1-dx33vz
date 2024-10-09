import React from 'react'
import { BlockNoteView, useBlockNote } from '@blocknote/react'
import '@blocknote/core/style.css'
import { X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface EditorProps {
  onClose: () => void
}

const Editor: React.FC<EditorProps> = ({ onClose }) => {
  const { theme } = useTheme()
  const editor = useBlockNote({})

  return (
    <div className="relative h-full bg-white dark:bg-gray-800">
      <BlockNoteView editor={editor} theme={theme} />
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 bg-gray-200 dark:bg-gray-700 rounded"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default Editor