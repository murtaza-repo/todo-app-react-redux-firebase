import React from 'react';
import AddTask from '../tasks/AddTask';
import TaskList from '../tasks/TaskList';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = ({ uid }) => {
    if(uid){
        return ( 
            <div className="container text-white">
                <h4 className="mt-5 text-center lead display-4">Dashboard</h4>
                <AddTask />
                <TaskList />
            </div>
        );
    }
    else{
        return <Redirect exact to="/signin" />
    }
    
}

const mapStateToProps = state => {
let uid = state.firebase.auth.uid;
    return {
      uid
    }
}
 
export default connect(mapStateToProps)(Dashboard);