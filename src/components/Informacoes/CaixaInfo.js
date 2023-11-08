import React from 'react';
import { Text, Card, CardHeader, CardBody} from '@chakra-ui/react';

const InfoProps = [
    { title: String },
    { info: String },
    { editor: String }
]

export function CaixaInfo(props = InfoProps) {
    return (
        
            <Card size={'sm'} >
                <CardHeader align={'center'} bg={'#131328'} textColor={'white'} borderRadius='md'>
                    <Text size='sm'>{props.title}</Text>
                </CardHeader>

                <CardBody align={'center'}>
                    {props.info}
                </CardBody>
            </Card>
      

    )
}