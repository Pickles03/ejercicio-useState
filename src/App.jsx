import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
    const [name, setName] = useState('Sofia');
    const [newName, setNewName] = useState('');

    const changeName = (e) => {
        e.preventDefault();
        if(newName.trim() !== '') {
            setName(newName);
            setNewName('');
        }
    };

    return (
        <div className='rendered-div'>
            <h2>Teacher's name: {name}</h2>

            <form onSubmit={changeName}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter new name" />
                <button type="submit">Change name</button>
            </form>
        </div>
    )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);


/* basic insruction on how to use useState

function App () {
    const [name, setNewName] = useSate('Sofia');

    return (
        <> 
            <h2>Teacher's name: {name}</h2>
            <ul>
                <li onCLick={() => setNewName('Data')}>Data</li>   we need the callback function "() => ..." since it prevents an infinite loop
                <li onCLick={() => setNewName('Reyes)}>Reyes</li>
                <li onClick={() => setNewName('Celia)}>Celia</li>
            </ul>
        </>)
}

*/