import { Box, Spinner } from '@chakra-ui/react';

export const Loading = () => {
    return (
        <Box textAlign='center' padding='64px'>
            <Spinner
                thickness='6px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Box>

    )
}