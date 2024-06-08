import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react'

type TodoLayoutType = {
    children: React.ReactNode;
}

export const TodoLayout = ({children}:TodoLayoutType) => {
    return (
        <Box
            h={"600px"}
            maxW={"600px"}
            background={"#fff"}
            borderRadius={"20px"}
            p={10}
        >
            <Container w="100%">
                <Text
                    fontSize={"28px"}
                    fontWeight={"bold"}
                    color={"royalblue"}
                    letterSpacing={1}
                    textAlign={"center"}
                >
                    React+Go FullStack TODO
                </Text>
                <Box 
                    mt={"20px"}
                    overflow={"auto"}
                >
                    {children} 
                </Box>
            </Container>
        </Box>
    )
}
