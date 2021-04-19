import React from "react";
import './diceContainer.css';
import Dice from './Dice';

function DiceContainer() {
    return (
        <div className='diceContainer'>
            <Dice tipo_dado="4" />
            <Dice tipo_dado="6" />
            <Dice tipo_dado="8" />
            <Dice tipo_dado="10" />
            <Dice tipo_dado="12" />
            <Dice tipo_dado="20" />
        </div>
    )
}

export default DiceContainer;