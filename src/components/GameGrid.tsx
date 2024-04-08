
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/UseGames';
import GameCard from './GameCard';
import GameCardSekelton from './GameCardSekelton';


const GameGrid = () => {
   
const {games,error,isloading} = useGames();
const skeltons = [1,2,3,4,5,6]  
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3}} spacing={3} padding={'10px'}>
        {isloading && skeltons.map(skleton => <GameCardSekelton key={skleton} />)}
        {games.map(game => (
            <GameCard key={game.id} game = {game} />
        ))}
     </SimpleGrid>
    </>
  )
}

export default GameGrid
