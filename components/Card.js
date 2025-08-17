export default function Card({ title, img }) {
    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition duration-300">
            <img 
                src={img} 
                alt={title} 
                className="w-full h-40 object-cover" 
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
        </div>
    );
}
