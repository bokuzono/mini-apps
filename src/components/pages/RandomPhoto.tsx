import { memo } from "react";

export const RandomPhoto = memo(() => {
    return (
        <div className="mx-auto py-8">
            <div className="mb-8 flex justify-center">
                <button className="bg-[#8FB29D] py-1 px-4 rounded-full text-white hover:translate-y-1 hover:scale-95 transition-transform duration-150">Changeで</button>
            </div>
            <div className="flex justify-center">
                <img className="w-[500px]" src="https://picsum.photos/800" alt="ランダム画像" />
            </div>
        </div>
    )
});