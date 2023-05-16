import { Wheel } from 'react-custom-roulette';
import React, { useState } from 'react';
import sound from './misc333.mp3';
import './ruleta.css';

const data = [
  { option: 'Uno', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: 'Dos', style: { backgroundColor: 'white' } },
  { option: 'Tres' },
  { option: 'Cuatro' },
  { option: 'Cinco' },
  { option: 'Seis' },
];
function Comenzarjuego(){
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(Math.floor(Math.random() * data.length));



  //const audioRef = useRef(new Audio("./misc333.mp3"));
  const audio = new Audio(sound)

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      audio.play();
    }
  }
  if(!localStorage.getItem('user')){
    window.location = '/';
  }
    return (
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          spinDuration={0.7}
          data={data}


          onStopSpinning={() => {
            setMustSpin(false);
            console.log("Se ha paradoa");
            audio.pause();
          }}
        />
        <button onClick={handleSpinClick}>Girar</button>
        <p>{prizeNumber}</p>
      </div>
    );
  };
  
  export default Comenzarjuego;