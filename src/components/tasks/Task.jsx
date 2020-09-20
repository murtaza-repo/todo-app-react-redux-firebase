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

      <div className="card mb-3" style={{color: "black"}}>
        <div className="card-header">
            <div className="card-title lead text-muted" style={{ display: "inline"}}>Task</div>
            <div style={{ display: "inline", float:"right"}}>
                <span className="material-icons text-danger" onClick={()=>{handleRemove(task)}} style={{cursor: "pointer"}}>delete</span>
            </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            {task.task}
          </p>
        </div>
        <div className="card-footer">
            <div className="text-muted" style={{ display: "inline"}}>Added On: {moment(task.date.toDate()).calendar()}</div>
            <div style={{ display: "inline", float:"right"}}> <Check onClick={() => {handleCheck(task)}} checked={task.checked} /></div>    
        </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeTask: task => dispatch(removeTask(task)),
        toggleChecked: task => dispatch(toggleChecked(task))
    }
}
 
export default connect(null, mapDispatchToProps)(Task);