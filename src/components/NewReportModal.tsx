import React, { useState } from 'react'
import { X } from 'lucide-react'

interface NewReportModalProps {
  isOpen: boolean
  onClose: () => void
}

const NewReportModal: React.FC<NewReportModalProps> = ({ isOpen, onClose }) => {
  const [reportFor, setReportFor] = useState('')
  const [reportPurpose, setReportPurpose] = useState('Informative')

  const handleCreateOutline = () => {
    // TODO: Implement create outline functionality
    console.log('Creating outline for:', { reportFor, reportPurpose })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          <X size={16} />
        </button>
        <h2 className="text-xl font-bold mb-4">New Report</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="reportFor" className="block mb-2">
              This report is created for:
            </label>
            <input
              type="text"
              id="reportFor"
              value={reportFor}
              onChange={(e) => setReportFor(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reportPurpose" className="block mb-2">
              What is the purpose of the report:
            </label>
            <select
              id="reportPurpose"
              value={reportPurpose}
              onChange={(e) => setReportPurpose(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="Informative">Informative</option>
              <option value="Influence">Influence</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCreateOutline}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Create Outline
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewReportModal