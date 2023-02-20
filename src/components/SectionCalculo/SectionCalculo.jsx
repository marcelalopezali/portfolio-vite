import React from 'react';
import './SectionCalculo.css'
import { useState } from "react";


function SectionCalculo() {

    //state
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')



    let calcBmi = (e) =>{
        //prevent subm
        e.preventDefault()


        if(weight === 0 || height === 0){
            alert('Por favor ingresar un numero valido')
        } else {
            let bmi = (weight / (height*height))
            setBmi(bmi.toFixed(2))
            
            //mensaje

            if (bmi <=18.4) {
                setMessage ('Tenes bajo peso, sugiero control nutricional.')
            } else if (bmi >=18.5 && bmi < 24.9) {
                setMessage ('No tenes sobrepeso.')
            } else if (bmi >= 25 && bmi <= 30) {
                setMessage ('Tenes sobrepeso, te sugiero mejorar tus hábitos alimentarios.')
            } else if (bmi >= 30) {
                setMessage ('Padeces obesidad, te recomiendo modificar tus hábitos de vida.')
            }
                
            
        }
    }

    let reload = () => {
        window.location.reload()
    }


    return(
        <div className= "app"> 
            <div className="containerCalc">
                <h2 className="center">Calcula tu IMC</h2>
                <form onSubmit={calcBmi}>
                    <div>
                        <label htmlFor="">Peso</label>
                        <input type="number" value={weight} onChange ={(e) => setWeight(e.target.value)} />

                        <label htmlFor="">Altura en metros</label>
                        <input type="number" value={height} onChange ={(e) => setHeight(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn" type="submit">Calcular</button>
                        <button className="btnOutLine" onClick={reload} type="submit">Limpiar</button>
                    </div>
                </form>

                <div className="center">
                    <h3>Tu índice de masa corporal es: {bmi} kg/m2</h3>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export { SectionCalculo }