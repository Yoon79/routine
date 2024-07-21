import Link from 'next/link';
import Image from "next/image";

export default function Home() {
    return (
        <div className="font-dung flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="text-2xl mb-20">루틴 선택</div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <Link href="/type-a">
                    <div className="p-5 text-center border rounded-lg h-48 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24">
                            <Image src="/type-a.png" alt="type-a" width="100" height="100" className="max-w-full max-h-full" />
                        </div>
                        <div className="text-xl mt-2">억만장자</div>
                        <div className="text-xs border-[1px] rounded-full mt-1 px-2">난이도 상</div>
                    </div>
                </Link>
                <Link href="/type-b">
                    <div className="p-5 text-center border rounded-lg h-48 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24">
                            <Image src="/type-b.png" alt="type-b" width="100" height="100" className="max-w-full max-h-full" />
                        </div>
                        <div className="text-xl mt-2">천만장자</div>
                        <div className="text-xs border-[1px] rounded-full mt-1 px-2">난이도 중</div>
                    </div>
                </Link>
                <Link href="/type-c">
                    <div className="p-5 text-center border rounded-lg h-48 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24">
                            <Image src="/type-c.png" alt="type-c" width="100" height="100" className="max-w-full max-h-full" />
                        </div>
                        <div className="text-xl mt-2">백만장자</div>
                        <div className="text-xs border-[1px] rounded-full mt-1 px-2">난이도 하</div>
                    </div>
                </Link>
                <Link href="/type-d">
                    <div className="p-5 text-center border rounded-lg h-48 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24">
                            <Image src="/type-d.png" alt="type-d" width="100" height="100" className="max-w-full max-h-full" />
                        </div>
                        <div className="text-xl mt-2">백만원장자</div>
                    <div className="text-xs border-[1px] rounded-full">난이도 최하</div>
                </div>
            </Link>
            </div>
        </div>
    );
}



