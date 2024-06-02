import React from 'react';

function Scoreboard({scores, connected}) {
    return (
      <div className="w-full">
          <table className="table-auto w-full">
              <thead>
              <tr className="text-left">
                  <th>Time Taken</th>
                  <th>Name</th>
                  <th>Created at</th>
              </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                    <tr key={index}>
                        <td>{score.timeTaken}</td>
                        <td>{score.name}</td>
                        <td>{score.createdAt}</td>
                    </tr>
                ))}
              </tbody>
          </table>
          <p>{connected ? "Connected" : "Not connected"}</p>
      </div>
    );
}

export default Scoreboard;
