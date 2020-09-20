import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const TaskList = ({ tasks }) => {
    return ( 
        <div className="container">
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tasks</th>
                        <th scope="col">Added On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks && tasks.map(task => <Task task={task} key={task.id} />) }
                </tbody>
            </table>
        </div>
     );
}
 
const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks
    // uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
    //   where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(TaskList);