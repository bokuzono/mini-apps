import { memo } from "react";

export const Header = memo(() => {
    return (
        <>
            <header className="h-32 w-full flex">
                <h1 className="text-lg">ミニアプリ集</h1>
                <div className="flex">
                    <p className="text-sm">ランダム画像</p>
                    <p className="text-sm">ToDoリスト</p>
                </div>
            </header>
        </>
    )
});