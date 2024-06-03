import React from 'react';
import Status from "../components/Status";

function Scoreboard({scores, connected}) {
    return (
        <div className="w-full">
            <table className="table-auto w-full">
                <thead>
                <tr className="text-left">
                    <th>Place</th>
                    <th>Time Taken</th>
                    <th>Name</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {scores.map((score, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{score.timeTaken}</td>
                        <td>{score.name}</td>
                        <td>{score.createdAt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-center">
                <Status connected={connected}/>
            </div>
        </div>
    );
}

export default Scoreboard;
