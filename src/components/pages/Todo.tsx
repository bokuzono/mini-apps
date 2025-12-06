import { memo } from "react";
import { InputTodo } from "../organisms/InputTodo";
import { IncompleteTodos } from "../organisms/IncompleteTodos";
import { useTodoInput } from "../../hooks/useTodoInput";

export const Todo = memo(() => {
    const {todoText, todoDetail, todoDate, incompleteTodos, setIncompleteTodos, onChangeTodoDate, onChangeTodoText, onChangeTodoDetail, reset} = useTodoInput();

    // タスク追加ボタン
    const onClickAdd = () => {
        if(todoText==="")return;

        //メモ : 値が単体だった頃の書き方。todoTextステートだけを加えていた
        // const newTodo = [...incompleteTodos, todoText];
        // setIncompleteTodos(newTodo);

        const newTodo = {
            todoText: todoText,
            todoDetail: todoDetail,
            todoDate: todoDate
        };

        setIncompleteTodos([...incompleteTodos, newTodo]);
        reset();
    }

    // 完了ボタン
    const onClickComplete = (index : number) => {
        const newTodos = [...incompleteTodos]

        // メモ : todo系はspliceを使ってループのindex番目を削除する
        // メモ : ちなみに配列は上記のように新しく展開する必要がある
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos)
    }

    return (
        <div className="py-8">
            <h2 className="text-3xl flex justify-center">ToDo</h2>
            <div className="">
                <div className="mt-6">
                    <h3 className="mb-4 text-xl flex justify-center">記録しちゃって</h3>
                    <InputTodo todoText={todoText} todoDetail={todoDetail} todoDate={todoDate} onChangeTodoText={onChangeTodoText} onChangeTodoDetail={onChangeTodoDetail} onChangeTodoDate={onChangeTodoDate} onClickAdd={onClickAdd} />
                </div>
                <div className="mt-6">
                    <h3 className="mb-4 text-xl flex justify-center">タスクたち</h3>
                    {/* メモ : 配列.lengthで要素数を持ってこれる */}
                    {incompleteTodos.length === 0 ? (
                        <p className="text-center text-gray-500">タスクはまだないよ！</p>
                    ) : (
                        <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} />
                    )
                }
                </div>
            </div>
        </div>
    )
});