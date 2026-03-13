import React, { useContext } from 'react'
import Sidebar from './component/Sidebar'
import ChatSection from './component/ChatSection'
import Sepration from './component/Sepration'   // ✅ YE LINE MISSING THI
import Darkmode from './component/Darkmode'
import { dataContext } from './context/UserContext'

const App = () => {
  
  
  return (
    <div className='flex w-full' >
      <Sidebar />
      <Sepration/>
      <ChatSection/>
    
    </div>
  )
}

export default App