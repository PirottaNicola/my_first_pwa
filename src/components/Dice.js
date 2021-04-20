import React from "react";
import './Dice.css';
import { Howl } from 'howler';
//importo TUUUUUUUTTI gli audio dei dadi
import d4_1 from '../audio/d4_1.mp3';
import d20_20 from '../audio/d20_20.mp3';
import d20_19 from '../audio/d20_19.mp3'

class Dice extends React.Component {

    //definisco costruttore e stato
    constructor(props) {
        super(props);
        this.state = {
            tipo_dado: props.tipo_dado,
            valore_dado: '?',
            rolling: false
        }
    }

    //definisco la mia funzione che modifica il valore dello stato
    //da chiamare onclick
    rollDice = () => {
        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        //modifica stato Dado e la callback riproduce il suono
        const n = Math.random();
        this.setState(
            {
                valore_dado : ((Math.floor(n*this.state.tipo_dado) + 1)) !== (this.state.tipo_dado + 1) ? (Math.floor(n*this.state.tipo_dado) + 1) : this.state.tipo_dado, //nel caso uscisse 1 dal math random, col +1 andrebbe oltre, per questo l'operazione ternaria
                // valore_dado : 19, //testing audio
                rolling: true
            }, () => {
                var sound;
                window.Howler.stop(); //rolling a dice stops every other ongoing audio
                switch (this.state.tipo_dado) {
                    case "4":
                        switch (this.state.valore_dado) {
                            case 1:
                                sound = new Howl({ src: d4_1 });
                                sound.play();
                                break;
                            default:
                                break;
                        }
                        break;
                    case "6":
                        switch (this.state.valore_dado) {
                            case 1:
                                sound = new Howl({ src: d4_1 });
                                sound.play();
                                break;

                            default:
                                break;
                        }
                        break;
                    case "8":
                        switch (this.state.valore_dado) {
                            case 1:
                                sound = new Howl({ src: d4_1 });
                                sound.play();
                                break;

                            default:
                                break;
                        }
                        break;
                    case "10":
                        switch (this.state.valore_dado) {
                            case 1:
                                sound = new Howl({ src: d4_1 });
                                sound.play();
                                break;

                            default:
                                break;
                        }
                        break;
                    case "12":
                        switch (this.state.valore_dado) {
                            case 1:
                                sound = new Howl({ src: d4_1 });
                                sound.play();
                                break;

                            default:
                                break;
                        }
                        break;
                    case "20":
                        switch (this.state.valore_dado) {
                            case 1:
                                sound = new Howl({ src: d4_1 });
                                sound.play();
                                break;
                            case 19:
                                sound = new Howl({ src: d20_19 });
                                sound.play();
                                break;
                            case 20:
                                sound = new Howl({ src: d20_20 })
                                sound.play();
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
            })

        sleep(1000).then(() => { //have to sleep the same amount of time of animation duration
            this.setState({ rolling: false });
        });
    }

    //definisco il metodo render()
    render() {
        return (
            <div className={this.state.rolling ? 'dice_rolling' : 'dice_not_rolling'} onClick={this.rollDice} tipo_dado={this.state.tipo_dado}>
                <p>d {this.props.tipo_dado}</p>
                <h3> {this.state.valore_dado} </h3>
                <audio href={this.state.audio_url}></audio>
            </div>
        )
    }
}

export default Dice;
