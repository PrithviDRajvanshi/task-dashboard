import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function TaskDetail() {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Task not found');
                return res.json();
            })
            .then((data) => {
                setTask(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500 animate-pulse">Loading task details...</p>;
    }

    if (error) {
        return (
            <div className="text-center">
                <p className="text-red-500 mb-4">Error: {error}</p>
                <Link to="/tasks" className="text-blue-600 hover:underline">
                    ← Back to Tasks
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <Link
                to="/tasks"
                className="text-blue-600 hover:underline mb-6 inline-block"
            >
                ← Back to Tasks
            </Link>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">{task.title}</h2>

                <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-gray-600 font-medium">Task ID:</span>
                        <span className="text-gray-800">{task.id}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-gray-600 font-medium">User ID:</span>
                        <span className="text-gray-800">{task.userId}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Status:</span>
                        <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${task.completed
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-orange-100 text-orange-700'
                                }`}
                        >
                            {task.completed ? '✅ Completed' : '⏳ Pending'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskDetail;
