export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-red-500">Airbnb</h1>
        <div className="space-x-6">
            <a href="#" className="hover:text-red-500">Home</a>
            <a href="#" className="hover:text-red-500">About</a>
            <a href="#" className="hover:text-red-500">Login</a>
        </div>
        </nav>
    )
}
