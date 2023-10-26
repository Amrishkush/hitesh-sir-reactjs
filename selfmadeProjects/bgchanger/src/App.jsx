
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
   
      <div className="w-full h-screen " style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
                  <div className='flex flex-wrap justify-center gap-3 px-3 py-4 rounded-xl bg-slate-200 w-[80%] space-x-20'>
                    <button className='rounded-full outline-none px-10 py-1' 
                    onClick={()=>setColor('red')}   //always pass a function basically onclick expect a function here called function which return color
                    //also we can give function also but we can't pass paramaeteres as it expects function not value
                    style={{backgroundColor: "red"}}>Red</button>
                    <button className='rounded-full outline-none px-10 py-1' 
                    onClick={()=>setColor('blue')}
                    style={{backgroundColor: "blue"}}>Blue</button>
                    <button className='rounded-full outline-none px-10 py-1' 
                    onClick={()=>setColor('yellow')}
                    style={{backgroundColor: "yellow"}}>Yellow</button>
                    <button className='rounded-full outline-none px-10 py-1' 
                    onClick={()=>setColor('Orange')}
                    style={{backgroundColor: "Orange"}}>Orange</button>
                    <button className='rounded-full outline-none px-10 py-1' 
                    onClick={()=>setColor('green')}
                    style={{backgroundColor: "green"}}>Green</button>
                    <button className='rounded-full outline-none px-10 py-1' 
                    onClick={()=>setColor('white')}
                    style={{backgroundColor: "white"}}>White</button>
                  </div>
                  
          </div>
      </div>
    
  )
}

export default App 
 