import './App.css';
import ListTask from './components/listTask.jsx'

function App() {
  return (
    <div className="task-app">
        <div className='name-app'>
            <h1>To-Do App</h1>
        </div>
        <div className='task-list'>
            <h1>My Tasks</h1>
          <ListTask />
        </div>
    </div>
  );
}

export default App;
