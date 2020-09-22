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
      <div className="col-md-6 col-sm-12">
        <div className="card mb-3 taskCard" style={{color: "black"}}>
          <div className="card-header">
              <div className="card-title lead text-muted" style={{ display: "inline"}}>Task</div>
              <div style={{ display: "inline", float:"right"}}>
                  <Check clickListener={() => {handleCheck(task)}} checked={task.checked} />
                  <button className="btn" title="Delete a Task"><span className="material-icons text-danger" onClick={()=>{handleRemove(task)}}>delete</span></button>
              </div>
          </div>
          <div className="card-body">
            <p className="card-text">
              {task.task}
            </p>
            <small className="text-muted">Added On: {moment(task.date.toDate()).calendar()}</small>
          </div>
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