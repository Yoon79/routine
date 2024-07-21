"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '꿈 기억하기', desc: '꿈을 기억하세요', color: 'text-red-100', imageUrl: '/sitting.jpg' },
    { id: 2, action: '이불 정리하기', desc: '이불 정리', color: 'lightgreen', imageUrl: '/images/sitting.jpg' },
    { id: 3, action: '물 한잔과 영양제 먹기', desc: '물먹기', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
    { id: 4, action: '10분간 명상', desc: '명상하세용', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
    { id: 5, action: '2분간 격렬한 운동', desc: '운동이욧', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
    { id: 6, action: '찬물샤워', desc: '샤워하세용', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
    { id: 7, action: '따뜻한 차 마시기', desc: '차마시세용', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
    { id: 8, action: '일기쓰기 / 계획짜기', desc: '일기쓰세용', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
    { id: 9, action: '20분간 독서', desc: '독서하세용', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
    { id: 10, action: '스무디 만들기', desc: '스무디 만들기', color: 'lightcoral', imageUrl: '/images/sitting.jpg' },
];

export default function TypeA() {
    const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentPhaseIndex > 0) {
            const audio = new Audio('/bell.mp3');
            audio.play();
        }
    }, [currentPhaseIndex]);

    const handleNextPhase = () => {
        if (currentPhaseIndex < phases.length - 1) {
            setCurrentPhaseIndex(currentPhaseIndex + 1);
        } else {
            setIsComplete(true);
            const audio = new Audio('/finish.mp3');
            audio.play();
        }
    };

    return (
        <div className="font-dung p-8 bg-black text-white min-h-screen flex flex-col">
            <div className="flex mb-4">
                <Link href="/" passHref>
                    <div className="bg-white text-black px-4 py-2">
                        루틴선택
                    </div>
                </Link>
            </div>
            <h1 className="mt-4 text-3xl">억만장자 루틴</h1>
            {!isComplete ? (
                <div className="mt-4 flex flex-col flex-grow justify-between">
                    <div className="flex-col">
                        <div className="bg-gray-800 h-2 w-full relative">
                            <div
                                className="h-full"
                                style={{
                                    width: '100%',
                                    backgroundColor: phases[currentPhaseIndex].color,
                                }}
                            ></div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <div className="text-2xl">{phases[currentPhaseIndex].action}</div>
                            <div className="text-xl">{`${currentPhaseIndex + 1} / ${phases.length}`}</div>
                        </div>
                        <div className="mt-2 text-sm">{phases[currentPhaseIndex].desc}</div>
                        <Image
                            src={phases[currentPhaseIndex].imageUrl}
                            alt={phases[currentPhaseIndex].action}
                            width="100"
                            height="100"
                            className="mt-2 max-w-full max-h-full"
                        />
                    </div>
                    <div className="flex w-full justify-center mt-4">
                        <button
                            onClick={handleNextPhase}
                            className="w-full bg-white text-black px-4 py-2 text-center"
                        >
                            다음 단계
                        </button>
                    </div>
                </div>
            ) : (
                <div className="mt-2">
                    <div className="text-2xl">루틴 완료!</div>
                    <div className="mt-1 text-base">부자 되세요!!! 홧팅!!! 좋은 하루 ❤️</div>
                    <div className="mt-4 flex justify-center">
                        <Image
                            src="/finish.png"
                            alt="finish"
                            width="100"
                            height="100"
                            className="max-w-full max-h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
