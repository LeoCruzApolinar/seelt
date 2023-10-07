import React, { useEffect, useRef, useState } from 'react';
import shaka from 'shaka-player';

const MediaPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const [tracks, setTracks] = useState([]);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const newPlayer = new shaka.Player(videoRef.current);
    setPlayer(newPlayer);

    newPlayer.load(url).then(() => {
      console.log('Video exitoso');
      const availableTracks = newPlayer.getVariantTracks();
      setTracks(availableTracks);
    }).catch(error => {
      console.error('Error', error.code, 'object', error);
    });

    return () => {
      newPlayer.unload();
    };
  }, [url]);

  const changeQuality = (value) => {
    if (value === 'auto') {
      if (player) {
        player.configure({ abr: { enabled: true } });
      }
    } else {
      const trackId = Number(value);
      const track = tracks.find(t => t.id === trackId);
      if (track && player) {
        player.configure({ abr: { enabled: false } });
        player.selectVariantTrack(track);
      }
    }
  };



  return (
    <div>
      <video ref={videoRef} width="640" controls></video>
      <select onChange={(e) => changeQuality(e.target.value)}>
        <option value="auto">Auto</option>
        {tracks.length > 0 ? tracks.map(track => (
          <option key={track.id} value={track.id}>
            {`${track.height}p`}
          </option>
        )) : <option>No data</option>}
      </select>
    </div>
  );
};

export default MediaPlayer;
