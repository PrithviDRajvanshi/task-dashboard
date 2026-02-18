import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((res) => res.json())
            .then((data) => {
                setTasks(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500 animate-pulse">Loading tasks...</p>;
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">📝 Your Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <Link key={task.id} to={`/tasks/${task.id}`}>
                        <TaskCard task={task} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Tasks;
