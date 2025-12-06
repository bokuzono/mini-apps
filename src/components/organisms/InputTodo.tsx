type Props = {
    todoText: string;
    todoDetail: string;
    todoDate: string;
    onChangeTodoText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTodoDetail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTodoDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickAdd: () => void;
}

export const InputTodo = (props: Props) => {
    const {todoText, todoDate, todoDetail, onChangeTodoText, onChangeTodoDetail, onChangeTodoDate, onClickAdd} = props;

    return (
        <div className="block sm:flex justify-center px-4">
            <div className="block sm:flex justify-center">
                <input value={todoText} onChange={onChangeTodoText} type="text" placeholder="どぞどぞ" className="mr-2 mb-2 sm:mb-0 input input-bordered w-full sm:w-[160px]" />
                <input value={todoDetail} onChange={onChangeTodoDetail} type="text" placeholder="詳しく" className="mr-2 mb-2 sm:mb-0 input input-bordered w-full sm:w-[160px]" />
                <input value={todoDate} onChange={onChangeTodoDate} type="date" className="mr-2 mb-4 sm:mb-0 input input-bordered w-full sm:w-[160px]"/>
            </div>
            <button className="btn block mx-auto sm:mx-0" onClick={onClickAdd}>タスク追加</button>
        </div>
    )
}