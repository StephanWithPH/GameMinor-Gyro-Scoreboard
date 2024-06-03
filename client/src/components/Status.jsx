import React from 'react';

function Status({connected}) {
    if(connected) {
        return (
            <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Connected</span>
            </div>
        );
    }
    else {
        return (
            <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span>Disconnected</span>
            </div>
        );
    }
}

export default Status;