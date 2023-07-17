import { addMessage } from "@/app/api/addMessage"
import { getMessage } from "@/app/api/getMessage";
import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ChatBox = () => {
    const [messages, setMessages] = useState();

    const getDate = (): string => {
        const currentDate = new Date();
        const year = currentDate.getFullYear(); // 年を取得
        const month = currentDate.getMonth() + 1; // 月を取得 (0から始まるため、+1する)
        const day = currentDate.getDate(); // 日を取得
        const hours = currentDate.getHours(); // 時を取得
        const minutes = currentDate.getMinutes(); // 分を取得
        const seconds = currentDate.getSeconds(); // 秒を取得
        const date: string = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
        return date;
    };

    const postMessage = (message: string): void => {
        const date: string = getDate();
        const unixTs: number = Date.now();

        addMessage(unixTs, date, message);
    };


    const fetchMessage = () => {
        console.log(typeof Date.now())
        getMessage();
    }

    useEffect(() => {
    }, [])

    return (
        <Box border='2px solid black' borderRadius='10px'>
            <Button onClick={fetchMessage}>
                get
            </Button>
            <Button onClick={postMessage}>
                post
            </Button>
        </Box>
    )
}

export default ChatBox