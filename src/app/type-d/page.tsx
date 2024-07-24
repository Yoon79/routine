"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '이불정리', desc: '알람 소리를 듣고 일어나세요', color: 'lightblue', imageUrl: '/waking-up.jpg' },
    { id: 2, action: '고양이 찾기', desc: '간단한 스트레칭을 하세요', color: 'lightgreen', imageUrl: '/stretching.jpg' },
    { id: 3, action: '양치하기', desc: '수분을 보충하세요', color: 'lightcoral', imageUrl: '/drinking-water.jpg' },
    { id: 4, action: '유산균과 물 마시기', desc: '얼굴을 씻고 양치하세요', color: 'lightyellow', imageUrl: '/washing-face.jpg' },
    { id: 5, action: '뉴스 보기', desc: '간단한 아침식사를 준비하세요', color: 'lightpink', imageUrl: '/preparing-breakfast.jpg' },
    { id: 6, action: '20분간 책 읽기', desc: '최신 뉴스를 확인하세요', color: 'lightgray', imageUrl: '/watching-news.jpg' },
    { id: 7, action: '하루 계획짜기', desc: '하루를 시작할 옷을 입으세요', color: 'lightpurple', imageUrl: '/getting-dressed.jpg' },
    { id: 8, action: '아침 먹기', desc: '필요한 물건을 챙기세요', color: 'lightcyan', imageUrl: '/packing-bag.jpg' },
    { id: 9, action: '스트레칭', desc: '집에서 간단한 운동을 하세요', color: 'lightorange', imageUrl: '/home-exercise.jpg' },
    { id: 10, action: '샤워', desc: '집을 나서세요', color: 'lightbrown', imageUrl: '/leaving-home.jpg' },
];

export default function TypeD() {
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

    const progressBarWidth = `${((currentPhaseIndex + 1) / phases.length) * 100}%`;

    return (
        <div className="font-dung p-8 bg-black text-white min-h-screen flex flex-col">
            <div className="flex mb-4">
                <Link href="/" passHref>
                    <div className="bg-white text-black px-4 py-2">
                        루틴선택
                    </div>
                </Link>
            </div>
            <h1 className="mt-4 text-3xl">평범한 사람들의 루틴</h1>
            {!isComplete ? (
                <div className="mt-4 flex flex-col flex-grow justify-between">
                    <div className="flex-col">
                        <div className="bg-gray-800 h-2 w-full relative">
                            <div
                                className="h-full"
                                style={{
                                    width: progressBarWidth,
                                    backgroundColor: phases[currentPhaseIndex].color,
                                    transition: 'width 0.5s ease-in-out',
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
