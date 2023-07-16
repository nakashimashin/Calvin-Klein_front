import { FC, useEffect } from "react";
import { BoxProps, Icon, useBoolean } from "@chakra-ui/react";
import { RiArrowUpSLine } from "react-icons/ri";

export const Scroll: FC = () => {
    const [showButton, setShowButton] = useBoolean();//onおよびoff関数を使用してブール値を管理するために使用されるカスタムフック

    //スクロールイベントをListen
    useEffect(() => {
        window.addEventListener("scroll", watchScroll);
        return () => {
            window.removeEventListener("scroll", watchScroll);
        };
    }, []);

    //Scrollを検知しボタン表示のフラグを切り替え
    const watchScroll = () => {
        const basePosition = 200;
        const scrollPosition = window.scrollY;
        if (basePosition <= scrollPosition){
            setShowButton.on();
        }else{
            setShowButton.off();
        }
    }; 

    return(
        <Icon
            display={showButton ? "block" : "none"} //ボタンをToggle
            onClick = {() => window.scrollTo({ top: 0, behavior: "smooth"})} //上までSmoothスクロール
            cursor="pointer"
            position="fixed"
            right={6}
            bottom={6}
            as={RiArrowUpSLine}
            bgColor="green.300"
            color="white"
            w={14}
            h={14}
            rounded="full"
            p={2}
            boxShadow="md"
            _hover={{
                bgColor: "green.200"
            }}
         />
    );
};