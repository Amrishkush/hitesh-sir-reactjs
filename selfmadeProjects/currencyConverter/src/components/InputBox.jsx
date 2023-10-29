import {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,    //this two line can be ignored just for case we took it
    className = "",
}) {
       const amountInputId = useId()   //hook we get to create new string we will use in label so that more optimized its not very compuslory
    return (
        //using backticks because i wanted to use variable class suppose anybody wants to inject classname so they can
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}> 
            <div className="w-1/2">
                <label  
                htmlFor= {amountInputId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id= {amountInputId}   //we our own random value we can give no need to give it will make more optimize
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value)) }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled= {currencyDisable}  
                >
                    {currencyOptions.map((currency)=> (<option key={currency} value={currency}> 
                        {currency}
                      </option>)
                    )}
                    {/* //taking key is important and unique bcoz it may decreas your time to run loop in jsx creating dom again and again may make slow key will make things easy
                    //dont use useId for key react documentation says it */}
                </select>
            </div>
        </div>
    );
}

export default InputBox;