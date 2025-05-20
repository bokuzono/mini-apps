import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderLayout } from "../components/templates/HeaderLaout";
import { Home } from "../components/pages/Home";
import { RandomPhoto } from "../components/pages/RandomPhoto";
import { Todo } from "../components/pages/Todo";

export const Router = memo(() => {
    return (
        <Routes>
            <Route path='/' element={<HeaderLayout><Home /></HeaderLayout>} />
            <Route path='/RandomPhoto' element={<HeaderLayout><RandomPhoto /></HeaderLayout>} />
            <Route path='/Todo' element={<HeaderLayout><Todo /></HeaderLayout>} />
        </Routes>
    )
})