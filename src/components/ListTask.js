import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks);
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not') return !task.isDone;
    return true;
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default ListTask;
