import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const ReproductorTest = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
      const url = "https://storage.googleapis.com/seelt-987cd.appspot.com/MO0RNsEq7xUlGojbS3rKsuMJaQH3/VideoTest/VideoTest_master.m3u8";
  
      axios.get(url)
        .then(response => {

          console.log(response.data);
        })
        .catch(error => {
          console.error("Error al obtener el contenido de la URL:", error);
        });
    }, []);

  return (
    <div>
           <div>
      <h1>Contenido de la URL:</h1>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>

        <ReactPlayer
      url="https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8"
      controls={true} // Mostrar controles de reproducción (pausa, volumen, etc.)
      width="100%" // Ancho del reproductor
      height="auto" // Altura del reproductor (ajusta automáticamente)
    /> 
  

   
  </div>
  )
}

export default ReproductorTest
