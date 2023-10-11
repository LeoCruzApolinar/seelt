import React from 'react';
import logo from '../../images/logoS.svg';
import Input from '../../components/input';
import { useState } from 'react';

const FullScreenCentered = ({ className }) => (
  <div className={`fixed w-full h-full flex flex-col justify-center items-center ${className}`}>
  </div>
);

const inputFields = [
  { label: 'Nombre', inputType: 'text', name: 'nombre' },
  { label: 'Apellido', inputType: 'text', name: 'apellido' },
  { label: 'Usuario', inputType: 'text', name: 'username' },
  { label: 'Correo electronico', inputType: 'text', name: 'email' },
  {
    label: 'Pais',
    inputType: 'select',
    name: 'selectPais',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
  },
  {
    label: 'Idioma',
    inputType: 'select',
    name: 'selectIdioma',
    options: [
      { value: 'optionA', label: 'Option A' },
      { value: 'optionB', label: 'Option B' },
    ],
  },
  { label: 'Fecha de Nacimiento', inputType: 'date', name: 'fechaDeNacimiento' },
  { label: 'Foto de perfil', inputType: 'foto', name: 'foto' },
];

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
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };



  return (
    <>
      <FullScreenCentered className="bg-back-movies -z-20" />
      <FullScreenCentered className="bg-black opacity-90 -z-10" />
      <div className="relative z-50 w-full h-full flex flex-col justify-center items-center space-y-10">
        <img className="w-44 mt-96 sm:mt-10" src={logo} alt="Logo" />
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
            />
          ))}
          <div className="col-span-full">
            <button type="submit" className="bg-[#0196eb] text-xl w-full text-white py-2 px-8 rounded-lg mt-5">Acceder</button>
            <p className="text-white text-sm underline cursor-pointer mt-2">Ya tengo cuenta!</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
