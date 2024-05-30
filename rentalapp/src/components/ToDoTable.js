import ToDoRowItem from "./ToDoRowItem"
function ToDoTable(props) {
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
                props.todos.map(todos => (
                  <ToDoRowItem
                    key={todos.rowNum} 
                    rowNum={todos.rowNum}
                    rowDesc={todos.rowDesc}
                    rowAssigned={todos.rowAssigned}
                    deleteTask={props.deleteTask}
                    
                    />
                ))
              } 
            </tbody>
        </table>
    )
}
export default ToDoTable