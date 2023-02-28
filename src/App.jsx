import imagen from '../src/assets/img/imagen.png'
import './App.css'
import { useEffect, useState } from 'react'
import Json from './assets/phrases.json'
import Phrases from '../src/component/Phrases/Phrases'
import Author from '../src/component/Author/Author'


function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  
  function Number (){
  setCount([Math.floor(Math.random()*Json.length)])
  setCount1([Math.floor(Math.random()*4)])
    
  }
  
 

  return (
    <div className="App">    
    <img  src={(`../src/assets/img/Imagen_${count1}.jpg`)} alt="Contenedor" />        
    <button className="button" onClick={Number}> 
    <span>Leer Otro </span>
      </button>
      <div className="img-container"><img  src={imagen} alt="Contenedor de texto" /></div>
     <Phrases text={Json[count]}/>
     <Author penman={Json[count]}/>
    </div>
  )
}

export default App
