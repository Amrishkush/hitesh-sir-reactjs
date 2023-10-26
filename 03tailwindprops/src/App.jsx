import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />     
      {/* we can send multiple thing to component whether its array or objects etc it will received in component card as props means properties as we know in the it is react format is saved in the form of object 
      {/* but we can't send directly we  have to pass in the form of variable like  below sending data in the must be written in curly otherwise it won't work unless sharedObject = myObj is wrong */}
      <Card sharedObject = {myObj} />   
      <Card sharedArr = {newArr}/>    
      {/* basically it is way of sending variables to other components     */}
      <Card username="hitesh" />
    </>
  )
}

export default App
