// import React, { useContext, useState } from 'react'
// import { CiMenuBurger } from "react-icons/ci";
// import { FaRegCalendarPlus } from "react-icons/fa";
// import { FaRegMessage } from "react-icons/fa6";
// import { dataContext } from '../context/UserContext';

// const Sidebar = () => {

//   const [extend, setextend] = useState(false)

//   const { sent, prevPrompt, newChat } = useContext(dataContext)

//   function loadPrevPrompt(prompt) {
//     sent(prompt)
//   }

//   return (
//     <div
//       className={`h-screen bg-[var(--background-color)] flex flex-col p-5 gap-6 
//       transition-all duration-300 ease-in-out 
//       ${extend ? "w-44" : "w-20"}`}
//     >

//       {/* Menu Icon */}
//       <CiMenuBurger
//         className='w-8 h-8 text-[var(--color)] cursor-pointer'
//         onClick={() => setextend(prev => !prev)}
//       />

//       {/* New Chat */}
//       <div onClick={()=>{
//         newChat()
//       }} className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer'>
//         <FaRegCalendarPlus className='w-6 h-6 text-[var(--color)]' />
//         {extend && (
//           <p className='text-[var(--color)] text-lg font-medium'>
//             New Chat
//           </p>
//         )}
//       </div>

//       {/* Previous Prompts */}
//       {prevPrompt.map((item, index) => {
//         return (
//           <div
//             key={index}
//             onClick={() => loadPrevPrompt(item)}
//             className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer'
//           >
//             <FaRegMessage className='w-6 h-6 text-[var(--color)]' />

//             {extend && (
//               <p className='text-[var(--color)] text-lg font-medium whitespace-nowrap'>
//                 {item.slice(0, 18) + "..."}
//               </p>
//             )}
//           </div>
//         )
//       })}

//     </div>
//   )
// }

// export default Sidebar
import React, { useContext, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { dataContext } from '../context/UserContext';

const Sidebar = () => {

const [extend,setextend] = useState(false)

const {sent,prevPrompt,newChat} = useContext(dataContext)

function loadPrevPrompt(prompt){
sent(prompt)
}

return (

<div
className={`h-screen bg-[var(--background-color)] flex flex-col p-4 gap-5
transition-all duration-300
${extend ? "w-56" : "w-16"} md:${extend ? "w-44" : "w-20"}
`}
>

<CiMenuBurger
className='w-6 h-6 md:w-8 md:h-8 text-[var(--color)] cursor-pointer'
onClick={()=>setextend(prev=>!prev)}
/>

<div
onClick={newChat}
className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer'
>

<FaRegCalendarPlus className='w-5 h-5 md:w-6 md:h-6 text-[var(--color)]'/>

{extend &&
<p className='text-[var(--color)] text-sm md:text-lg font-medium'>
New Chat
</p>
}

</div>

{prevPrompt.map((item,index)=>{

return(

<div
key={index}
onClick={()=>loadPrevPrompt(item)}
className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer'
>

<FaRegMessage className='w-5 h-5 md:w-6 md:h-6 text-[var(--color)]'/>

{extend &&
<p className='text-[var(--color)] text-sm md:text-lg whitespace-nowrap'>
{item.slice(0,18)+"..."}
</p>
}

</div>

)

})}

</div>

)

}

export default Sidebar