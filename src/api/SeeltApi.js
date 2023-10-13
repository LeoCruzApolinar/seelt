import axios from 'axios';

export function ObtenerPaises() {
  return axios.get("https://localhost:7092/api/General/ObtenerPaises").then((response) => {
    return response.data;
  });
}

export function ObtenerIdiomas() {
  return axios.get("https://localhost:7092/api/General/ObtenerIdiomas").then((response) => {
    return response.data;
  });
}

export function VerificarUserName(username) {
  return axios.get(`https://localhost:7092/api/General/VerificarUserName?username=${username}`)
    .then((response) => {
      return response.data;
    });
}

export function RegistrarUsuario(usuario) {
  const formData = new FormData();
  formData.append('ID_PAIS', usuario.ID_PAIS);
  formData.append('ID_IDIOMA', usuario.ID_IDIOMA);
  formData.append('ID_ROL', usuario.ID_ROL);
  formData.append('UID', usuario.UID);
  formData.append('NOMBRES', usuario.NOMBRES);
  formData.append('APELLIDOS', usuario.APELLIDOS);
  formData.append('DATE_OF_BIRTH', usuario.DATE_OF_BIRTH);
  formData.append('USERNAME', usuario.USERNAME);
  formData.append('FOTO', usuario.FOTO);

  return axios.post('https://localhost:7092/RegistrarUsuario', formData)
    .then((response) => {
      return response.data; // Esto podría ser 'true' o 'false' según la respuesta de tu controlador.
    })
    .catch((error) => {
      // Manejo de errores aquí.
      console.error(error);
    });
}

export function LogDeUsuario(UID) {
  return axios.post(`https://localhost:7092/LogUsuario?UID=${UID}`)
    .then((response) => {
      return response.data;
    });
}

export function ObtenerDatosUsuario(UID) {
  return axios.get(`https://localhost:7092/ObtenerDatosUsuario?UID=${UID}`)
    .then((response) => {
      return response.data;
    });
}


export function ObtenerCanalPorUID(UID) {
  return axios.get(`https://localhost:7092/ObtenerCanalPorIdUsuario?UID=${UID}`)
    .then((response) => {
      return response.data;
    });
}
