import React, { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [showChat, setShowChat] = useState(true)
  const [showEditor, setShowEditor] = useState(true)

  return (
    <ThemeProvider>
      <Layout>
        <div className="flex h-screen overflow-hidden">
          <Sidebar
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
            showChat={showChat}
            setShowChat={setShowChat}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
          />
          <MainContent
            isSidebarOpen={isSidebarOpen}
            showChat={showChat}
            setShowChat={setShowChat}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
          />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App