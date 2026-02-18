import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <h1 className="text-xl font-bold">📋 Task Dashboard</h1>
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/tasks"
                            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-200"
                        >
                            Tasks
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
