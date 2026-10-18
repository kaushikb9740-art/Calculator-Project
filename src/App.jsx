import { useState } from "react"

const App=()=>{
  const [display,setdisplay]=useState("")
  function btnclicker(items,index){
    if(items==="AC"){
      setdisplay("");
      return;
    }
    if (items==="+/-"){
      if(display!==""){
        setdisplay(String(Number(display)*-1))
      }
      return;
    }
    if(items==="❌"){
      if(display!==""){
        setdisplay(display.slice(0,-1))
      }
      return;
    }
    if(items==="="){
      try{
      const expression=display
      .replaceAll("*","*")
      .replaceAll("+","+")
      .replaceAll("-","-")
      .replaceAll("/","/")
      setdisplay(String(eval(expression)))
      }catch{
        setdisplay("Error");
      }
      return;

    }
    setdisplay(display+items)
  }
  const button=["AC","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","=","❌"]
  return(
    <div className="">
      <div className="">
        <div className="text-center">
          <h1 className="text-white sm:text-7xl   mt-4 text-5xl font-medium">Calculator</h1>
        </div>
        
        <div className="flex  flex-wrap justify-center mt-1 sm:mt-3 text-white text-2xl font-semibold gap-2">
          <p>Simple</p>
          <p className="h-2 w-2 bg-blue-700 rounded-full mt-4"></p>
          <p>Fast</p>
          <p className="h-2 w-2 bg-blue-700 rounded-full mt-4"></p>
          <p>Accurate</p>

        </div>
       
      </div>
      <div className="flex flex-wrap justify-center  mt-1 sm:mt-8 ">
        <div className="sm:h-165 sm:w-160  h-133 w-90  border cal">
          <div className="display sm:h-37 sm:w-150 mt-4 sm:ml-4 ml-3 h-20 w-85">
            <h1 className="text-white text-end text-2xl  sm:text-3xl mr-3 font-sans font-semibold">{display||0}</h1>
            <h1 className="text-white text-end sm:pt-13 pt-2 sm:text-6xl text-4xl  mr-3 font-sans font-semibold">{display||0}</h1>
            

          </div>
          <div>
            {button.map((items,index)=>(<button  key={index} className="active:scale-95 transition-transform duration-150 btn h-16 w-18 text-2xl sm:h-20 sm:w-32  border border-black font-serif font-semibold flex-wrap sm:ml-6  ml-4 sm:mt-3  mt-5 text-white sm:text-4xl " onClick={()=>btnclicker(items,index)}>{items}</button>))
            
            }
          </div>
        </div>
      </div>
     
    </div>
  )
}
export default App