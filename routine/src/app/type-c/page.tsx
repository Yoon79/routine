import Link from 'next/link';
import '../globals.css';

export default function TypeC() {
    return (
        <div className="font-dung background-pattern p-8 bg-black text-white min-h-screen flex flex-col">
            <div className="flex z-10 mb-4">
                <Link href="/" passHref>
                    <div className="bg-white text-black px-4 py-2">
                        루틴 선택
                    </div>
                </Link>
            </div>
            <h1 className="mt-4 z-10 text-3xl">허버먼 카테고리</h1>
            <div className=" z-10 bg-black md:grid gap-4 md:grid-cols-5 mt-4">
                <Link href="/type-c/category-1">
                    <div className="p-5 text-center border-2 flex flex-col items-center justify-center mb-4 h-18 md:h-48">
                        <div className="text-xl">아침 루틴</div>
                    </div>
                </Link>
                <Link href="/type-c/category-2">
                    <div className="p-5 text-center border-2 flex flex-col items-center justify-center mb-4 h-18 md:h-48">
                        <div className="text-xl">오전 루틴</div>
                    </div>
                </Link>
                <Link href="/type-c/category-3">
                    <div className="p-5 text-center border-2 flex flex-col items-center justify-center mb-4 h-18 md:h-48">
                        <div className="text-xl">오후 루틴</div>
                    </div>
                </Link>
                <Link href="/type-c/category-4">
                    <div className="p-5 text-center border-2 flex flex-col items-center justify-center mb-4 h-18 md:h-48">
                        <div className="text-xl">저녁 루틴</div>
                    </div>
                </Link>
                <Link href="/type-c/category-5">
                    <div className="p-5 text-center border-2 flex flex-col items-center justify-center h-18 md:h-48">
                        <div className="text-xl">밤 루틴</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
