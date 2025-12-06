import { memo } from "react";
import { Link } from "react-router-dom";
import { MyModal } from "../MyModal";

export const Header = memo(() => {

    return (
        <>
            <header>
                <div className="px-4 h-16 w-full items-center bg-[#8FA4B2] hidden lg:flex">
                    <h1 className="text-base text-white font-bold mr-9 md:text-xl"><Link to="/">ミニアプリ集</Link></h1>
                    <div className="flex gap-4">
                        <Link to="/RandomPhoto" className="text-sm text-white hover:text-opacity-60 md:text-base">ランダム画像</Link>
                        <Link to="/Todo" className="text-sm text-white hover:text-opacity-60 md:text-base">ToDoリスト</Link>
                        <Link to="/Dnd" className="text-sm text-white hover:text-opacity-60 md:text-base">ドラッグ&ドロップ</Link>
                        <Link to="/Rhf" className="text-sm text-white hover:text-opacity-60 md:text-base">Reactフォーム</Link>
                    </div>
                </div>
                <MyModal />
            </header>
        </>
    )
});