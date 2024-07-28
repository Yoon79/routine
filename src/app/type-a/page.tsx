"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '꿈 기억하기', desc: '꿈을 기록하거나 기억하는 습관은 자기 이해와 창의성을 증진시킬 수 있습니다.', color: 'white'},
    { id: 2, action: '이불 정리하기', desc: '이불 정리하기는 작은 성취감을 제공하며 하루를 시작하는 좋은 습관으로 알려져 있습니다. 예를 들어, 네이비 씰 퇴역 장군인 윌리엄 H. 맥레이븐(William H. McRaven)은 이불 정리를 하루의 첫 번째 임무로 강조합니다.', color: 'white'},
    { id: 3, action: '물 한잔과 영양제 먹기', desc: '많은 건강 전문가들이 추천하는 습관입니다. 아침에 물을 마시는 것은 신체를 깨우고 수분을 공급하는 데 좋습니다.', color: 'white' },
    { id: 4, action: '10분간 명상', desc: '명상은 마음을 차분하게 하고 집중력을 높이는 데 도움을 줍니다. 오프라 윈프리와 스티브 잡스와 같은 많은 사람들이 명상 습관을 가지고 있습니다.', color: 'white'},
    { id: 5, action: '2분간 격렬한 운동', desc: '짧은 시간 동안 고강도의 운동을 하는 것은 신진대사를 활성화하고 에너지를 높이는 데 효과적입니다.', color: 'white'},
    { id: 6, action: '찬물샤워', desc: '찬물샤워는 혈액 순환을 촉진하고, 정신을 맑게 하는 데 도움이 됩니다.', color: 'white' },
    { id: 7, action: '따뜻한 차 마시기', desc: '따뜻한 차를 마시는 것은 몸을 편안하게 하고 정신을 맑게 하는 데 도움을 줄 수 있습니다.', color: 'white'},
    { id: 8, action: '일기쓰기 / 계획짜기', desc: '일기 쓰기와 계획 짜기는 하루를 더 잘 관리하고, 목표를 설정하는 데 중요합니다. 벤자민 프랭클린은 하루 계획을 세우는 습관이 있었습니다.', color: 'white' },
    { id: 9, action: '20분간 독서', desc: '독서는 지식을 넓히고 새로운 아이디어를 얻는 데 도움을 줍니다. 빌 게이츠는 정기적으로 독서를 통해 많은 지식을 습득합니다.', color: 'white' },
    { id: 10, action: '스무디 만들기', desc: '영양가 있는 아침 식사를 준비하는 것은 하루를 건강하게 시작하는 좋은 방법입니다.', color: 'white' },
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
            <h1 className="mt-4 text-3xl">억만장자 루틴</h1>
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
