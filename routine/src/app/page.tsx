import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="font-dung flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="text-2xl mb-20">루틴 선택</div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <Link href="/type-a">
                    <div className="relative">
                        <div className="absolute top-1.5 left-1.5 w-full h-full bg-white"></div>
                        <div className="relative p-5 bg-black text-white text-center border-2 h-48 flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center w-24 h-24">
                                <Image src="/type-a.png" alt="type-a" width="100" height="100" className="max-w-full max-h-full" />
                            </div>
                            <div className="text-xl mt-2">억만장자</div>
                            <div className="text-xs border-[1px] rounded-full mt-1 px-2">난이도 상</div>
                        </div>
                    </div>
                </Link>
                <Link href="/type-b">
                    <div className="relative">
                        <div className="absolute top-1.5 left-1.5 w-full h-full bg-white"></div>
                        <div className="relative p-5 bg-black text-white text-center border-2 h-48 flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center w-24 h-24">
                                <Image src="/type-b.png" alt="type-b" width="100" height="100" className="max-w-full max-h-full" />
                            </div>
                            <div className="text-xl mt-2">캐시</div>
                            <div className="text-xs border-[1px] rounded-full mt-1 px-2">유포리아</div>
                        </div>
                    </div>
                </Link>
                <Link href="/type-c">
                    <div className="relative">
                        <div className="absolute top-1.5 left-1.5 w-full h-full bg-white"></div>
                        <div className="relative p-5 bg-black text-white text-center border-2 h-48 flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center w-24 h-24">
                                <Image src="/type-c.png" alt="type-c" width="100" height="100" className="max-w-full max-h-full" />
                            </div>
                            <div className="text-xl mt-2">허버먼</div>
                            <div className="text-xs border-[1px] rounded-full mt-1 px-2">신경과학자</div>
                        </div>
                    </div>
                </Link>
                <Link href="/type-d">
                    <div className="relative">
                        <div className="absolute top-1.5 left-1.5 w-full h-full bg-white"></div>
                        <div className="relative p-5 bg-black text-white text-center border-2 h-48 flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center w-24 h-24">
                                <Image src="/type-d.png" alt="type-d" width="100" height="100" className="max-w-full max-h-full" />
                            </div>
                            <div className="text-xl mt-2">백만원장자</div>
                            <div className="text-xs border-[1px] rounded-full mt-1 px-2">난이도 최하</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
