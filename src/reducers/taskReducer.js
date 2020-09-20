import { toast } from 'react-toastify';

const initState = {};

const taskReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            toast.success("Task added...")
            return state;

        case 'ADD_TASK_ERR':
            toast.error("An error occurred!")
            return state;

        case "REMOVE_TASK":
            toast.warn("A task was removed...");
            return state;

        case "REMOVE_TASK_ERR":
            toast.error("A task remove error occured!");
            return state;
        
        case "TOGGLE_CHECKED":
            toast.info("A task status changed...");
            return state;
        
        case "TOGGLE_CHECKED_ERR": 
            toast.error("A task status change error occured...");
            return state;

        default:
            return state;
    }
}
 
export default taskReducer;