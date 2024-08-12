"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '이불정리', desc: '일어나자마자 이불 정리를 해보세요', color: 'lightblue'},
    { id: 2, action: '고양이 찾기', desc: '사랑스런 고양이에게 가서 인사합니다', color: 'lightgreen' },
    { id: 3, action: '양치하기', desc: '밤새 입 안에 자리잡은 세균들을 죽여줍니다', color: 'lightcoral' },
    { id: 4, action: '유산균과 물 마시기', desc: '쩍쩍 갈라진 몸에 수분을 보충합니다. 그리고 각종 공복에 먹을 영양제를 먹습니다.', color: 'lightyellow' },
    { id: 5, action: '뉴스 보기', desc: '새로운 정보들이나 주식창을 봐도 좋습니다.', color: 'lightpink' },
    { id: 6, action: '20분간 책 읽기', desc: ' 이 습관은 정신적, 정서적, 생산성 측면에서 긍정적인 영향을 미칩니다.', color: 'lightgray' },
    { id: 7, action: '하루 계획짜기', desc: '희망찬 하루 계획을 짭니다.', color: 'lightpurple' },
    { id: 8, action: '아침 먹기', desc: '간단하게 먹거나 자신의 스타일대로 먹어도 좋습니다.', color: 'lightcyan' },
    { id: 9, action: '청소', desc: '설거지, 빨래 등 집안일을 합니당', color: 'lightcyan' },
    { id: 10, action: '스트레칭', desc: '집에서 간단한 운동을 하세요', color: 'lightorange'},
    { id: 11, action: '샤워', desc: '샤워를 하며 오늘 아침을 정리하고 그리고 계획적인 하루를 보낼 준비를 합니다.', color: 'lightbrown' },
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
