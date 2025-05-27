import { useState } from "react";

export const usePhoto = () => {
    const [photo, setPhoto ] = useState("https://picsum.photos/800");

    return{photo, setPhoto};
};