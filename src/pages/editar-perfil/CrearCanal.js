import React from 'react';
import styles from './CrearCanal.module.css';
import Input from '../../components/input';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import WebPageEmbed from '../../components/WebPageEmbed ';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const CrearCanal = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        Descripcion: '',
        fotoP: null,
        fotoL: null,
    });

    const inputFields = [
        { label: 'Nombre', inputType: 'text', name: 'nombre' },
        { label: 'Descripcion', inputType: 'text', name: 'Descripcion' },
        { label: 'Foto de portada', inputType: 'foto', name: 'fotoP', className: 'col-span-2' },
        { label: 'Logo', inputType: 'foto', name: 'fotoL', className: 'col-span-2' },
    ];

    const [shouldSubmit, setShouldSubmit] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        if (!shouldSubmit) {
            return;
        }

        // Create FormData for HTTP request
        const httpFormData = new FormData();
        httpFormData.append('UID', user.uid);
        httpFormData.append('Nombre', formData.nombre);
        httpFormData.append('Descripcion', formData.Descripcion);
        httpFormData.append('FotoPortada', formData.fotoP);
        httpFormData.append('FotoLogo', formData.fotoL);

        // Perform POST request with fetch
        fetch('https://seeltapi20231013140255.azurewebsites.net/RegistrarCanal', {
            method: 'POST',
            body: httpFormData
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Canal creado:', data);
                setShouldSubmit(false);
                if (data === true) {
                    navigate(`/perfil/${user.uid}`);
                } else {
                    console.error('Error: Canal no pudo ser creado');
                }

            })
            .catch((error) => {
                console.error('Error creando el canal:', error);
                setShouldSubmit(false);
            });

    }, [shouldSubmit, formData, user.uid]);




    const handleInputChange = (event) => {
        const { name, type } = event.target;
        let value;

        if (type === 'file') {
            value = event.target.files[0];
        } else {
            value = event.target.value;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShouldSubmit(true);
    };


    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.left}>
                <div class={styles.waviy}>
                    <span style={{ '--i': 1 }}>C</span>
                    <span style={{ '--i': 2 }}>R</span>
                    <span style={{ '--i': 3 }}>E</span>
                    <span style={{ '--i': 4 }}>A</span>
                    <span style={{ '--i': 5 }}>&nbsp;</span> {/* Espacio */}
                    <span style={{ '--i': 6 }}>T</span>
                    <span style={{ '--i': 7 }}>U</span>
                    <span style={{ '--i': 8 }}>&nbsp;</span> {/* Espacio */}
                    <span style={{ '--i': 9 }}>C</span>
                    <span style={{ '--i': 10 }}>A</span>
                    <span style={{ '--i': 11 }}>N</span>
                    <span style={{ '--i': 12 }}>A</span>
                    <span style={{ '--i': 13 }}>L</span>
                </div>

                <div className={styles.ContenedorInput}>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="bg-[#FF7043] text-xl w-full text-white py-4 px-8 rounded-lg mt-10">Crear</button>
                    </form>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.subContenedor}>
                    <WebPageEmbed channelData={formData} />
                </div>
            </div>
        </div>
    );
};

export default CrearCanal;
