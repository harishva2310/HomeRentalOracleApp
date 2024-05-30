import logo from './logo.svg';
import './App.css';
import ToDoRowItem from './components/ToDoRowItem';
import ToDoTable from './components/ToDoTable';
import React, {useState} from 'react';
import NewForm from './components/NewForm';
function App() {
  //state of form display
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNum:1, rowDesc:'Study',rowAssigned:'React'},
    { rowNum:2, rowDesc:'Implement',rowAssigned:'Terraform'},
    { rowNum:3, rowDesc:'Develop',rowAssigned:'Application'}
  ])
  
const addTask = (description, assigned) =>{
  let rowNum=0;
  
  if (todos.length>0){
    rowNum=todos[todos.length-1].rowNum+1;
  }
  else{
    rowNum=1;
  }
    
    const newTask= {
      rowNum:rowNum,
      rowDesc:description,
      rowAssigned:assigned
    };
    setTodos(todos => [...todos,newTask]) //destructure const[todos, setTodos] and add newTask contents to the variable 
    //console.log(todos);
    
}

const deleteTask =(deleteTaskRRowNumber)=> {
  let filtered =todos.filter(function (value){
    return value.rowNum !== deleteTaskRRowNumber;
  });
  setTodos(filtered);
}

  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>
          Your To-dos
        </div>
        <div className='card-body'>
          <ToDoTable todos={todos} deleteTask={deleteTask}/>
          <button className='btn btn-primary' onClick={() => setShowForm(!showForm)}>Add new task</button>
          {showForm &&
          <NewForm addTask ={addTask}/>
}
        </div>
      </div>
    </div>
  );
}

export default App;
