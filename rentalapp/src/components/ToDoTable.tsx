import React from "react"
import {ToDoRowItem} from "./ToDoRowItem"
export const ToDoTable : React.FC<{todos: ToDoModel[], deleteTask: Function}>=(props) =>{
    return (
        <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {
                props.todos.map(todo => (
                  <ToDoRowItem
                    key={todo.rowNum} 
                    rowNum={todo.rowNum}
                    rowDesc={todo.rowDesc}
                    rowAssigned={todo.rowAssigned}
                    deleteTask={props.deleteTask}
                    
                    />
                ))
              } 
            </tbody>
        </table>
    )
}
//export default ToDoTable