import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// req.headers({
// 	"x-rapidapi-host": "love-calculator.p.rapidapi.com",
// 	"x-rapidapi-key": "764f55fd85msh8fd2187ba90389ep119c18jsn8a952578bf67",
// 	"useQueryString": true
// });

const apiKey = '764f55fd85msh8fd2187ba90389ep119c18jsn8a952578bf67'

function App() {
    const [input, setInput] = useState({
        fname: 'fd',
        sname: 'fdbd'
    })

    function onChange(event) {
        setInput({
            [event.target.name] : event.target.value
        })
    }

    function onSubmit(event) {
        event.preventDefault()
        
        axios
            .get('https://love-calculator.p.rapidapi.com/getPercentage', {
                headers: {
                    "x-rapidapi-key":"764f55fd85msh8fd2187ba90389ep119c18jsn8a952578bf67",
                    "params": {
                        "fname":input.fname,
                        "sname":input.sname
                    }
                }
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            })


    }

    return (
        console.log(input),
        <div className="App">
            {/* <header className="App-header"> */}
            <h1>Love Calculator</h1>
            {/* </header> */}

            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    name='fname'
                    placeholder='Enter first persons name'
                    onChange={onChange}
                />

                <input 
                    type='text'
                    name='sname'
                    placeholder='Enter second persons name'
                    onChange={onChange}
                />
                
                <button type='submit'>Calculate!</button>
            </form>
        </div>
    );
}

export default App;
