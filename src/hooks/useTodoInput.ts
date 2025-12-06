import { useState } from "react";
import { TodoItem } from "../types/TodoItem";

export const useTodoInput = () => {
    const [todoText, setTodoText] = useState<string>("");
    const [todoDetail, setTodoDetail] = useState<string>("");
    const [todoDate, setTodoDate] = useState<string>("");
    // メモ : TodoItem[]は初期値が配列なので、このように[]をつけて書く。その中に入ってくるものに型付けをしてる感じ
    const [incompleteTodos, setIncompleteTodos] = useState<TodoItem[]>([]);

    const onChangeTodoText = (event : React.ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
    const onChangeTodoDetail = (event : React.ChangeEvent<HTMLInputElement>) => setTodoDetail(event.target.value);
    const onChangeTodoDate = (event : React.ChangeEvent<HTMLInputElement>) => setTodoDate(event.target.value);

    const reset = () => {
        setTodoText("");
        setTodoDetail("");
        setTodoDate("");
    }

    // メモ : フックスのreturnは{}で
    return{ todoText, todoDetail, todoDate, incompleteTodos, setIncompleteTodos, onChangeTodoDate, onChangeTodoText, onChangeTodoDetail, reset }
}