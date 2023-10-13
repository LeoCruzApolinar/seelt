import React from 'react';
import Perfil from '../pages/editar-perfil/perfil';

const WebPageEmbed = ({ channelData }) => {
  return (
    <div className='h-[640px] w-full overflow-y-scroll bg-[#0d0d0d]'>
      {/* Aquí, el iframe mostrará la página web que deseas incrustar. Ajusta la URL según tus necesidades. */}
      <Perfil
        isPreviewMode={true}
        channelData={channelData}
        videoList={[/*...datos del formulario...*/]}
      //... otras props
      />

    </div>
  );
};

export default WebPageEmbed;
