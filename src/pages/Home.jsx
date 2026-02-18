import { useState, useEffect } from 'react';

function Home() {
    const [advice, setAdvice] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchAdvice = () => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
            .then((res) => res.json())
            .then((data) => {
                setAdvice(data.slip.advice);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching advice:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Task Dashboard</h2>
            <p className="text-gray-600 mb-8">Your personal productivity companion</p>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">💡 Random Advice</h3>
                {loading ? (
                    <p className="text-gray-500 animate-pulse">Loading advice...</p>
                ) : (
                    <p className="text-xl text-gray-700 italic">"{advice}"</p>
                )}
                <button
                    onClick={fetchAdvice}
                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                >
                    Get New Advice
                </button>
            </div>
        </div>
    );
}

export default Home;
