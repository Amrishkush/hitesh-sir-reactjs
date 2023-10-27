
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  //this things are changing so we used usestate
  const [password , setPassword]=  useState("");  //default "" because we are creating pass
  const [length, setLength] = useState(8)          //default value when page load
  const [numbersAllowed, setNumberAllowed] = useState(false)    //here for checkbox can be true or false
  const [charAllowed , setCharAllowed] = useState(false)    //same as above

  const passwordRef = useRef(null);          //setting useref null to use more setting through reference without it also will work
  const passwordGenerator = useCallback(()=> {       //using callback which is not compulsoury but good for optimization as its keeps thing in cache memory it donot call function but optimize value in it
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  //character from which we are creating 
      if(numbersAllowed) {        //here when to add numbers also default is false
        str += "0123456789"
      }
      if(charAllowed){
        str += "!@#$%^&*-_+=[]{}~`"         //here when to add numbers also default is false
      }
      
    for(let i = 1; i <= length ; i++){           //iterating according to length provided in str
      let char = Math.floor(Math.random() * str.length + 1)     //finding the random number of character to pass on
      pass += str.charAt(char)   //generating and concating password according to char changing
    }
    setPassword(pass)            //set password change
  }, [length, numbersAllowed, charAllowed , setPassword])   //here dependencies on which it will optimize here if we don't give password or set password then also it will work givin password will create infinite loop

  const copyPasswordToClipboard = useCallback(()=>{    //for copying the text from input field
     passwordRef.current?.select()                        //this is the reason we are using useRef so that to get extra features like when copied it will get selected as this whole fun will be called onclick
     passwordRef.current?.setSelectionRange(0, 99)        //setting selection range 0 to 3 means it will select but only three char
     window.navigator.clipboard.writeText(password)        //here in react we get direct access to window inside which we write text in clipboard
  }, [password])

  useEffect(()=>{
         passwordGenerator()                                             //it is different from callback it is basically calls function passwordgenerator whenever changes in dependencies etc callback maintains only optimization according to numbers allowed or length value maintenence basically
  }, [length , numbersAllowed , charAllowed , passwordGenerator])

  return (

       <div className='w-full max-w-5xl rounded-2xl mx-auto py-10 bg-gray-300'>
        <h1 className='text-7xl text-center'>Password Generator</h1>
        <div className='text-center py-4 overflow-hidden'>
          <input 
          className='border-2 border-black rounded-l w-80 py-1 cursor-pointer' 
          readOnly         //it will make input field undeditable
          type="text" 
          name="" 
          id="inputField" 
          placeholder = 'password' 
          value={password}             //passing value of password to show on input field
          ref={passwordRef}             //reference to useRef so that some setting we can add like select text
           /> 
          <button 
          className='bg-blue-700 rounded-r ml-1 px-4 py-1'
          onClick= {copyPasswordToClipboard}      //it will call function
          >Copy</button>
        </div>
        <div className='flex justify-center gap-x-8'>
         <div className='flex justify-center'>
          <input 
          type="range" 
          name="range" 
          id="range"
          max={100}      //maximum range of range upperlimit
          min={8}      //lowerlimit
          onChange={(e)=>{setLength(e.target.value)}}     //records the value of range we can get the value of range
          />
          <label htmlFor="range">Length({length})</label>
          </div>
          <div className='flex justify-center gap-x-8'>
          <div className=' gap-x-2'>
          <input 
          type="checkbox" 
          name="" 
          id="number"
          defaultChecked= {numbersAllowed}   //passing the value whether to be false or true below changing according to situation
          onChange={()=> setNumberAllowed((prevValue)=>!prevValue)}   //turning false to true or vice versa its compulsory to call function inside set other it will be changed one time like giving setPassword (true) then it will remain true to keep reversing we have to do it
          />
          <label htmlFor="number">Numbers</label>
          </div>
          <div className=' gap-x-2'> 
          <input 
          type="checkbox" 
          name="" 
          id="character" 
          onChange={()=> setCharAllowed((prevValue)=>!prevValue)}        //same as above
          />
          <label htmlFor="character">Characters</label>
           </div>
          </div>
          </div>
        </div>
  )
}

export default App
