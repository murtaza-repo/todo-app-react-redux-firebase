import React from 'react';
import AddTask from '../tasks/AddTask';
import TaskList from '../tasks/TaskList';

const Dashboard = () => {
    return ( 
        <div className="container text-white">
            <h4 className="mt-5 text-center lead display-4">Dashboard</h4>
            <AddTask />
            <TaskList />
        </div>
     );
}
 
export default Dashboard;