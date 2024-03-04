import React, { useState } from 'react'
import './App.css'

function App() {
  const [bread,setBread] = useState('')
  const [size,setSize] = useState('')
  const [data,setData] = useState([])
  const [check,setCheck] = useState([])

  function Bread(e){
    setBread(e.target.value)
  }
  function Size(e){
    setSize(e.target.value)
  }
  function getCheck(e){
    if(e.target.checked===true){
      setData([...data,e.target.value])
    }else{
      setData(data.filter((item)=> item != e.target.value))
    }
  }

  function fnCheck(e){
    if(e.target.checked === true){
      console.log(e.target.value);
      setCheck([...check, e.target.value])
    }else{
      setCheck(data.filter((item)=> item != e.target.value))
    }
  }

  return (
    <div>
      <header>
      <div className="container">
        <h1 className='title'>Pitsa Buyurtma Qilish</h1>
        <div className="bread__part">
        <div className="bread">
          <h3>Noni Qanday Bo'lsin?</h3> <br />
          <select onChange={Bread}>
            <option value="qalin" >qalin</option>
            <option value="yupqa">yupqa</option>
            <option value="o'rtacha">o'rtacha</option>
          </select>
        </div>
        <h3>Non: {bread}</h3>
        </div>
      </div>
    </header>
    <section>
    <div className="container size__part">
    <div className="size">
      <h3>Kattaligi</h3>
      <button className='btn' value='25cm' onClick={Size}>25cm</button>
      <button className='btn' value='30cm' onClick={Size}>30cm</button>
      <button className='btn' value='35cm' onClick={Size}>35cm</button>
    </div>
    <h3>Kattaligi: {size}</h3>
    </div>
    <div className="container checks">
    <div className="div">
    <h3>Ustiga nima solaylik?</h3>
    <ul className="list">
      <li className="list__items">
        <label><input type="checkbox" value="Pomidor" onClick={getCheck}/>Pomidor</label>
        <label><input type="checkbox" value="Kurka goshti" onClick={getCheck}/>Kurka goshti</label>
        <label><input type="checkbox" value="Zaytun" onClick={getCheck}/>Zaytun</label>
      </li>
      <li className="list__items">
        <label><input type="checkbox" value="Tuzlangan bodring" onClick={getCheck}/>Tuzlangan bodring</label>
        <label><input type="checkbox" value="Qoziqorin" onClick={getCheck}/>Qo'ziqorin</label>
        <label><input type="checkbox" value="Qazi" onClick={getCheck}/>Qazi</label>
      </li>
    </ul>
    </div>
    <div className="foot">
    <h3>Ustida:
    <h5>
      {data.map((item) =>
      <li  key={item}><p>{item}</p></li>
      )}
    </h5>
    </h3>
    </div>
    </div>
    <div className="container">
    <h2 className='heading'>Qo'shimchalar</h2>
    <div className="qoshimchalar">
    <div className="receipt">
      <label><input type="checkbox" value="Achchiq" onClick={fnCheck}/>Achchiq</label>
      <label><input type="checkbox" value="Pishloq" onClick={fnCheck}/>Pishloq</label>
    </div>
    <h5>
      <h2>Qo'shimcha:</h2>
      {check.map((item)=>
      <li key={item}>{item}</li>
      )}
      <button className='btn1'>BUYURTMA BERISH</button>
    </h5>
    </div>
    </div>
    </section>
    </div>
  )
}

export default App



