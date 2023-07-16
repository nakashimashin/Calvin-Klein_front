"use client";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Select,
    SimpleGrid,
    Box,
    Text,
    Grid,
    GridItem,
    Button,
    Spinner
} from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";
import { convert } from "../api/convert.api";
import { Loading } from "./Loading";
import ArrowDown from '../images/arrowDown.svg'
import { Tweet } from "./twitter_button"

interface InputForm {
    textform: string;
}

interface Form {
    mode: string;
    animal: string;
}

interface ResVal {
    emojiCodes: string;
    animalSounds: string,
    morseCode: string
}

export default function Form() {
    const [text, setText] = useState("日本語"); //textの初期値を日本語に
    const [flag, setFlag] = useState(false); //初回のtriggerを防ぐときに使うflagを作成
    const [formState, setFormState] = useState<Form>({ mode: 'wabun', animal: 'cat' })
    const [isLoaging, setIsLoading] = useState<boolean>(false);
    const [isResOk, setIsResOk] = useState<boolean>(false);
    const [resVal, setResVal] = useState<ResVal>(undefined);

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<InputForm>({ mode: "onChange" }); //useFormの設定

    const onSubmit: SubmitHandler<InputForm> = async (data) => {
        setIsLoading(true);

        const words = data.textform;
        const body = {
            words: words,
            mode: formState.mode,
            animal: formState.animal
        }

        try {
            const res = await convert(body);
            if (res) {
                setIsResOk(true);
                setResVal(res.data);
            }
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false);
        }

    }

    const speak = () => {
        console.log("test")
        console.log(resVal.animalSounds)
        // const synthesis = window.speechSynthesis;
        // const utterance = new SpeechSynthesisUtterance(resVal.animalSounds);

        // synthesis.speak(utterance)
        speechSynthesis.speak(new SpeechSynthesisUtterance(resVal.animalSounds));
    }

    const englishPattern = {
        value: /^[^ぁ-んーァ-ンヴー]*$/i,
        message: "English only!!",
    };
    const japanesePattern = {
        value: /^[^a-zA-Z]*$/i,
        message: "日本語で入力してください!!",
    };

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            //ボタンを押すとtextを更新
            setText(e.target.value);
        },
        []
    );

    useEffect(() => {
        if (!flag) return setFlag(true); //returnで返すことで初回のレンダリング時にtriggerの動きを防ぐ

        trigger("textform"); //<TextareAutosize />に反応?
    }, [text]);

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                method="post"
                className="h-full"
            >
                <TextareaAutosize
                    id="textform"
                    aria-label="minimum height"
                    minRows={15}
                    placeholder="TYPE HERE"
                    {...register("textform", {
                        required: "テキストを入力してください",
                        pattern: formState.mode == "wabun" ? japanesePattern : englishPattern, //三項演算子
                    })}
                    className='bg-gray-100 rounded w-[300px] md:w-[500px] mt-[60px] text-[16px] md:text-[25px] placeholder=""'
                />
                <p className="text-red-500">
                    {errors.textform?.message as React.ReactNode}
                </p>
                {isLoaging ? <Loading /> :
                    <Grid
                        templateAreas={`"langSelect langSelect"
                "text animalSelect"
                "submit submit"`}
                        gap="4    "
                    >
                        <GridItem area={"langSelect"}>
                            <Select

                                placeholder="言語を選択してください"
                                onChange={e => {
                                    setFormState({ ...formState, mode: e.target.value })
                                }}
                            >
                                <option value="wabun" selected>日本語</option>
                                <option value="international">English</option>
                            </Select>
                        </GridItem>
                        <GridItem area={"text"} textAlign="center">
                            <Text fontSize="2xl">Convert to </Text>
                        </GridItem>
                        <GridItem area={"animalSelect"}>
                            <Select
                                onChange={e => {
                                    setFormState({ ...formState, animal: e.target.value })
                                }}>
                                <option value="cat" selected>cat</option>
                                <option value="dog">dog</option>
                            </Select>
                        </GridItem>
                        <GridItem area={"submit"} textAlign="center">
                            <Button type='submit' background='#45e660' color='white' width="88%">
                                Convert
                            </Button>
                        </GridItem>
                    </Grid>
                }
                {isResOk && (<>
                    <Box padding='56px 176px'>
                        <ArrowDown />
                    </Box>
                    <Grid>
                        <GridItem>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem textAlign='center'>
                                    <Button onClick={speak}>play sound</Button>
                                </GridItem>
                                <GridItem textAlign='center'>
                                    <Button
                                        as={Tweet}
                                        text={resVal.animalSounds}
                                        url="https://calvin-klein-front.vercel.app/"
                                        hashtags={["react", "nextjs"]}
                                        colorScheme="twitter"
                                    >
                                        Tweet
                                    </Button>
                                </GridItem>
                            </Grid>
                        </GridItem>
                        <GridItem>
                            <TextareaAutosize
                                id="textform"
                                aria-label="minimum height"
                                minRows={15}
                                className='bg-gray-100 rounded w-[300px] md:w-[500px] mt-[16px] text-[16px] md:text-[25px] placeholder=""'
                            >
                                {resVal.animalSounds}
                            </TextareaAutosize>
                        </GridItem>

                    </Grid>
                </>)}
            </form>
        </>
    );
}
