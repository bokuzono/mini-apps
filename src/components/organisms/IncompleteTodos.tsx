import { TodoItem } from "../../types/TodoItem";

type Props = {
    // 配列の型定義
    incompleteTodos: TodoItem[];
    //属性で引数を取るときはその引数を片付けしてあげる
    onClickComplete: (index: number) => void;
}

export const IncompleteTodos = (props: Props)=> {
    const {incompleteTodos, onClickComplete} = props;

    return (
        <ul className="flex sm:flex-col justify-center">
            {incompleteTodos.map((todo, index) => (
                <li key={index} className="m-auto mb-4 flex sm:items-center">
                    {/* メモ : 配列に入ったものをmapで一つ一つtodoに取り出してループ。なので{todo}という表現になって、[]とかは考えなくていい */}
                    <p className="mr-2 w-[50%] sm:w-[160px] break-words">{todo.todoText}</p>
                    <p className="mr-2 w-[50%] sm:w-[160px] break-words">{todo.todoDetail}</p>
                    <p className="mr-2 w-[50%] sm:w-[160px] break-words">{todo.todoDate}</p>
                    {/* メモ : 属性で引数をとる場合は無名関数を使う */}
                    <button className="btn ml-[-16px]" onClick={() => onClickComplete(index)}>完了！</button>
                </li>
            ))}
        </ul>
    )
}