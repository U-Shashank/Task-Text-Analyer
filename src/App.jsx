import React, { useState, useEffect, useCallback, useRef } from 'react'
import Card from './components/Card'
import toast from 'react-hot-toast'


const App = () => {
  const [text, setText] = useState('')
  const [uniqueWords, setUniqueWords] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [searchStr, setSearchStr] = useState('')
  const [replaceStr, setReplaceStr] = useState('')
  const textareaRef = useRef(null)

  const countUniqueWords = useCallback((text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || []
    return new Set(words).size
  }, [])

  const countChars = useCallback((text) => {
    return (text.match(/[a-zA-Z0-9]/g) || []).length
  }, [])

  useEffect(() => {
    setUniqueWords(countUniqueWords(text))
    setCharCount(countChars(text))
  }, [text, countUniqueWords, countChars])

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleReplace = () => {
    if (!searchStr) {
      toast.error('Search string cannot be empty')
      return
    }

    const regex = new RegExp(searchStr, 'g')
    const newText = text.replace(regex, replaceStr)
    
    setText(newText)
  }

  return (
    <div className="p-4 max-w-2xl mx-auto h-screen flex flex-col justify-center">
      <Card title="Real-time Text Analysis">
        <div className="relative w-full h-40">
          <div
            className="absolute w-full h-full p-2 border rounded resize-none overflow-auto bg-gray-800 text-gray-200"
          />
          <textarea
            ref={textareaRef}
            className="absolute w-full h-full p-2 border rounded resize-none bg-transparent caret-gray-100 text-gray-100"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your text here..."
          />
        </div>
        <div className="mt-2 flex justify-between text-sm text-gray-400">
          <span>Unique Words: {uniqueWords}</span>
          <span>Character Count: {charCount}</span>
        </div>
      </Card>

      <Card title="String Replacement">
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <input
            type="text"
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
            placeholder="Search for..."    
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"

          />
          <input
            type="text"
            value={replaceStr}
            onChange={(e) => setReplaceStr(e.target.value)}
            placeholder="Replace with..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          />
          <button
            onClick={handleReplace}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline whitespace-nowrap"
          >
            Replace All
          </button>
        </div>
      </Card>
    </div>
  )
}

export default App
