import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl mb-8">루틴 선택</h1>
            <Link href="/type-a">
                <button style={{margin: '20px', padding: '10px 20px'}}>억만장자 (난이도 상)</button>
            </Link>
            <Link href="/type-b">
                <button style={{margin: '20px', padding: '10px 20px'}}>천만장자 (난이도 중)</button>
            </Link>
            <Link href="/type-c">
                <button style={{margin: '20px', padding: '10px 20px'}}>백만장자 (난이도 하)</button>
            </Link>
            <Link href="/type-d">
                <button style={{margin: '20px', padding: '10px 20px'}}>백만원장자 (그냥 평범)</button>
            </Link>
        </div>
    );
}



