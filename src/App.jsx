import styles from './App.module.css'
import Display from './components/display'
import ButtonCont from './components/ButtonCont'
import { useState } from 'react'

function App() {

  let [data,setdata]=useState("");


  const handleClick=(item)=>{
     if(item==='C')
     {
        setdata("");
     }
     else if(item==='=')
     {
        const result=eval(data);
        setdata(result);
     }
     else 
     {
      const newdata=data+item;
      setdata(newdata);
     }
  }

  return (
    <center>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <Display data={data}></Display>
        <ButtonCont handleClick={handleClick}></ButtonCont>
      </div>
    </center>
  )
}

export default App
