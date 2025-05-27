import { memo, useState } from "react";
import { usePhoto } from "../../hooks/usePhoto";

export const RandomPhoto = memo(() => {
    const {photo, setPhoto} = usePhoto();
    const onClickPhoto = () => {
        setPhoto(`https://picsum.photos/800?time=${new Date().getTime()}`)
    }

    return (
        <div className="mx-auto py-8">
            <div className="mb-8 flex justify-center">
                <button className="bg-[#8FB29D] py-1 px-4 rounded-full text-white hover:translate-y-1 hover:scale-95 transition-transform duration-150" onClick={onClickPhoto}>Changeで</button>
            </div>
            <div className="flex justify-center">
                <img className="w-[500px]" src={photo} alt="ランダム画像" />
            </div>
        </div>
    )
});