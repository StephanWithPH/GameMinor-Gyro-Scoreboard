import React from 'react';
import Status from "../components/Status";
import ScoreboardItem from "../components/ScoreboardItem";

function Scoreboard({scores, connected}) {
    return (
        <div className="text-gyroblue w-full flex flex-col gap-4">
            {scores.map((score, index) => (
                <ScoreboardItem
                    key={score._id}
                    position={index + 1}
                    name={score.name}
                    timeTaken={score.timeTaken}
                    createdAt={score.createdAt}
                />
            ))}
        </div>
    );
}

export default Scoreboard;
