// import React, { useContext } from 'react'
// import Darkmode from './Darkmode'
// import { IoSendSharp } from "react-icons/io5";
// import { dataContext } from '../context/UserContext';
// import ai from "../assets/ai.png"
// import user from "../assets/user.png"
// const ChatSection = () => {
//   let {sent,input,setinput,showResult,resultData,recentPrompt,loading} =useContext(dataContext)
//   return (
//     <div className=' bg-[var(--background-color)]  h-screen flex-1'>
//       <div className='w-full h-[75vh]   '>
//         {!showResult? <div className='w-full h-full overflow-hidden flex items-center justify-center flex-col text-[2vmax]'>
//           <span className='text-[3em] font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500   bg-clip-text text-transparent'>HELLO ASHAY</span>
//           <span className='text-[2.6em] font-medium bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500   bg-clip-text text-transparent'>I'm YOUR Own Assistant</span>
//           <span className='text-[1.9em] font-mono bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500   bg-clip-text text-transparent'>What can I Help you...</span>
//         </div>:<div className='flex flex-col gap-5 w-full h-full py-10 px-5 text-[18px] '>
//           <div className='flex gap-5 items-start text-green-200'>
//             <img src={user} alt="" className='w-20 drop-shadow-[0_0_15px_black]' />
//             <p>{recentPrompt}</p>
//           </div>
//           <div className='flex gap-5 items-start text-green-200'>
//              <img src={ai} alt="" className='w-20 drop-shadow-[0_0_15px_black]' />
//             {loading?<div className='w-full flex flex-col gap-5 animate-pulse'>
//             <hr className='h-5 border-none rounded-2xl 
//   bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 
//   dark:from-gray-700 dark:via-gray-600 dark:to-gray-700'  />
//             <hr className='h-5 border-none rounded-2xl 
//   bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 
//   dark:from-gray-700 dark:via-gray-600 dark:to-gray-700'  />
//             <hr className='h-5 border-none rounded-2xl 
//   bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 
//   dark:from-gray-700 dark:via-gray-600 dark:to-gray-700'  /></div>:<p className='w-full h-135 overflow-auto overflow-y-scroll [scrollbar-width:none] '>{resultData}</p>}
            
//           </div>
//           </div>}
       
//       </div>
//       <div className='w-full h-[25vh]  flex items-center justify-center gap-2.5'>
//         <input onChange={(e)=>{setinput(e.target.value)}} value={input} type="text" placeholder='Enter a Prompt' className='w-[50%] h-8 p-5 text-2xl bg-gray-400 text-blue-100 rounded-2xl outline-none border-none ' />
//         <button className="px-5 py-2 rounded-lg  text-white font-medium 
//   hover:bg-gray-200 transition-all duration-300 shadow-md" onClick={()=>{
//                   sent(input)
//             }}><IoSendSharp /></button>
//           <Darkmode/></div>
    
//     </div>
//   )
// }

// export default ChatSection
import React, { useContext } from 'react'
import Darkmode from './Darkmode'
import { IoSendSharp } from "react-icons/io5";
import { dataContext } from '../context/UserContext';
import ai from "../assets/ai.png"
import user from "../assets/user.png"

const ChatSection = () => {

let {sent,input,setinput,showResult,resultData,recentPrompt,loading}
= useContext(dataContext)

return (

<div className='bg-[var(--background-color)] flex-1 h-screen flex flex-col'>

{/* CHAT AREA */}

<div className='flex-1 overflow-hidden'>

{!showResult ?

<div className='w-full h-full flex items-center justify-center flex-col text-center px-4'>

<span className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent'>
HELLO ASHAY
</span>

<span className='text-2xl md:text-4xl font-medium bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent'>
I'm YOUR Own Assistant
</span>

<span className='text-lg md:text-2xl font-mono bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent'>
What can I Help you...
</span>

</div>

:

<div className='flex flex-col gap-6 w-full h-full py-6 px-4 md:px-8 text-sm md:text-lg overflow-y-auto no-scrollbar'>

{/* USER MESSAGE */}

<div className='flex gap-4 items-start text-green-200'>

<img src={user} className='w-10 md:w-16'/>

<p>{recentPrompt}</p>

</div>

{/* AI MESSAGE */}

<div className='flex gap-4 items-start text-green-200'>

<img src={ai} className='w-10 md:w-16'/>

{loading ?

<div className='w-full flex flex-col gap-4 animate-pulse'>

<hr className='h-4 border-none rounded-xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700'/>

<hr className='h-4 border-none rounded-xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700'/>

<hr className='h-4 border-none rounded-xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700'/>

</div>

:

<p className='w-full max-h-[55vh] overflow-y-auto no-scrollbar'>
{resultData}
</p>

}

</div>

</div>

}

</div>

{/* INPUT AREA */}

<div className='w-full p-4 flex items-center justify-center gap-3 flex-wrap'>

<input
value={input}
onChange={(e)=>setinput(e.target.value)}
type="text"
placeholder='Enter a Prompt'
className='w-full md:w-[50%] p-3 md:p-4 text-base md:text-xl bg-gray-600 text-blue-100 rounded-xl outline-none'
/>

<button
onClick={()=>sent(input)}
className="px-4 py-2 md:px-5 md:py-3 rounded-lg text-gray-400 hover:bg-gray-200 transition shadow-md"
>
<IoSendSharp/>
</button>

<Darkmode/>

</div>

</div>

)

}

export default ChatSection
