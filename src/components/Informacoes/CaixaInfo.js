import React from 'react';
import { Text, IconButton, Card, CardHeader, CardBody,  Flex } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'

const InfoProps = [
    { title: String },
    { info: String }
]

export function CaixaInfo(props = InfoProps) {
    return (
        
            <Card size={'sm'}>
                <CardHeader bg={'#131328'} textColor={'white'} borderRadius='md'>
                    <Text size='sm'>{props.title}</Text>
                </CardHeader>

                <CardBody>
                    <Text>{props.info}</Text>

                    <Flex marginTop={'2'} justifyContent={'flex-end'}>
                        <IconButton size={'sm'} aria-label='Search database' icon={<EditIcon />} />
                    </Flex>
                </CardBody>
            </Card>
      

    )
}

// <Text>Ultima atualização: {props.title}</Text>
//             <Text>{props.info}</Text>