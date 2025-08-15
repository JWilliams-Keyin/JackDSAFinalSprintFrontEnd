import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function PreviousTreesTable() {
    const [tree, setTree] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:8080/previous-trees')
        .then(response => {
            setTree(response.data);
        })
        .catch(error => {
            console.error('Error fetching tree data', error)
        });
    }, []);
    return(
        <div>
            <ul className = 'jsonTable'>
                {flight.map(item => (
                    <li key = {item.id}>
                        <h3 className = 'jsonTableHead'>Tree {item.id}</h3>

                        <div className = 'jsonTableBody'>
                            <h3>{item.treeJson}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreviousTreesTable