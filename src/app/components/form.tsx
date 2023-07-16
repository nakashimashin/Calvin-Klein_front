'use client'
import TextareaAutosize from 'react-textarea-autosize'; 
import { useForm } from "react-hook-form";
import { Select } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from 'react';

interface InputForm {//propsをまとめて型定義
    textform: string;
}

export default function Form() {    
    const [text, setText] = useState('日本語'); //textの初期値を日本語に
    const [flag, setFlag] = useState(false); //初回のtriggerを防ぐときに使うflagを作成

    //正規表現を使用
    const englishPattern = {value:/^[^ぁ-んーァ-ンヴー]*$/i,message:"English only!!"}; //英語のみ利用可能
    const japanesePattern = {value:/^[^a-zA-Z]*$/i,message :"日本語で入力してください!!"}; //日本語のみ利用可能



    const handleChange = useCallback((e : React.ChangeEvent<HTMLSelectElement>) => { //ボタンを押すとtextを更新
        setText(e.target.value)
    },[])

    useEffect(() => {//textに新たに値が代入されたとき、レンダリング時に動く
        if(!flag) return setFlag(true);//returnで返すことで初回のレンダリング時にtriggerの動きを防ぐ

        trigger("textform")//<TextareAutosize />に反応?
    }, [text])


    const {
        register,
        // handleSubmit,
        formState: {errors},
        trigger
    } = useForm<InputForm>({mode: "onChange"});//useFormの設定

    


    return(
        <>
            <form action="#" method="post" className="h-full">
                <TextareaAutosize id='textform' aria-label="minimum height" minRows={15} placeholder='TYPE HERE' 
                {...register("textform",{
                    required: "テキストを入力してください",
                    pattern: text == "日本語"? japanesePattern : englishPattern //三項演算子
                })} className='bg-gray-100 rounded w-[300px] md:w-[500px] h-[360px] mt-[60px] text-[16px] md:text-[25px] placeholder=""'/> 
                <p className='text-red-500'>{errors.textform?.message as React.ReactNode}</p>
                <Select placeholder='言語を選択してください' value={text} onChange={handleChange} >
                    <option value='日本語' >日本語</option>
                    <option value='英語'>English</option>
                </Select>
            </form>
        </>
    )
}