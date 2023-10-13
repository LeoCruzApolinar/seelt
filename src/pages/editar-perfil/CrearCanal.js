import React from 'react';
import styles from './CrearCanal.module.css';
import Input from '../../components/input';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import WebPageEmbed from '../../components/WebPageEmbed ';

const CrearCanal = () => {
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.subContenedor}>
                <WebPageEmbed/>
                </div>
            </div>
        </div>
    );
};

export default CrearCanal;
