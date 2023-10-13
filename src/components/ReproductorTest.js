import React, { useEffect, useRef } from 'react';
import 'shaka-player/dist/controls.css';
import shaka from 'shaka-player/dist/shaka-player.ui.js';

function VideoPlayer({ url }) {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    if (!shaka.Player.isBrowserSupported()) {
      console.error('Browser not supported!');
      return;
    }

    // Install polyfills
    shaka.polyfill.installAll();

    // Create a new player
    const player = new shaka.Player(videoRef.current);

    // Create UI
    const ui = new shaka.ui.Overlay(player, videoContainerRef.current, videoRef.current);

    // Configure UI - add the 'quality' control
    const config = {
      'controlPanelElements': ['play_pause', 'mute', 'volume', 'time_and_duration', 'fullscreen', 'quality'],
    };
    ui.configure(config);

    // Listen for errors
    player.addEventListener('error', onErrorEvent);

    // Load the manifest
    player.load(url).catch(onError);

    return () => {
      ui.destroy();
      player.destroy();
    };

    function onErrorEvent(event) {
      onError(event.detail);
    }

    function onError(error) {
      console.error('Error code', error.code, 'object', error);
    }

  }, [url]);

  return (
    <div ref={videoContainerRef} className=" w-full">
      <video ref={videoRef} width="100%"></video>
    </div>
  );
}

export default VideoPlayer;
