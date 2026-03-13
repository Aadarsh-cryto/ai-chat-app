import React, { createContext, useState } from 'react'
import { GoogleGenAI } from "@google/genai"

export const dataContext = createContext()

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
})

const UserContext = ({ children }) => {

  const [input, setinput] = useState("")
  const [showResult, setshowResult] = useState(false)
  const [loading, setloading] = useState(false)
  const [resultData, setresultData] = useState("")
  const [recentPrompt, setrecentPrompt] = useState("")
  const [prevPrompt, setprevPrompt] = useState([])
  function newChat(){
    setshowResult(false)
    setloading(false)
  }

  async function sent(prompt) {

    setresultData("")
    setshowResult(true)
    setrecentPrompt(prompt)
    setloading(true)

    setprevPrompt(prev => [...prev, prompt])

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    })

    let cleanText = response.text.replace(/\*/g, "")

    setresultData(cleanText)

    setinput("")
    setloading(false)
  }

  const data = {
    input,
    setinput,
    sent,
    resultData,
    loading,
    showResult,
    recentPrompt,
    prevPrompt ,
    newChat     // ⭐ IMPORTANT
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext