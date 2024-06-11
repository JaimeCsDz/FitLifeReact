import backImg from '../assets/img/hero.png';
import Card from './card';
import Image from '../assets/img/card1.jpg'
import Image2 from '../assets/img/card2.jpg'
import Image3 from '../assets/img/card3.webp'

const Hero = () => {
    const handleNavigateToISesion = () => {
        window.location.href= '/ISesion'
    };
    return (
        <>
        <div
        style={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%'
        }}
        className="flex flex-col items-center justify-center mb-4"
        >
        <div className="text-white text-center mb-8">
            <h1 className="text-5xl font-bold">Entrena y aprende</h1>
            <p className="text-2">Ir al gimnasio nunca había sido tan fácil.</p>
        </div>
        <button className='border border-white h-12 w-60 rounded-xl text-white' onClick={handleNavigateToISesion}>Empieza ahora</button>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-3xl text font-sans bottom-5 mb-4'>Nuestros programas</h1>
            <p className=''>Regístrate ahora y obtén todos los beneficios que tenemos para tí.</p>
            <p>Vive la experiencia de entrenar con FitLife a la hora que quieras.</p>
        </div>
        <div className="flex justify-center items-center mt-6">
            <Card
            style={{backgrounColor:'black'}}
            image={Image}
            title="Fortalece tu cuerpo"
            />
            <Card
            image={Image2}
            title="Define tus músculos"
            />
            <Card
            image={Image3}
            title="Lleva un control"
            />
        </div>
        <div className='ml-20 mt-6 mb-8'>
            <h1 className='font-bold justify-start text-4xl'>Beneficios</h1>
            <p className='text-custom font-bold'>Obten acceso ilimitado a un amplio catalogo de rutinas y </p>
            <p className='text-custom font-bold'>programas de ejercicios para que entrenes como y cuando</p>
            <p className='text-custom font-bold'> quieras...</p>
        </div>
        <hr className='border border-black w-11/12 mx-auto' />
        <div className='flex flex-row justify-center items-center mt-6 m-6 mb-8'>
            <div className='flex flex-col items-center  justify-center w-1/4'>
                <h1 className='font-bold text-2xl'>Acceso ilimitado</h1>
                <p className='text-custom font-bold'>Disfruta más de 1,000 workouts y programas ilimitados.</p>
            </div>
            <div className='flex flex-col items-center w-1/4'>
                <h1 className='font-bold text-2xl'>Contenido original</h1>
                <p className='text-custom font-bold'>Acceso exclusivo FitLife con las mejores rutinas con maquinas de gimnasio en español</p>
            </div>
            <div className='flex flex-col items-center w-1/4'>
                <h1 className='font-bold text-2xl '>Lleva tu entrenamiento contigo</h1>
                <p className='text-custom font-bold'>Ve tus clases donde sea con acceso móvil vía Android, o web.</p>
            </div>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-3xl text font-sans bottom-5 mb-4'>Nuestro planes de suscripcion</h1>
        </div>
        </>
    );
}
export default Hero;
