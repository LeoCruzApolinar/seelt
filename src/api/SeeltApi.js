import axios from 'axios';

export function ObtenerPaises() {
  return axios.get("https://seeltapi20231013140255.azurewebsites.net/api/General/ObtenerPaises").then((response) => {
    return response.data;
  });
}

export function ObtenerIdiomas() {
  return axios.get("https://seeltapi20231013140255.azurewebsites.net/api/General/ObtenerIdiomas").then((response) => {
    return response.data;
  });
}

export function VerificarUserName(username) {
  return axios.get(`https://seeltapi20231013140255.azurewebsites.net/api/General/VerificarUserName?username=${username}`)
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

  return axios.post('https://seeltapi20231013140255.azurewebsites.net/RegistrarUsuario', formData)
    .then((response) => {
      return response.data; // Esto podría ser 'true' o 'false' según la respuesta de tu controlador.
    })
    .catch((error) => {
      // Manejo de errores aquí.
      console.error(error);
    });
}

export function LogDeUsuario(UID) {
  return axios.post(`https://seeltapi20231013140255.azurewebsites.net/LogUsuario?UID=${UID}`)
    .then((response) => {
      return response.data;
    });
}

export function ObtenerDatosUsuario(UID) {
  return axios.get(`https://seeltapi20231013140255.azurewebsites.net/ObtenerDatosUsuario?UID=${UID}`)
    .then((response) => {
      return response.data;
    });
}


export function ObtenerCanalPorUID(UID) {
  return axios.get(`https://seeltapi20231013140255.azurewebsites.net/ObtenerCanalPorIdUsuario?UID=${UID}`)
    .then((response) => {
      return response.data;
    });
}

export function GetTipoDeVideoAsJSON() {
  return axios.get(`https://seeltapi20231013140255.azurewebsites.net/api/General/GetTipoDeVideoAsJSON`)
    .then((response) => {
      return response.data;
    });
}

export function CrearEtiqueta(nombreCanal, nombre, color) {
  console.log(nombreCanal, nombre, color);
  return axios.post(`https://seeltapi20231013140255.azurewebsites.net/CrearEtiqueta?NombreCanal=${nombreCanal}&NombreEtiqueta=${nombre}&Color=${color}`)
  .then((response) => {
    return response.data;
  });
}


export function ProcesarSolicitudVideo(formData) {
  return axios.post("https://localhost:7156/api/Videos/ProcesarSolicitudVideoGeneral", formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // Manejo de errores aquí.
      console.error(error);
    });
}


export function procesarVideoGeneral(archivoVideo, tituloVideo, descripcion, nombreCanal, UID, urlMiniatura, tipoVideo, Etiquetas) {
  const formData = new FormData();
  formData.append('ArchivoVideo', archivoVideo);
  formData.append('TituloVideo', tituloVideo);
  formData.append('Descripcion', descripcion);
  formData.append('NombreCanal', nombreCanal);
  formData.append('UID', UID);
  formData.append('URL_Miniatura', urlMiniatura);
  formData.append('TipoVideo', tipoVideo);
  formData.append('etiquetas', Etiquetas);

  return ProcesarSolicitudVideo(formData);
}




