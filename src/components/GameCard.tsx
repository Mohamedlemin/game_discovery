
import { Game } from '../hooks/UseGames';
import {Image, Card, CardBody, Heading, Text, Icon, HStack } from '@chakra-ui/react';
import {FaWindows} from 'react-icons/fa'

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src = {game.thumbnail} />
        <CardBody>
        <Heading fontSize={'2xl'}>{game.title}</Heading>  
             <HStack marginStart={'100px'}>     
                   <Icon as ={ FaWindows} color='gray.500' /> 
                   <Text>  {game.platform}</Text>
         

             </HStack>
           
        </CardBody>
    </Card>
  )
}

export default GameCard
