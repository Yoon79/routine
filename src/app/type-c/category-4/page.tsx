"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '운동', desc: '만약 아침에 운동을 하지 않았다면 저녁에 운동 세션을 포함합니다.', color: 'white'},
    { id: 2, action: '저녁 식사', desc: '허버먼은 단백질과 채소 중심의 가벼운 저녁을 먹고, 더 나은 수면의 질을 위해 무거운 탄수화물은 피합니다.', color: 'white'},
    { id: 3, action: '사회 활동 및 휴식', desc: '그는 가족 및 친구들과 시간을 보내며 긴장을 풉니다.', color: 'white'},
    { id: 4, action: '블루라이트 노출 줄이기', desc: '멜라토닌 생성을 촉진하고 수면의 질을 높이기 위해 화면과 인공 조명 노출을 줄입니다.\n', color: 'white'},
    { id: 5, action: '저녁 반성', desc: '그는 종종 하루를 반성하거나 일기를 써서 하루의 사건을 처리하고 다음 날을 계획합니다.', color: 'white'},
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
            <h1 className="mt-4 text-3xl">허버먼 저녁 루틴</h1>
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
                            src="/finish.gif"
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
