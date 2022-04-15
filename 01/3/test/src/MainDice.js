import React, { useState } from 'react';
import Logo from './images/diceeLogo@2x.png'
import dice1x from './images/dice1.png'
import dice2x from './images/dice2@2x.png'
import dice3x from './images/dice3@2x.png'
import dice4x from './images/dice4@2x.png'
import dice5x from './images/dice5@2x.png'
import dice6x from './images/dice6@2x.png'

function MainDice(){

    const [dice1, setDice1] = useState(dice2x)
    const [dice2, setDice2] = useState(dice3x)

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function ButtonClicked() {
        var array = {0: dice1x, 1: dice2x,2: dice3x, 3: dice4x,4: dice5x, 5: dice6x  };

        let ran_int1 = randomIntFromInterval(0,5);
        let ran_int2 = randomIntFromInterval(0,5);
        
        let dice1  = array[ran_int1];
        let dice2  = array[ran_int2];
        
        setDice1(dice1)
        setDice2(dice2)
    }
    return(
    <div className="container">
        <div className="logo"><img src={Logo} alt=""/></div>
            <div className="list-dice">
            <img className="dice-1" src={dice1} alt=""/>
            <img id="dice-2" src={dice2} alt=""/>
        </div>
    <button onClick={ButtonClicked} className="roll-dice">Roll Dice</button>
  </div>
    )
}

export default MainDice;