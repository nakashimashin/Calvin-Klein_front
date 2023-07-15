'use client'
import TextareaAutosize from 'react-textarea-autosize'; 
import { useForm } from "react-hook-form";

interface InputForm {
    textform: string;
}

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<InputForm>({mode: "onChange"});

    return(
        <form action="#" method="post" className="h-full">
            <TextareaAutosize id='textform' aria-label="minimum height" minRows={15} placeholder='TYPE HERE' 
            {...register("textform",{
                required: "テキストを入力してください",
                // pattern: {value:/^[^ぁ-んーァ-ンヴー]*$/i,message:"English only!!"},//英語のみ表示可能
                pattern: {value:/^[^a-zA-Z]*$/i,message :"日本語で入力してください!!"},//日本語のみ表示可能
            })} className='bg-gray-100 rounded w-[300px] md:w-[500px] mt-[60px] text-[16px] md:text-[25px] placeholder=""'/> 
            <p className='text-red-500'>{errors.textform?.message as React.ReactNode}</p>
        </form>
    )
}