import { useState } from 'react'
import './App.css'
import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import SideBar from './components/SideBar'

function App() {
 

  return (
    <>
    <Grid
  templateAreas={{
    base:`"nav" "main"`,
    lg : `"nav nav" "aside main"`,
  }}
  
>
  <GridItem pl='2' area={'nav'}>
    <NavBar></NavBar>
  </GridItem>
  <Show above='lg'>
  <GridItem pl='2' area={'aside'}>
    <SideBar></SideBar>
  </GridItem>
  </Show>
  <GridItem pl='2'  area={'main'}>
    <GameGrid/>
  </GridItem>
 
</Grid>
    </>
  )
    
}

export default App
