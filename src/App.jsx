import imagen from './assets/img/Imagen.png'
import imagen0 from './assets/img/Imagen_0.jpg'
import imagen1 from './assets/img/Imagen_1.jpg'
import imagen2 from './assets/img/Imagen_2.jpg'
import imagen3 from './assets/img/Imagen_3.jpg'
import './App.css'
import { useState } from 'react'
import Json from './assets/phrases.json'
import Phrases from '../src/component/Phrases/Phrases'
import Author from '../src/component/Author/Author'
import { getRandomNumber } from './assets/utils/getRandomNumber'


function App() {
  const [count, setCount] = useState(getRandomNumber(0, Json.length-1));
  const [count1, setCount1] = useState(getRandomNumber(0,3));
  
 function Number (){
  setCount([Math.floor(Math.random()*Json.length)])
  setCount1([Math.floor(Math.random()*4)])}
    

  function img (Count1){
    let img = "";
    if (count1 == 0) img = imagen0
    if (count1==1) img =imagen1
    if (count1 == 2)img = imagen2
    if (count1==3) img = imagen3
    return img;
  }
  
  return (
    <div className="App">    
    <img  src={img(count1)} alt={`contenedor${count1}`} />        
    <button className="button" onClick={Number}> 
    <span>Leer Otro </span>
      </button>
      <div className="img-container"><img src={imagen} alt="Contenedor de texto" /></div>
     <Phrases text={Json[count]}/>
     <Author penman={Json[count]}/>
    </div>
  )

  }

export default App
