// Create
import React, {useEffect, useState} from 'react';
import Scoreboard from "./pages/Scoreboard";
import background from './assets/bg1.png';
import logo from './assets/logo.png';
import io from 'socket.io-client';
import Status from "./components/Status";
import moment from "moment/moment";
import AllScores from "./components/modals/AllScores";
import {FiList} from "react-icons/fi";

function App() {
    const [scores, setScores] = useState([]);
    const [connected, setConnected] = useState(false);
    const [lastFetch, setLastFetch] = useState();
    const [isAllScoresModalOpen, setIsAllScoresModalOpen] = useState(false);

    // Fetch scores on load and connect to socket
    useEffect(() => {
        connectToSocket();
    }, []);

    useEffect(() => {
        console.log(isAllScoresModalOpen);
    }, [isAllScoresModalOpen]);

    return (
        <div className="relative h-screen w-full bg-center bg-no-repeat bg-cover"
             style={{backgroundImage: `url(${background})`}}>
            <div
                className="absolute w-full h-screen flex justify-center items-center bg-gradient-to-b from-black/80 to-neutral-600/80 flex-col gap-11">
                <div>
                    <img src={logo} alt="logo" className="w-80"/>
                </div>
                <div className="w-[65%]">
                    <Scoreboard scores={scores} connected={connected}/>
                </div>
            </div>
            <div className="absolute right-3 bottom-3 text-white">
                <Status connected={connected}/>
            </div>
            <div className="absolute left-3 bottom-3 text-white">
                <p><span
                    className="text-gyroblue">Last updated:</span> {lastFetch ? moment(lastFetch).format('DD MMM YYYY [at] HH:mm') : 'Never'}
                </p>
            </div>
            <div className="absolute right-3 top-3 text-gyroblue/50 border-gyroblue/50 hover:text-gyroblue hover:border-gyroblue transition-all text-2xl border-2 rounded-lg w-10 h-10 flex justify-center items-center">
                <button onClick={() => setIsAllScoresModalOpen(true)}>
                    <FiList className="mb-0 pb-0"/>
                </button>
            </div>
            <AllScores isOpen={isAllScoresModalOpen} setIsOpen={(x) => setIsAllScoresModalOpen(x)}/>
        </div>
    );

    async function fetchTableData() {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/scores?limit=5`);
            return await response.json();
        } catch (err) {
            console.error('Error fetching scores:', err);
            return [];
        }
    }

    function refreshTable() {
        fetchTableData().then(data => {
            setScores(data);
            setLastFetch(new Date());
        }).catch(err => {
            console.error('Error fetching scores:', err);
        });
    }

    function connectToSocket() {
        // Connect to socket io socket
        console.log('Connecting to socket');
        const socket = io(`${process.env.REACT_APP_SOCKET_URL}`);
        socket.on('connect', () => {
            console.log('Connected to socket');
            refreshTable();
            setConnected(true);
        });
        socket.on('disconnect', () => {
            console.log('Disconnected from socket');
            setScores([]);
            setConnected(false);
        });
        socket.on('scoreboard-changed', (msg) => {
            console.log('Scoreboard changed');
            refreshTable();
        });
    }
}

export default App;
