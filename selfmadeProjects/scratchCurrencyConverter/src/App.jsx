import { useEffect, useState, useId } from "react"

function App() {
const [from , setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const [amount, setAmount] = useState(0)
const [convertedAmount , setConvertedAmount] = useState(0)

function CurrencyInfo(currency){
  const [data , setData] = useState({})
  useEffect(()=> {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=> res.json())
    .then((res)=> setData(res[currency]))
  }, [currency]);
  return data;
}
const data = CurrencyInfo(from)
const currencyValue = data[to]
const convert = () => {
  if(amount <= 0){
    alert("Enter No greater than 0")
  } else
  {setConvertedAmount(amount * currencyValue)}
}
// console.log(currencyValue)

const options = Object.keys(data)
// console.log(options)

const swap = ()=> {
      setTo(from)
      setFrom(to)
      setAmount(convertedAmount)
      setConvertedAmount(amount)
}

const reset = ()=> {
  setAmount(0)
  setConvertedAmount(0)
}

const amountInputId = useId();
  return (
    <div className="w-full flex justify-center m-auto">
      <form className="bg-gray-600 text-blue m-10 p-10" >
         <div className="mt-10 flex gap-3 jsutify-center">
         <label htmlFor={amountInputId}>From: </label>
         <input 
         className="border-4" 
         type="number" 
         name="" 
         id={amountInputId}
         value= {amount} 
         onChange={(e) => setAmount(e.target.value)}
         />
         <select 
            name="" 
            id="" 
            value={from}
            onChange={(e)=> setFrom(e.target.value)}
            >
          {options.map((currency)=>(
            <option 
            value= {currency}
            key={currency}>
             {currency}
            </option>))
            }
         </select>
         </div>
         <div className="flex justify-center">
          <button 
          className="bg-red-400 m-auto pl-3 pr-3 rounded-lg" 
          type="button"
          onClick={swap}>
          swap</button>
         </div>
         <div className="flex gap-3 justify-center">
         <label htmlFor="from">To:</label>
         <input 
         className="border-4" 
         type="number" 
         name="" 
         id="from" 
         value = {convertedAmount}
         readOnly
         />
         <select 
         name="" 
         id="" 
         value= {to}
         onChange={(e)=> setTo(e.target.value)}>
          {options.map((currency)=>(
            <option 
            value= {currency}
            key={currency}>
             {currency}
            </option>))
            }
         </select>
         </div>
         <div className="mt-10  m-auto flex justify-center w-16 gap-4 ">
          <button
          className="bg-blue-700 rounded-2xl pl-3 pr-3 flex "
          onClick={(e)=>{
            e.preventDefault()
            convert()  }}>    
            {/* inside we are calling bcoz we have to e othewise directly can also be done just like onClick={convert} as reference */}
          Convert</button>
          <button 
          className="bg-red-700 rounded-2xl pl-5 pr-5 flex "
          type="button"
          onClick={reset}>
            Reset
          </button>
         </div>
      </form>
    </div>
  )
}

export default App
