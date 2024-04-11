
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/UseGames';
import GameCard from './GameCard';
import GameCardSekelton from './GameCardSekelton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
   
const { data,error,isloading} = useGames();
const skeltons = [1,2,3,4,5,6]  
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3}} spacing={3} padding={'10px'}>

        {isloading && skeltons.map(skleton => 
        <GameCardContainer>
          <GameCardSekelton key={skleton} />
        </GameCardContainer>)}
        
        {data?.map(game => (
          <GameCardContainer>
            <GameCard key={game.id} game = {game} />
          </GameCardContainer>
        ))}
     </SimpleGrid>
    </>
  )
}

export default GameGrid
