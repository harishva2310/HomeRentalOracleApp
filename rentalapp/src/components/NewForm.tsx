import React, {useState} from "react";
export const NewForm: React.FC<{addTask:Function}> =
 (props)=>{

const [description, setDescription] = useState('');
const [assigned, setAssigned] = useState('');

const submitNewTask = () =>{
    if(description!== '' && assigned!==''){
        props.addTask(description,assigned)
        setAssigned('')
        setDescription('')
    }
}

/*const descriptionChange = (event) =>{
    console.log('description',event.target.value);
    setDescription(event.target.value)
}

const assignedChange = (event) =>{
    console.log('assigned',event.target.value);
    setAssigned(event.target.value)
}*/

    return(
        <div className="mt-5">
            <form onSubmit={(e) => { e.preventDefault(); submitNewTask(); }}>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={e => setAssigned(e.target.value)} value={assigned}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="textarea" className="form-control" required onChange={e =>setDescription(e.target.value)} value={description}></input>
                </div>
                <button type="submit" className="btn btn-primary mt-3" >Add Task</button>
            </form>
        </div>
    )
}
//export default NewForm