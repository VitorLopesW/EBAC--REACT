import { React , useEffect } from 'react'



import './calculadora.sass'

function calc({ setAltura, setPeso }) {

    function handleAlturaChange(e){
        let alturaValue = e.target.value
        if(alturaValue > 3){
            alturaValue = parseFloat(alturaValue.toString().split('').join('.'))
            e.target.value = alturaValue
        }
        setAltura(alturaValue)

    }  

    function handlePesoChange(e){
        setPeso(e.target.value)
    }

    return (
        <div className='calculadora centralize'>
            <h1>IMC para Adultos:</h1>
            <div className='container centralize'>
                <div className="container__division centralize">
                    <label htmlFor="num1">Digite sua altura:</label>
                    <input type="number" id="alturaInput" onKeyUp={handleAlturaChange} />
                </div>
                <div className="container__division centralize">
                    <label htmlFor="num2">Digite seu peso:</label>
                    <input type="number" id="num2" onKeyUp={handlePesoChange} />
                </div>
            </div>
        </div>
    )
}

export default calc




