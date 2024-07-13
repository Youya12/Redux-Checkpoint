import { useState } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import "./App.css"

const App = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className='todoList'>
      <h1>Add To-Do :</h1>
      <AddTask />
      <div>
        <h3>Filter By :</h3>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      <ListTask filter={filter} />
    </div>
  );
};

export default App;
