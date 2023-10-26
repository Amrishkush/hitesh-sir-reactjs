

import Chai from "./chai"


function App() {
  const username = "chai aur code"

  return (
    <>  
  {/* called fragment in react this must return only one tag inside that many tags can be there div can be used everyother thing should be inside that only */}
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}

export default App
