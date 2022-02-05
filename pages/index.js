import Head from 'next/head';
import { useEffect, useState } from 'react';
import SideBar from "../components/sideBar";
import SideContent from "../components/sideContent";
import TopBarContent from "../components/topBarContent";
import TopBarDisplay from "../components/topBarDisplay"
import rickSearch from '../client/RickSearch';
import DisplayScreen from '../components/displayScreen';
import DisplayChar from '../components/displayChar';

const channelObjs = {
  "Home": {},
  "Characters": {
    "SPECIES": [
      "Alien",
      "Animal",
      "Human",
      "Humanoid",
      "Mythological Creature",
      "Poopybutthole",
      "Robot"
    ]    
  },
  "Episodes": {
    "SEASON" : [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5"
    ]
  },
  "Location": {
    "DIMENSION" : [
      "Cronenberg",
      "Fantasy",
      "C-137",
      "5-126",
      "Post Apocalyptic",
      "Replacement",
      "Testicle",
      "Unknown"
    ]
  }
}

function Home() {

  const [word, setWord] = useState("");
  const [channelObj, setChannelObj] = useState({});
  const [characters, setCharacters] = useState([])

  const handleClick = (text) => {
    setWord(text)
    
    setChannelObj(channelObjs[text]);
    
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      await rickSearch.fetchCharacters()
      setCharacters(rickSearch.number6)
    }  
    fetchCharacters();
  }, [])

  return (
    <div className="container text-white text-md">
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <SideContent channelsObj={channelObj}/> 
      <TopBarContent word={word}/>
      <TopBarDisplay />
      <SideBar onClick={handleClick}/>
      <DisplayScreen />
      <DisplayChar characters={characters}/>
    </div>
    );
}

export default Home; /*export default function Home*/