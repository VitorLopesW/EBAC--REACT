import { React , useEffect } from 'react'


import './tabela.sass'

function tabela({ IMC }) {
    // Reset Colors
    useEffect(() => {
        document.getElementById('magreza').style.backgroundColor = 'white'
        document.getElementById('normal').style.backgroundColor = 'white'
        document.getElementById('sobrepeso').style.backgroundColor = 'white'
        document.getElementById('obesidade').style.backgroundColor = 'white'
        document.getElementById('obesidade-2').style.backgroundColor = 'white'
    }, [IMC])
    
    useEffect(() => {
        if(IMC < 18.5){
            document.getElementById('magreza').style.backgroundColor = '#FF6347'
        }else if(IMC >= 18.5 && IMC < 24.9){
            document.getElementById('normal').style.backgroundColor = '#90EE90'
        }else if(IMC >= 25 && IMC < 29.9){
            document.getElementById('sobrepeso').style.backgroundColor = '#FFA07A'
        }else if(IMC >= 30 && IMC < 39.9){
            document.getElementById('obesidade').style.backgroundColor = '#FF6347'
        }else if(IMC >= 40){
            document.getElementById('obesidade-2').style.backgroundColor = '#FF6347'
        }
    }, [IMC])

    return (
        <div className='tabela centralize'>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id='magreza'>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                    </tr>
                    <tr id='normal'>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                    </tr>
                    <tr id='sobrepeso' >
                        <td>Entre 25 e 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr id='obesidade'>
                        <td>Entre 30 e 39,9</td>
                        <td>Obesidade</td>
                    </tr>
                    <tr id='obesidade-2'>
                        <td>Maior que 40</td>
                        <td>Obesidade Grave</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 

export default tabela