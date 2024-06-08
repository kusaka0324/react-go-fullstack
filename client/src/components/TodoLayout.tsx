import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react'

type TodoLayoutType = {
    children: React.ReactNode;
}

export const TodoLayout = ({children}:TodoLayoutType) => {
    return (
        <Box
            h={"600px"}
            maxW={"600px"}
            background={"#1a1a1a"}
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
                <Flex
                    gap={4}
                    direction={"column"}
                    mt={"20px"}
                    maxH={"80%"}
                    p={"8px"}
                    overflow={"auto"}
                >
                    {children} 
                </Flex>
            </Container>
        </Box>
    )
}
