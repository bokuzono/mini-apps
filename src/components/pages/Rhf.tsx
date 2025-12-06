import { memo } from "react";
import { useForm } from "react-hook-form";
    type FormValues = {
        name : string,
        email : string,
        gender : boolean,
        age : string,
        agree : boolean
    }

export const Rhf = memo(() => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,} = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        alert(JSON.stringify(data, null, 2));
    }

    return (
    <>
        <div className="p-10">
            <h1 className="text-xl mb-2">Reactフォーム</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label className="mr-2 block">名前</label>
                    <input className="input input-bordered" {...register("name", {required: "名前は必須です", maxLength: {value: 10,message: "それ名前じゃなくね？"}})} placeholder="名前を入力"/>
                    <p className="text-red-500">{errors.name?.message}</p>
                </div>

                <div className="mb-2">
                    <label className="mr-2 block">メールアドレス</label>
                    <input className="input input-bordered" {...register("email", {required: "アドレスも必須です", pattern: {value: /\S+@\S+\.\S+/,message: "メールっぽくしないとダメ〜"}})} placeholder="メールアドレスを入力"/>
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>

                <div className="mb-2">
                    <label className="mr-2">
                        <input {...register("gender")} type="radio" value="male" />男性
                    </label>
                    <label>
                        <input {...register("gender")} type="radio" value="female" />女性
                    </label>
                </div>

                <div className="mb-4">
                    <label className="mr-2 block">年齢</label>
                    <div className="flex gap-2">
                        <select className="border border-gray-300" {...register("age")}>
                            <option value=""></option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">80</option>
                            <option value="90">90</option>
                            <option value="100">100</option>
                            <option value="110">110</option>
                            <option value="120">120</option>
                            <option value="130">130</option>
                        </select>
                        <p>代</p>
                    </div>
                </div>

                <div className="mb-2">
                    <label className="mr-2">
                        <input {...register("agree")} type="radio" value="agree" />同意する
                    </label>
                </div>

                <div className="mb-10 mt-4">
                    <button className="btn mr-2" type="submit">送信</button>
                    <button className="btn" type="button" onClick={()=> reset()}>リセット</button>
                </div>

                <div className="">
                    <strong>リアルタイム表示</strong>
                    {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                    <p>{`名前: ${watch("name") || ""}`}</p>
                    <p>{`メールアドレス: ${watch("email") || ""}`}</p>
                    <p>{`性別: ${watch("gender") || ""}`}</p>
                    <p>{`年齢: ${watch("age") || ""}`}</p>
                    <p>{`同意: ${watch("agree") || ""}`}</p>
                </div>
            </form>
        </div>
    </>
    )
});