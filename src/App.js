import React,{useState} from "react";
// useState=> useState is a hook which is used to manage states of react.
import "./style.css";

export default function App() {
  let [test,setTest]=useState(0)
  // test is a state variable
  //setTest is a function which will manage my values of state variable.
  // useState('')=> default value of your state variable.

  // onClick, ondbClick, onChange
  function increment(){
    setTest(test+1)
  }
  function decrement(){
    setTest(test-1)
  }
  return (
    <div>
     <button onClick={increment}>+</button>
     <div>{test} this is your state variable value</div>
     <button onClick={decrement}>-</button>
    </div>
  );
}
