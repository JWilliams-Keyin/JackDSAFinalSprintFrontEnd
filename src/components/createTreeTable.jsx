import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function CreateTreeTable() {
    const [numbers, setNumbers] = useState([]);
    const [tree, setTree] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:8080/tree_search?tree_numbers=${"[" + numbers + "]"}`)
        .then(response => {
            setTree(response.data);
        })
        .catch(error => {
            console.error('Error fetching tree data', error);
        });
    }, []);

    const handleSubmit = async (event) => {
        const newTree = {numbers};

        try {
            const response = await axios
            .post('http://localhost:8080/process-numbers', newTree);
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
                </div>
            </form>

            <ul className = 'jsonTable'>
                {tree.map(item => {
                    <li key = {item.id}>
                        <h2 className = 'jsonTableHead'>Your Tree</h2>

                        <h3 className = 'jsonTableBody'>{item.treeJson}</h3>
                    </li>
                })}
            </ul>
        </>
    )
}

export default CreateTreeTable