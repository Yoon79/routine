"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '일찍 일어나기', desc: '허버먼은 보통 아침 6시 30분쯤 일어납니다.', color: 'white'},
    { id: 2, action: '수분 섭취', desc: '일어나자마자 물을 마셔서 밤새 잃었던 수분을 보충합니다.', color: 'white'},
    { id: 3, action: '햇빛 노출', desc: '그는 깨어난 후 첫 한 시간 내에 자연 햇빛을 쬐는 것이 중요하다고 강조합니다. 이는 그의 일주기 리듬을 조절하고 기분과 각성을 높이는 데 도움이 됩니다. 날씨에 따라 10-30분 정도 밖에 나갑니다.', color: 'white'},
    { id: 4, action: '운동과 신체 활동', desc: '허버먼은 아침에 가벼운 스트레칭, 요가 또는 더 강도 높은 운동(예: 웨이트 리프팅 또는 심혈관 운동)을 포함한 신체 활동을 합니다. 그는 운동이 뇌 건강과 전반적인 웰빙에 필수적이라고 믿습니다.', color: 'white'},
    { id: 5, action: '냉수 요법', desc: '그는 집중력과 회복력을 높이기 위해 냉수 샤워 또는 얼음 목욕 같은 냉수 요법을 종종 포함합니다.', color: 'white'},
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
            <h1 className="mt-4 text-3xl">허버먼 아침 루틴</h1>
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
