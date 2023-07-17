import { addMessage } from "@/app/api/addMessage"
import { ChatMessage, getMessages } from "@/app/api/getMessage";
import {
    Box, Button, Input, InputGroup, InputRightElement, Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { headerHeight } from "../header";


const ChatBox = ({ isShown }: { isShown: boolean }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputVal, setInputVal] = useState<string>("");
    const [bottom, setBottom] = useState<number>(0);

    const boxRef = useRef<HTMLDivElement | null>(null);

    const {
        register,
        handleSubmit
    } = useForm<any>({ mode: "onChange" })


    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }


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


    const postMessage = () => {
        setInputVal('');

        const date: string = getDate();
        const unixTs: number = Date.now();
        const message = inputVal;
        const newMessage: ChatMessage = { date: date, message: message };

        addMessage(unixTs, date, message);
        setMessages(prev => [...prev, newMessage]);

        //TODO インプットの中を空にする
    };


    const fetchMessage = async () => {
        const unixTs: number = Date.now();
        const prevUnixTs = Number(getCookie("prev_unix_ts"));

        if (!prevUnixTs) {
            const newMessages = await getMessages();
            setMessages(prev => [...prev, ...newMessages]);
        } else {
            const newMessages = await getMessages(prevUnixTs);
            setMessages(prev => [...prev, ...newMessages]);
        }

        setCookie('prev_unix_ts', unixTs);
    }


    const getBottom = () => {
        const element = boxRef.current;
        if (element) {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const elementBottom = elementTop + elementHeight;

            console.log(elementBottom)

            setBottom(elementBottom);
        }
    }

    useEffect(() => {
        deleteCookie('prev_unix_ts');
        setMessages([]);
        fetchMessage();
    }, [])

    return (
        <Box ref={boxRef} position='fixed' top={`${headerHeight + 64}px`} height='100vh'>
            <Box display={isShown ? 'content' : "none"} border='2px solid black' borderRadius='10px' height='600px' position='relative' overflow='scroll'>
                <Table >
                    <Tbody>
                        {messages.map((row, i) => {
                            return (
                                <Tr key={i}>
                                    <Td>
                                        <Box>
                                            {row["date"]}
                                        </Box>
                                        <Box>
                                            {row["message"]}
                                        </Box>

                                    </Td>
                                </Tr>
                            )
                        })}
                        <Button onClick={fetchMessage} colorScheme="white" color='blue' width='100%'>読み込む</Button>
                    </Tbody>
                </Table>
                <InputGroup width='200px' background='white' zIndex={1000} padding='2px' position='fixed' bottom='50px' >
                    <InputRightElement>
                        <Button type='submit' onClick={postMessage}>
                            <ArrowForwardIcon color='blue' />
                        </Button>
                    </InputRightElement>
                    <Input
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                    />
                </InputGroup>
            </Box>
        </Box>

    )
}

export default ChatBox