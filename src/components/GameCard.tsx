
import { Game } from '../hooks/UseGames';
import {Image, Card, CardBody, Heading, Text, Icon, HStack } from '@chakra-ui/react';
import {FaWindows} from 'react-icons/fa'

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src = {game.background_image} height="200px"/>
        <CardBody>
             <HStack justifyContent={'space-between'}> 
             <Heading fontSize={'1xl'}>{game.name}</Heading>  
                   <Text> 
                    <Icon as ={ FaWindows} color='gray.500' />  
                     {game.rating}
                   </Text>
             </HStack>
           
        </CardBody>
    </Card>
  )
}

export default GameCard
