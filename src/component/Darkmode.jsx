// import React, { useEffect, useState } from 'react'
// import { IoMdSunny } from "react-icons/io";
// const Darkmode = () => {

//   const [mode, setMode] = useState("dark-mode")

//   function toggle() {
//     if (mode === "dark-mode") {
//       setMode("light-mode")
//     } else {
//       setMode("dark-mode")
//     }
//   }

//   useEffect(() => {
//     document.body.className = mode
//   }, [mode])

//   return (
//     <div>
//       <button onClick={toggle} className="px-5 py-2 rounded-lg  text-white font-medium 
//              hover:bg-gray-400 transition-all duration-300 shadow-md">
//         <IoMdSunny />
//       </button>
//     </div>
//   )
// }

// export default Darkmode 
import React,{useEffect,useState} from 'react'
import { IoMdSunny } from "react-icons/io";

const Darkmode = () => {

const [mode,setMode] = useState("dark-mode")

function toggle(){

if(mode==="dark-mode"){
setMode("light-mode")
}
else{
setMode("dark-mode")
}

}

useEffect(()=>{
document.body.className = mode
},[mode])

return(

<button
onClick={toggle}
className="px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-400 transition shadow-md"
>
<IoMdSunny/>
</button>

)

}

export default Darkmode