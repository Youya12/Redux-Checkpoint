import { useDispatch } from 'react-redux';
import { toggleTask, removeTask, editTask } from '../redux/taskSlice';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', description);
    if (newDescription) {
      dispatch(editTask({ id, description: newDescription }));
    }
  };

  const handleRemove = () => {
    dispatch(removeTask(id));
  };

  return (
    <div className='myCheckbox'>
      <input className='check' type="checkbox" checked={isDone} onChange={handleToggle}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {description}
      </span>
      <button className='edit' onClick={handleEdit}>Edit</button>
      <button className='Remove' onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Task;
