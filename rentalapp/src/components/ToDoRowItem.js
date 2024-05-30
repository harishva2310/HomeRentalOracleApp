function ToDoRowItem (props) {
    
    return(
        <tr>
            <th scope='row'>{props.rowNum}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}
export default ToDoRowItem