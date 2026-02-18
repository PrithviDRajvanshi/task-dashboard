function TaskCard({ task }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 border border-gray-200">
            <div className="flex items-start space-x-3">
                <input
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                    className="mt-1 h-4 w-4 rounded accent-blue-600"
                />
                <div className="flex-1">
                    <h3 className="text-gray-800 font-medium capitalize">{task.title}</h3>
                    <p className={`text-sm mt-1 ${task.completed ? 'text-green-600' : 'text-orange-600'}`}>
                        {task.completed ? '✅ Completed' : '⏳ Pending'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
