//custom hooks 
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})  //we are passing empty object if nothing comes from atleast there is empty object is there to not throw error
    useEffect(()=>{   //whenever changes in following dependencies it will update and call this things
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))    //it means from api what ever value we currency it will feed on api url it will extract alll the list one to another //object can be also accessed through square bracket dot is not necessary
    },[currency]) //means whenever someone changes currency call api basically
    console.log(data)
    return data
}

export default useCurrencyInfo;