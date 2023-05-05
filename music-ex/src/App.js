import './App.css';
import Player from './Player/Player';
import {songsdata} from './Player/audio';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong,setCurrentSong] = useState(songsdata[0]);

  const audioEl = useRef();

  useEffect(() => {
    if(isplaying){
      audioEl.current.play();
    }
    else {
      audioEl.current.pause(); 
    }
  }, [isplaying])  

  return (
    <div className="App">
      <audio src="https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse" ref={audioEl}/>
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioEl={audioEl}/>
    </div>
  );
}

export default App;
