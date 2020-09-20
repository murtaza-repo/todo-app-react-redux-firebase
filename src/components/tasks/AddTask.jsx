import React, { Component } from 'react';
import { addTask } from '../../actions/TaskActions';
import { connect } from 'react-redux';

class AddTask extends Component {
    state = { 
        task: '',
        checked: 'false'
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        document.getElementById("addTaskForm").reset();
        console.log(this.state);
    }

    render() { 
        return ( 
            <form id="addTaskForm" className="container" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="offset-md-2 col-md-8 col-sm-12">
                        <div className="form-group mt-4">
                            <label htmlFor="task">Add a Task</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="task" placeholder="Enter task" onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Add</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    };
};
 
export default connect(null, mapDispatchToProps)(AddTask);