import { memo } from "react";
import { Link } from "react-router-dom";

export const Header = memo(() => {

    return (
        <>
            <header className="px-4 h-16 w-full flex items-center bg-[#8FA4B2]">
                <h1 className="text-base text-white font-bold mr-9 md:text-xl">ミニアプリ集</h1>
                <div className="flex gap-4">
                    <Link to="/RandomPhoto" className="text-sm text-white hover:text-opacity-60 hover:text-opacity-60 md:text-base">ランダム画像</Link>
                    <Link to="/Todo" className="text-sm text-white hover:text-opacity-60 md:text-base">ToDoリスト</Link>
                </div>
            </header>
        </>
    )
});