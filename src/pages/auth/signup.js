import React from 'react';
import logo from '../../images/logoS.svg';
import Input from '../../components/input';
import { useState, useEffect } from 'react';
import { ObtenerPaises, ObtenerIdiomas, VerificarUserName, RegistrarUsuario } from '../../api/SeeltApi';
import FirebaseConfig from '../../api/firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const FullScreenCentered = ({ className }) => (
  <div className={`fixed w-full h-full flex flex-col justify-center items-center ${className}`}>
  </div>
);

const auth = getAuth(FirebaseConfig);

const Signup = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    username: '',
    email: '',
    selectPais: null,
    selectIdioma: null,
    fechaDeNacimiento: '',
    foto: null,
    pass: '',
  });

  const navigate = useNavigate();

  const NavegarLgin = () => {
    navigate('/login'); // Redirige al usuario a la página de inicio de sesión
  };

  const [listaDePaises, setListaDePaises] = useState([]);
  const [listaDeIdiomas, setListaDeIdiomas] = useState([]);

  useEffect(() => {
    ObtenerPaises()
      .then(data => {

        setListaDePaises(data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  useEffect(() => {
    ObtenerIdiomas()
      .then(data => {
        setListaDeIdiomas(data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  const inputFields = [
    { label: 'Nombre', inputType: 'text', name: 'nombre' },
    { label: 'Apellido', inputType: 'text', name: 'apellido' },
    { label: 'Usuario', inputType: 'text', name: 'username' },
    { label: 'Correo electronico', inputType: 'text', name: 'email' },
    { label: 'Contraseña', inputType: 'password', name: 'password' },
    {
      label: 'Pais',
      inputType: 'select',
      name: 'selectPais',
      options: listaDePaises.map((pais) => ({
        value: pais.ID.toString(), // Convierte ID a cadena
        label: pais.NOMBRE,
      })),
    },
    {
      label: 'Idioma',
      inputType: 'select',
      name: 'selectIdioma',
      options: listaDeIdiomas.map((pais) => ({
        value: pais.ID.toString(), // Convierte ID a cadena
        label: pais.NOMBRE,
      })),
    },
    { label: 'Fecha de Nacimiento', inputType: 'date', name: 'fechaDeNacimiento' },
    { label: 'Foto de perfil', inputType: 'foto', name: 'foto', className: 'col-span-2' },
  ];


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const exists = await VerificarUserName(formData.username);

      if (exists) {
        console.log('El nombre de usuario ya existe');
      } else {
        console.log(formData)
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log(userCredential);
        const uid = userCredential.user.uid;

        const nuevoUsuario = {
          ID_PAIS: formData.selectPais['value'],
          ID_IDIOMA: formData.selectIdioma['value'],
          UID: uid,
          NOMBRES: formData.nombre,
          APELLIDOS: formData.apellido,
          DATE_OF_BIRTH: formData.fechaDeNacimiento,
          USERNAME: formData.username,
          FOTO: formData.foto,
        };

        const registroExitoso = await RegistrarUsuario(nuevoUsuario);

        if (registroExitoso) {
          console.log('Usuario registrado exitosamente.');
          navigate('/');
        } else {
          console.error('Error en el registro de usuario.');
        }
      }
    } catch (error) {
      console.error('Error al registrar al usuario:', error);
      alert("Verifique el correo o la contraseña");
    }
  };

  const NavegarHome = () => {
    navigate('/');
  };


  return (
    <>
      <FullScreenCentered className="bg-back-movies z-0" />
      <FullScreenCentered className="bg-black opacity-90 z-20" />
      <div className="relative z-50 w-full h-full flex flex-col justify-center items-center space-y-10">
        <img onClick={NavegarHome}  className="w-44 mt-96 sm:mt-10" src={logo} alt="Logo" />
        <h1 className="text-white text-5xl">Crear cuenta</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-3/4 md:w-1/2 lg:w-1/3">
          {inputFields.map(field => (
            <Input
              key={field.name}
              label={field.label}
              inputType={field.inputType}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              options={field.options}
              className={field.className}
            />
          ))}
          <div className="col-span-full">
            <button type="submit" className="bg-[#0196eb] text-xl w-full text-white py-2 px-8 rounded-lg mt-5">Acceder</button>
            <p onClick={NavegarLgin} className="text-white text-sm underline cursor-pointer mt-2 hover:text-[#0196eb]">Ya tengo cuenta!</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
