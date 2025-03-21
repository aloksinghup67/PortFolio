import React, { useState, useRef } from 'react';
import './Unprofessional.css';
import { Link } from 'react-router-dom';


// Importing images and audio from src/assets
import sky1 from '../assets/sky1.jpg';
import sky2 from '../assets/sky2.jpg';
import sky3 from '../assets/sky3.jpg';
import sky4 from '../assets/sky4.jpg';

import farcry5 from '../assets/farcry 5.jpg';
import gta5 from '../assets/gta 5.jpg';

import october from '../assets/october.jpg';
import shawshank from '../assets/shawshank redemption.jpg';

import Song1 from '../assets/Song1.m4a';

const UnprofessionalMe = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <>
    <Link to="/" className="back-button">Home</Link>
    <div className="unprofessional-me">
      <div><h1 style={{ color: '#E50914' }}>Some Unprofessional things</h1><br/></div>
     
      <section className="photography">
        <h2>Taking random sky images 😂</h2><br/>
        <div className="photo-gallery">
          <img src={sky1} alt="Sky 1" />
          <img src={sky2} alt="Sky 2" />
          <img src={sky3} alt="Sky 3" />
          <img src={sky4} alt="Sky 4" />
        </div>
      </section>

     
      <section className="gaming">
        <h2>Playing Games</h2><br/>
        <div className="gaming-gallery">
          <img src={farcry5} alt="Far Cry 5" />
          <img src={gta5} alt="GTA 5" />
        </div>
      </section>

     
<section className="cringe-choir">
  <h2>🙊 Cringe Choir by me</h2><br/>
  <div className="song-card">
   
    <div className="song-card-bg"></div>

    <div className="song-controls">
      <button onClick={togglePlayPause} className="play-pause-btn">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      />
    </div>
    
    <audio
      ref={audioRef}
      src={Song1}
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleLoadedMetadata}
    />
  </div>
</section>

      <section className="movies">
        <h2>Watching Movies</h2><br/>
        <div className="movies-gallery">
          <img src={october} alt="October" />
          <img src={shawshank} alt="Shawshank Redemption" />
        </div>
      </section>
    </div>
    </>
  );
};

export default UnprofessionalMe;
