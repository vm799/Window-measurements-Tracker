import React from "react"

export default function WindowTracker() {
    
    const [windowSpecs, setWindowSpecs] = React.useState({
        width:window.innerWidth,
        height:window.innerHeight})
   
   React.useEffect(()=>{
       window.addEventListener("resize", function(){
           setWindowSpecs(prevWindowSpecs=>({...prevWindowSpecs,
            width:window.innerWidth,
            height:window.innerHeight
           })
           )
           })
   },[])
    
    
    return (
        <div>
        <h1> Your window width is: <br />
        <span>{windowSpecs.width}</span> </h1>
        <h1> Your window height is: <br />
        <span>{windowSpecs.height}</span> </h1>
        </div>
    )}