import logo from './logo.svg';
import './App.css';
import ToDoRowItem from './components/ToDoRowItem';
import ToDoTable from './components/ToDoTable';
import React, {useState} from 'react';
import NewForm from './components/NewForm';
function App() {
  const [todos, setTodos] = useState([
    { rowNum:1, rowDesc:'Study',rowAssigned:'React'},
    { rowNum:2, rowDesc:'Implement',rowAssigned:'Terraform'},
    { rowNum:3, rowDesc:'Develop',rowAssigned:'Application'}
  ])
  
const addTask = (description, assigned) =>{
  if (todos.length>0){
    const newTask= {
      rowNum:todos.length+1,
      rowDesc:description,
      rowAssigned:assigned
    };
    setTodos(todos => [...todos,newTask]) //destructure const[todos, setTodos] and add newTask contents to the variable 
    //console.log(todos);
  }
}

  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>
          Your To-dos
        </div>
        <div className='card-body'>
          <ToDoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTask}>Add new task</button>
          <NewForm addTask ={addTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
