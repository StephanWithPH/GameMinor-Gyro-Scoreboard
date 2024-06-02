// Create
import React, {useEffect, useState} from 'react';
import Scoreboard from "./pages/Scoreboard";
import io from 'socket.io-client';

function App() {
    const [scores, setScores] = useState([]);
    const [connected, setConnected] = useState(false);

    // Fetch scores on load and connect to socket
    useEffect(() => {
        connectToSocket();
    }, []);

    return (
        <div>
            <Scoreboard scores={scores} connected={connected}/>
        </div>
    );

    async function loadTableData() {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/scores`);
            return await response.json();
        }
        catch (err) {
            console.error('Error fetching scores:', err);
        }
    }

    function connectToSocket() {
        // Connect to socket io socket
        console.log('Connecting to socket');
        const socket = io(`${process.env.REACT_APP_SOCKET_URL}`);
        socket.on('connect', () => {
            console.log('Connected to socket');
            setConnected(true);
            loadTableData().then(data => {
                setScores(data);
            });
        });
        socket.on('disconnect', () => {
            console.log('Disconnected from socket');
            setConnected(false);
        });
        socket.on('scoreboard-changed', (msg) => {
            console.log('Scoreboard changed');
            loadTableData().then(data => {
                setScores(data);
            });
        });
    }
}

export default App;
