import React from "react";
import './Footer.css';
import {Heading, Flex, Text,} from '@chakra-ui/react'



const Footer = () => {

    const miestilo={
        w: '100vw',
        bg:'transparent',
        color:'grey',
        p:'30px',
}

    return(

        <footer>
            <Flex flexDirection={"column"} justifyContent='center' alignItems={"center"} sx={miestilo}>
                <Text fontSize='12px' mt='10px'>by nutrimali</Text>           
           </Flex>
        </footer>
    )
}

export { Footer }