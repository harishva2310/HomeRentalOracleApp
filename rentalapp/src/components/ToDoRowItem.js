function ToDoRowItem () {
    const rowNum=1;
    const rowDesc='Bang';
    const rowAssigned='Gauri';
    return(
        <tr>
            <th scope='row'>{rowNum}</th>
            <td>{rowDesc}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}
export default ToDoRowItem