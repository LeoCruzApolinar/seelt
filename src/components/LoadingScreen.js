import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.834) url("https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif") center no-repeat;
  z-index: 100;
`;

function LoadingScreen() {
  return (
    <LoaderContainer>
      {/* Contenido opcional, como un mensaje de carga */}
    </LoaderContainer>
  );
}

export default LoadingScreen;
