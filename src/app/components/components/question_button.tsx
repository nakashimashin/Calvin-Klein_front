import { BoxProps, Icon, useBoolean } from "@chakra-ui/react";
import { BsQuestionLg } from "react-icons/bs";

export const Question = () => {
    return (
        <>
            <Icon
                cursor="pointer"
                as={ BsQuestionLg }
                color="white"
                w={14}
                h={14}
                rounded="full"
                p={2}
                _hover={{
                    bgColor: "yellow.400"
                }}
            />
        </>
    )
}