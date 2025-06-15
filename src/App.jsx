import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
    const [name, setName] = useState('Sofia');
    const [newName, setNewName] = useState('');

    return (
        <div className="rendered-div">
            <h2>Teacher name: {name}</h2>
            <ul>
                <li onClick = {() => setName('Data')}>Data</li>
                <li onClick = {() => setName('Reyes')}>Reyes</li>
                <li onClick = {() => setName('Yolanda')}>Yolanda</li>
            </ul>
        </div>
    )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);
