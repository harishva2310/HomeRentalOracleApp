import React from "react"

export const ToDoRowItem: React.FC<{
    rowNum:number,
    rowDesc:string,
    rowAssigned:string, 
    deleteTask: Function
}> = (props) =>{
    
    return(
        <tr >
            <th scope='row' onClick={() => props.deleteTask(props.rowNum)}>{props.rowNum}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}
//export default ToDoRowItem