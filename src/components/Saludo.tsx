import React from 'react';
import Robot from '../assets/img/Animation.gif';
import Background from '../assets/img/FondoRobot1.png'; // Asegúrate de que la ruta es correcta

export default function Saludo() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative overflow-hidden">
            {/* Fondo morado con forma ondulada */}
            <div className="absolute inset-0 w-2/5 z-0">
                <img src={Background} alt="Background" className="object-cover w-full h-full bg-morado-ondulado" />
            </div>
            {/* Robot */}
            <div className="absolute left-20 top-1/2 transform -translate-y-1/2 z-10">
                <img src={Robot} alt="Robot" className="w-56 h-56" />
            </div>
            {/* Contenido principal */}
            <div className="relative flex flex-col justify-center items-start ml-auto mr-0 w-1/2 z-20 mt-9">
                <h1 className="text-6xl font-bold text-botonSes mb-2">¡Hola!</h1>
                <p className="text-2xl font-semibold text-intro mb-4">Soy tu entrenador virtual.</p>
                <p className="text-xl text-intro mb-0">
                    Antes de comenzar, tengo algunas 
                </p>
                <p className="text-xl text-intro mb-0">preguntas para diseñar un plan</p>
                <p className="text-xl text-intro mb-5">personalizado para ti.</p>
                <button className="mt-10 w-1/2 h-12 bg-botonSes text-white rounded-full">Continuar</button>
            </div>
        </div>
        );
    }