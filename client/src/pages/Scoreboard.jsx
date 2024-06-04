import React from 'react';
import Status from "../components/Status";
import boxesImg from '../assets/boxes.png';
import ScoreboardItem from "../components/ScoreboardItem";
import moment from "moment/moment";

function Scoreboard({scores, connected}) {
    const score1 = scores[0];
    const score2 = scores[1];
    const score3 = scores[2];
    const score4 = scores[3];
    const score5 = scores[4];

    return (
        <div className="text-gyroblue w-full flex flex-col gap-4">
            <div className="relative w-full">
                <div>
                    <div className="left-[3%] top-[6%] w-[19%] absolute">
                        <p className="text-2xl mb-[10%] overflow-hidden line-clamp-2 shadow-fuchsia-500 break-words">
                            {score1?.name || 'No score'}
                        </p>
                        <p className="text-2xl">{score1?.timeTaken ? moment.utc(score1?.timeTaken).format("mm:ss.SSS") : "??:??.???"}</p>
                    </div>
                    <div className="bottom-[28%] left-[3%] absolute">
                        <p className="text-xl">at {score1?.createdAt ? moment(score1?.createdAt).format("HH:mm") : "??:??"}</p>
                    </div>
                </div>

                <div>
                    <div className="left-[24%] top-[17%] w-[17%] absolute">
                        <p className="text-2xl mb-[10%] overflow-hidden line-clamp-2 shadow-fuchsia-500 break-words">
                            {score2?.name || 'No score'}
                        </p>
                        <p className="text-2xl">{score2?.timeTaken ? moment.utc(score2?.timeTaken).format("mm:ss.SSS") : "??:??.???"}</p>
                    </div>
                    <div className="bottom-[21%] left-[24%] absolute">
                        <p className="text-xl">at {score2?.createdAt ? moment(score2?.createdAt).format("HH:mm") : "??:??"}</p>
                    </div>
                </div>

                <div>
                    <div className="left-[43%] top-[33%] w-[15%] absolute">
                        <p className="text-xl mb-[10%] overflow-hidden line-clamp-2 shadow-fuchsia-500 break-words">
                            {score3?.name || 'No score'}
                        </p>
                        <p className="text-xl">{score3?.timeTaken ? moment.utc(score3?.timeTaken).format("mm:ss.SSS") : "??:??.???"}</p>
                    </div>
                    <div className="bottom-[14%] left-[43%] absolute">
                        <p>at {score3?.createdAt ? moment(score3?.createdAt).format("HH:mm") : "??:??"}</p>
                    </div>
                </div>

                <div>
                    <div className="left-[60%] top-[48%] w-[13%] absolute">
                        <p className="mb-[10%] overflow-hidden line-clamp-2 shadow-fuchsia-500 break-words">
                            {score4?.name || 'No score'}
                        </p>
                        <p className="text-xl">{score4?.timeTaken ? moment.utc(score4?.timeTaken).format("mm:ss.SSS") : "??:??.???"}</p>
                    </div>
                    <div className="bottom-[9%] left-[60%] absolute">
                        <p className="text-sm">at {score4?.createdAt ? moment(score4?.createdAt).format("HH:mm") : "??:??"}</p>
                    </div>
                </div>

                <div>
                    <div className="left-[76%] top-[60%] w-[12%] absolute">
                        <p className="mb-[10%] overflow-hidden line-clamp-2 shadow-fuchsia-500 break-words">
                            {score5?.name || 'No score'}
                        </p>
                        <p>{score5?.timeTaken ? moment.utc(score5?.timeTaken).format("mm:ss.SSS") : "??:??.???"}</p>
                    </div>
                    <div className="bottom-[5%] left-[76%] absolute">
                        <p className="text-sm">at {score5?.createdAt ? moment(score5?.createdAt).format("HH:mm") : "??:??"}</p>
                    </div>
                </div>

                <img src={boxesImg}
                     className="w-full h-full"/>
            </div>
        </div>
    );
}

export default Scoreboard;
