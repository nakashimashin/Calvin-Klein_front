import { BoxProps, Icon, useBoolean } from "@chakra-ui/react";


export const Question = () => {
    return (
        <>
            <Icon
            // display={showButton ? "block" : "none"} //ボタンをToggle
            // onClick = {() => window.scrollTo({ top: 0, behavior: "smooth"})} //上までSmoothスクロール
            cursor="pointer"
            // position="fixed"
            // right={6}
            // bottom={6}
            // as={RiArrowUpSLine}
            // bgColor="green.300"
            color="white"
            w={14}
            h={14}
            rounded="full"
            p={2}
            // boxShadow="md"
            _hover={{
                // bgColor: "yellow.200"
            }}
        />

        </>
    )
}