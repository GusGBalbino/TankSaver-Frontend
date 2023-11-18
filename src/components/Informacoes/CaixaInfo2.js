import React from 'react';
import { Text, Card, CardHeader, CardBody } from '@chakra-ui/react';

const InfoProps = [
    { title: String },
    { info: String },
    { editor: String }
];

export function CaixaInfo2(props = InfoProps) {
    return (
        <Card size={'sm'} borderWidth={1} borderColor="#FFBB0D" borderRadius="lg"> 
            <CardHeader align={'center'} bg={'#131328'} textColor={'white'} borderRadius='md'>
                <Text size='sm'>{props.title}</Text>
            </CardHeader>

            <CardBody align={'center'} border='#FFBB0D'>
                <Text fontSize="xs" lineHeight="shorter" margin="0"> 
                    {props.info}
                </Text>
            </CardBody>
        </Card>
    );
}
