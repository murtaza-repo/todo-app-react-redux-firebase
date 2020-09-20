import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeTask, toggleChecked } from '../../actions/TaskActions';
import Check from './Check';

const Task = ({task, removeTask, toggleChecked}) => {

    const handleRemove = task => {
        removeTask(task);
    }

    const handleCheck = (task) => {
        toggleChecked(task);
    };

    return ( 
        <tr>
            <td>{task.task}</td>
            <td>{moment(task.date.toDate()).calendar()}</td>
            <td><Check onClick={() => {handleCheck(task)}} checked={task.checked} /></td>
            <td><span className="material-icons text-danger" onClick={()=>{handleRemove(task)}} style={{cursor: "pointer"}}>delete</span></td>
        </tr>
     );
}

const mapDispatchToProps = dispatch => {
    return {
        removeTask: task => dispatch(removeTask(task)),
        toggleChecked: task => dispatch(toggleChecked(task))
    }
}
 
export default connect(null, mapDispatchToProps)(Task);