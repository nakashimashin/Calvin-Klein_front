'use client'
import TextareaAutosize from 'react-textarea-autosize'; 
export default function Form() {
    return(
        <form action="#" method="post" className="h-full">
            {/* <textarea name=""  className="bg-gray-100 rounded w-[300px] h-[300px] md:w-[500px] md:h-[500px] mt-[60px]" ></textarea> */}
            <TextareaAutosize aria-label="minimum height" minRows={15} placeholder='TYPE HERE' className='bg-gray-100 rounded w-[300px] md:w-[500px] mt-[60px] text-[16px] md:text-[25px] placeholder=""'/>
        </form>
    )
}