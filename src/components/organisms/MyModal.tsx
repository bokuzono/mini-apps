import { useState } from "react";
import { Link } from "react-router-dom";

export const MyModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
        <div className="lg:hidden px-4 h-16 w-full items-center bg-[#8FA4B2] flex justify-between">
            <h1 className="text-lg text-white font-bold navbar-start"><Link to="/">ミニアプリ集</Link></h1>
            <div className="dropdown">
                {/* onClickにそのまま関数をぶち込んでる */}
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                {isOpen && (
                    <div className="fixed inset-0 bg-base-100 z-50 flex flex-col items-center justify-center gap-6 text-2xl">
                        <button className="btn btn-sm absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                        ✕
                        </button>
                        <Link to="/" onClick={() => setIsOpen(false)}>ホーム</Link>
                        <Link to="/RandomPhoto" onClick={() => setIsOpen(false)}>ランダム画像</Link>
                        <Link to="/Todo" onClick={() => setIsOpen(false)}>Todoリスト</Link>
                        <Link to="/Dnd" onClick={() => setIsOpen(false)}>ドラッグ&ドロップ</Link>
                        <Link to="/Rhf" onClick={() => setIsOpen(false)}>Reactフォーム</Link>
                    </div>
                )}
            </div>
        </div>
    </>
);
};