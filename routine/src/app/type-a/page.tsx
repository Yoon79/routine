"use client";

import { useEffect, useState } from 'react';

const phases = [
    { start: 0, end: 10, action: '앉기', color: 'lightblue' },
    { start: 10, end: 20, action: '눕기', color: 'lightgreen' },
    { start: 20, end: 30, action: '서기', color: 'lightcoral' },
];

export default function TypeA() {
    const [time, setTime] = useState(0);
    const [phase, setPhase] = useState(phases[0]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    const newTime = prevTime + 1;
                    if (newTime > 30) {
                        clearInterval(interval);
                        return 30;
                    }
                    return newTime;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        const currentPhase = phases.find(p => time >= p.start && time < p.end);
        if (currentPhase) {
            setPhase(currentPhase);
        }

        if (time === 10 || time === 20) {
            const audio = new Audio('/bell.mp3');
            audio.play();
        } else if (time === 30) {
            const audio = new Audio('/finish.mp3');
            audio.play();
        }
    }, [time]);

    const startTimer = () => {
        setIsRunning(true);
    };

    return (
        <div className="p-8 bg-black text-white min-h-screen">
            <h1 className="text-2xl mb-4">A타입 루틴</h1>
            <button
                onClick={startTimer}
                className="mb-4 bg-white text-black px-4 py-2"
            >
                시작
            </button>
            <div className="mb-4 bg-gray-800 h-8 w-full relative">
                <div
                    className="h-full bg-white"
                    style={{ width: `${(time / 30) * 100}%` }}
                ></div>
            </div>
            <p>현재 시간: {time}초</p>
            <p>현재 행동: {phase.action}</p>
        </div>
    );
}
