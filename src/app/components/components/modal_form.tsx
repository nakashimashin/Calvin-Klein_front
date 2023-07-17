import { FormLabel, Input, Box, Button, VStack, Text } from "@chakra-ui/react";

export const MForm = () =>{
    return (
        <VStack spacing={3}>
           <Text fontSize='3xl'>①使用する言語を選択する</Text> 
           <Text fontSize='3xl'>②選択した言語でテキストを入力</Text> 
            <Button 
                background="blue.300"
                color="white"
                _hover={{ background: "blue.400" }}
            >
                登録
            </Button>
        </VStack>
    );
};