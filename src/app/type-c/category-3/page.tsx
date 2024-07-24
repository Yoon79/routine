"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '점심 식사', desc: '점심은 에너지를 유지하면서도 오후에 피곤하지 않도록 단백질, 건강한 지방, 채소를 포함한 균형 잡힌 식사를 합니다.', color: 'white'},
    { id: 2, action: '짧은 낮잠 또는 휴식', desc: '허버먼은 때때로 짧은 낮잠을 자거나 짧은 휴식 시간을 가져 재충전합니다.', color: 'white'},
    { id: 3, action: '업무', desc: '그는 오후에는 회의, 행정 업무, 가벼운 독서 등 인지적 부담이 적은 업무를 계속합니다.', color: 'white'},
];

export default function Page() {
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
                <Link href="/type-c" passHref>
                    <div className="bg-white text-black px-4 py-2">
                        이전
                    </div>
                </Link>
            </div>
            <h1 className="mt-4 text-3xl">허버먼 오후 루틴</h1>
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
                        <div className="mt-2 text-base">{phases[currentPhaseIndex].desc}</div>
                        {/*<Image*/}
                        {/*    src={phases[currentPhaseIndex].imageUrl}*/}
                        {/*    alt={phases[currentPhaseIndex].action}*/}
                        {/*    width="100"*/}
                        {/*    height="100"*/}
                        {/*    className="mt-2 max-w-full max-h-full"*/}
                        {/*/>*/}
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
