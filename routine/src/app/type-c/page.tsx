"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '모닝 페이지 작성', desc: '꿈과 감정을 기록하세요', color: 'white', imageUrl: '/morning-pages.jpg' },
    { id: 2, action: '명상', desc: '집중력과 평온을 찾으세요', color: 'white', imageUrl: '/meditation.jpg' },
    { id: 3, action: '운동', desc: '신체 활력을 증진하세요', color: 'white', imageUrl: '/exercise.jpg' },
    { id: 4, action: '건강한 아침식사', desc: '영양소를 보충하세요', color: 'white', imageUrl: '/healthy-breakfast.jpg' },
    { id: 5, action: '독서', desc: '지식과 영감을 얻으세요', color: 'white', imageUrl: '/reading.jpg' },
    { id: 6, action: '계획 세우기', desc: '오늘의 목표를 설정하세요', color: 'white', imageUrl: '/planning.jpg' },
    { id: 7, action: '샤워', desc: '상쾌한 시작을 하세요', color: 'white', imageUrl: '/shower.jpg' },
    { id: 8, action: '아침 스트레칭', desc: '유연성과 혈액순환을 증진하세요', color: 'white', imageUrl: '/stretching.jpg' },
    { id: 9, action: '감사 일기', desc: '감사하는 마음을 가지세요', color: 'white', imageUrl: '/gratitude-journal.jpg' },
    { id: 10, action: '집중력 훈련', desc: '명상 및 짧은 휴식을 취하세요', color: 'white', imageUrl: '/focus-training.jpg' },
];

export default function TypeC() {
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
            <h1 className="mt-4 text-3xl">백만장자 루틴</h1>
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
