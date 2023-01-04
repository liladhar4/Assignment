import React,{useState, useEffect} from "react";

export default function FComponent(){
    const [time , setTime] = useState(new Date().toString());
    const [massage, setMessage]= useState("functional component");
    useEffect(()=>{
        console.log("component mounted or updated");
        const interval = setInterval(showDate, 1000)

        return ()=> {
            console.log("cleanup of Interval");
            clearInterval(interval);
        }
    },[time])
    const showDate = ()=> {
        setTime(new Date().toString());
    }
    return(
        <div>
            <div>{time}</div>
            <button onClick={showDate}>Show Date </button>
            <div>{massage}</div>
            <button onClick={()=>setMessage("Changed Functional component")}>Change massage </button>
        </div>
    )
}