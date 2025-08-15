import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function CreateTreeTable() {
    const [numbers, setNumbers] = useState([]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const numberArray = numbers
            .split(',')
            .map(num => parseInt(num.trim(), 10));

    try {
        await axios.post(
            'http://localhost:8080/process-numbers',
            numberArray,
            { headers: { 'Content-Type': 'application/json' } }
        );
        alert("Tree successfully created!");
    } catch (error) {
        console.error("Error creating tree", error);
        alert("Error creating tree!");
    }
    };

    return(
        <>
            <form onSubmit = {handleSubmit} className = 'createTable'>
                <h2 className = 'createTableHead'>Create New Tree</h2>

                <div className = 'createTableBody'>
                    <label>Enter Tree Numbers:</label>
                    <input className = 'createTableInput' value = 
                    {numbers} onChange = {(event) =>
                    setNumbers(event.target.value)}>
                    </input>

                    <button type = 'submit' className = 'submitButton'>Create Tree</button>
                </div>
            </form>
        </>
    )
}

export default CreateTreeTable