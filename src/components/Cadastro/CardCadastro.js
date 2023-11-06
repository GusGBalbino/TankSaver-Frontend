import React from 'react';
import { Text, Card, CardHeader, CardBody, Select, Input, NumberInputField, NumberInput, NumberDecrementStepper, NumberInputStepper, NumberIncrementStepper, Divider, VStack, Heading } from '@chakra-ui/react';
import { BotaoAlteracao } from '../Botoes/BotaoAlteracao';

const InfoProps = [
    { title: String },
    { info: String },
    { editor: String },
    { infoSelect: String },
]



export function CardCadastro(props = InfoProps) {
    const format = (val) => `R$ ` + val
    const parse = (val) => val.replace(/^\$/, '')

    const [value, setValue] = React.useState('0')


    return (

        <Card size={'sm'} maxW={'18rem'}>
            <CardHeader bg={'#131328'} textColor={'white'} borderRadius='md' textAlign={'center'}>
                <Heading size='sm'>{props.title}</Heading>
            </CardHeader>

            <CardBody>
                <Text>{props.info}</Text>
                <Select value={props.infoSelect} variant='filled' placeholder='Filled'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>

                <Text>Volume de compra</Text>
                <Input variant='filled' placeholder='Filled' />

                <Text>Preço por litro</Text>
                <NumberInput
                    variant='filled'
                    onChange={(valueString) => setValue(parse(valueString))}
                    value={format(value)}
                    max={50}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Text>Data da compra</Text>
                <Input
                    variant='filled'
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
                <Divider margin={'10px'} />
                <VStack>
                    <BotaoAlteracao icon={'x'} name={'salvar'} />
                </VStack>

            </CardBody>
        </Card>


    )
}