import React from 'react';

export default function Registration() {
    const handleNavigate = () => {
        window.location.href= '/ISesion'
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
            <div className="flex w-3/4 max-w-4xl shadow-lg">
                <div className="flex flex-col justify-center items-center bg-Ises text-white w-1/2 p-8 rounded-tl-lg rounded-bl-lg">
                    <h1 className="text-3xl font-bold mb-4">¡Bienvenido!</h1>
                    <p className="mb-4">Inicia sesion con tu cuenta</p>
                    <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full w-40" onClick={handleNavigate}>Iniciar sesion</button>
                </div>
                {/* Registration Form */}
                <div className="flex flex-col justify-center items-center bg-white w-1/2 p-8 rounded-tr-lg rounded-br-lg">
                    <h1 className="text-2xl font-bold mb-4">Crea una cuenta</h1>
                    <div className="flex space-x-4 mb-5">
                        <p className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">F</p>
                        <p className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">G</p>
                        <p className="bg-blue-400 text-white w-10 h-10 flex items-center justify-center rounded-full">T</p>
                    </div>
                    <p className="text-lg font-medium mb-5 text-grisIS">O usa tu email para el registro</p>
                    <input type="text" placeholder="Email" className="w-4/5 h-12 border border-gray-300 rounded-lg px-4 mb-4"/>
                    <input type="password" placeholder="Password" className="w-4/5 h-12 border border-gray-300 rounded-lg px-4 mb-4"/>
                    <button className="w-3/5 h-12 bg-botonSes text-white rounded-lg mt-5">Registrarse</button>
                </div>
                
            </div>
        </div>
    );
}
