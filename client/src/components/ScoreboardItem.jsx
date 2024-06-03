import React from 'react';
import moment from "moment";

function ScoreboardItem({name, timeTaken, createdAt, position}) {
    return (
        <div className={`flex justify-between items-center h-20 border-4 w-full p-5 ${getBorder(position)} ${getTextColor(position)} ${position > 3 && 'opacity-30'}`}>
            <div className="h-full w-full flex gap-4 items-center">
                <div className={`h-10 w-10 rounded-full ${getBorder(position)} border-2 flex justify-center items-center`}>
                    {position}
                </div>
                <div>
                    <p className="text-sm font-bold">{moment.utc(timeTaken).format("mm:ss:SSS")}</p>
                    <p className="text-xs">{name}</p>
                </div>
            </div>
            <div>
                <p className="text-xs">{moment(createdAt).fromNow()}</p>
            </div>
        </div>
    );
}

const getBorder = (position) => {
    switch(position) {
        case 1:
            return 'border-yellow-400';
        case 2:
            return 'border-gray-400';
        case 3:
            return 'border-amber-700';
        default:
            return 'border-gyroblue';
    }
}

const getTextColor = (position) => {
    switch(position) {
        case 1:
            return 'text-yellow-400';
        case 2:
            return 'text-gray-400';
        case 3:
            return 'text-amber-700';
        default:
            return 'text-gyroblue';
    }
}

export default ScoreboardItem;