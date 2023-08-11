import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import BodyPage from './components/BodyPage'
import ButtonsPreNext from './components/ButtonsPreNext'

function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  
  
    const initialUrl = "https://rickandmortyapi.com/api/character" 
    
    const fetchCharacters = (url) => {
      fetch(url)
      .then((response) => response.json())
    .then((data)=> {
      setCharacters(data.results);
      setInfo(data.info);
      setNext(data.info)
    })
    .catch((err)=> console.log(err))
    
  }
  useEffect(()=> {
    fetchCharacters(initialUrl);
  }, [])

  const prevAction = () => {
    fetchCharacters(info.prev)
  }
  const nextAction = () => {
    fetchCharacters(info.next)
  }

  return (
    <>
      <Navbar/>
      <section className='bg-[url(/fondo5.png)] bg-cover list-image-none bg-center'>
      <ButtonsPreNext prev={info.prev} next={info.next} prevAction={prevAction} nextAction={nextAction}/>
      <BodyPage characters={characters}/>
      <ButtonsPreNext prev={info.prev} next={info.next} prevAction={prevAction} nextAction={nextAction}/>
      </section>
    </>
  )
}

export default App
