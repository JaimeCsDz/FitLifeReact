const Card = ({ image, title }: any) => (
        <div className="relative max-w-sm overflow-hidden shadow-lg m-4 rounded-2xl">
            <img className="w-full h-64 object-cover" src={image} alt={title} />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
                <div className="font-bold text-xl">{title}</div>
            </div>
        </div>
    );
export default Card;
