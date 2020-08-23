import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [input, setInput] = useState({
        fname: '',
        sname: ''
    })

    function onChange(event) {
        setInput({
            [event.target.name] : event.target.value
        })
    }

    function onSubmit(event) {
        event.preventDefault()


    }

    return (
        console.log(input),
        <div className="App">
            {/* <header className="App-header"> */}
            <h1>Love Calculator</h1>
            {/* </header> */}

            <form>
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
            </form>
        </div>
    );
}

export default App;
