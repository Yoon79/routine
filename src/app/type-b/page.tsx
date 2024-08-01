"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from "next/image";

const phases = [
    { id: 1, action: '새벽 4시 기상!', desc: '<p style="color: lightblue; font-size: 14px;">충분한 준비 시간 확보</p>', color: 'white' },
    { id: 2, action: '헤어 케어', desc: '<p style="color: pink; font-weight: bold;">샴푸와 컨디셔닝:</p> 그녀는 머리를 꼼꼼하게 감고 컨디셔너를 사용합니다.<br><p style="color: pink; font-weight: bold;">블로우 드라이:</p> 머리를 감은 후, 그녀는 헤어 드라이어로 머리를 말립니다.<br><p style="color: pink; font-weight: bold;">스타일링:</p> 그녀는 컬링 아이언을 사용해 볼륨 있는 컬을 만듭니다.', color: 'white' },
    { id: 3, action: '스킨케어 루틴', desc: '<p style="color: lightgreen; font-style: italic;">클렌징:</p> Cassie는 얼굴을 깨끗하게 세안합니다.<br><p style="color: lightgreen; font-style: italic;">토너:</p> 피부 균형을 맞추기 위해 토너를 사용합니다.<br><p style="color: lightgreen; font-style: italic;">모이스처라이징:</p> 그녀는 피부에 수분을 공급합니다.<br><p style="color: lightgreen; font-style: italic;">세럼과 오일:</p> 추가적인 광택과 효과를 위해 다양한 세럼과 오일을 사용합니다.', color: 'white' },
    { id: 4, action: '메이크업 루틴', desc: '<p style="color: palevioletred;">프라이머:</p> 메이크업이 오래 지속되도록 프라이머를 바릅니다.<br><p style="color: palevioletred;">파운데이션과 컨실러:</p> 완벽한 피부 표현을 위해 파운데이션과 컨실러를 사용합니다.<br><p style="color: palevioletred;">컨투어링과 하이라이팅:</p> 그녀의 특징을 강조하기 위해 컨투어와 하이라이트를 합니다.<br><p style="color: palevioletred;">아이 메이크업:</p> 아이섀도우, 아이라이너, 마스카라로 눈을 또렷하게 만듭니다.<br><p style="color: palevioletred;">브로우:</p> 잘 정돈된 눈썹을 위해 눈썹을 채웁니다.<br><p style="color: palevioletred;">블러셔와 브론저:</p> 얼굴에 색과 차원을 추가합니다.<br><p style="color: palevioletred;">립 메이크업:</p> 립스틱이나 립글로스를 발라 메이크업을 마무리합니다.', color: 'white' },
    { id: 5, action: '파이널 터치!', desc: '<p style="color: lightsalmon;">향수:</p> 지속적인 향기를 위해 향수를 뿌립니다.<br><p style="color: lightsalmon;">의상 선택:</p> 자신감을 느낄 수 있는 의상을 선택합니다.<br><p style="color: lightsalmon;">액세서리:</p> 전체적인 외모를 향상시키기 위해 액세서리를 추가합니다.', color: 'white'},
];

export default function TypeB() {
    const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentPhaseIndex > 0) {
            const audio = new Audio('/bell.mp3');
            audio.play();
        }
    }, [currentPhaseIndex]);

    const handleNextPhase = useCallback(() => {
        if (currentPhaseIndex < phases.length - 1) {
            setCurrentPhaseIndex(prevIndex => prevIndex + 1);
        } else {
            setIsComplete(true);
            const audio = new Audio('/finish.mp3');
            audio.play();
        }
    }, [currentPhaseIndex]);

    const progressBarWidth = `${((currentPhaseIndex + 1) / phases.length) * 100}%`;

    return (
        <div className="font-dung p-8 bg-black text-white min-h-screen flex flex-col">
            <div className="flex mb-4">
                <Link href="/" passHref>
                    <div className="bg-white text-black px-4 py-2 cursor-pointer">
                        루틴선택
                    </div>
                </Link>
            </div>
            <h1 className="mt-4 text-3xl">새벽 4시 캐시 루틴</h1>
            {!isComplete ? (
                <div className="mt-4 flex flex-col flex-grow justify-between">
                    <div className="flex-col">
                        <div className="bg-gray-800 h-2 w-full relative">
                            <div
                                className="h-full"
                                style={{
                                    width: progressBarWidth,
                                    backgroundColor: phases[currentPhaseIndex].color,
                                    transition: 'width 1s ease-in-out',
                                }}
                            ></div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <div className="text-2xl">{phases[currentPhaseIndex].action}</div>
                            <div className="text-xl">{`${currentPhaseIndex + 1} / ${phases.length}`}</div>
                        </div>
                        <div
                            className="mt-2 text-sm"
                            dangerouslySetInnerHTML={{ __html: phases[currentPhaseIndex].desc }}
                        ></div>
                        {/* 이미지를 사용하려면 imageUrl 속성을 다시 추가하고 주석을 해제합니다 */}
                        {/* <Image
                            src={phases[currentPhaseIndex].imageUrl}
                            alt={phases[currentPhaseIndex].action}
                            width="100"
                            height="100"
                            className="mt-2 max-w-full max-h-full"
                        /> */}
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
