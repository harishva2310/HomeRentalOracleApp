function ToDoRowItem (props) {
    
    return(
        <tr >
            <th scope='row' onClick={() => props.deleteTask(props.rowNum)}>{props.rowNum}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}
export default ToDoRowItem