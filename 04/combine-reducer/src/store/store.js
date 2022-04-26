import reducer from "./reducer";
import { legacy_createStore as createStore} from 'redux'
// import { actAddTask, actDeleteId, actEditTask } from "../action";
const ACT_ADD_TASK = 'ACT_ADD_TODO'
const ACT_DELETE_ID = 'ACT_DELETE_ID'
const ACT_EDIT_TASK = 'ACT_EDIT_TASK'

const store = createStore(reducer)

export default store

// ADD TASK 

console.log('1. Trước khi dispatch action ACT_ADD_TASK',store.getState());

const actAddTask = {
    type : ACT_ADD_TASK,
    data : {
        id : '4',
        name : 'làm BT'
    }      
}


store.dispatch(actAddTask)

console.log('2. Sau khi dispatch action ACT_ADD_TASK ',store.getState());

// DELETE

console.log('3. Trước khi dispatch action ACT_DELETE_ID',store.getState());
const actDeleteId = {
    type : ACT_DELETE_ID,
    data : {
        id : '4',
    }      
}

store.dispatch(actDeleteId)

console.log('4. Sau khi dispatch action ACT_DELETE_ID ',store.getState());

// DELETE

console.log('5. Trước khi dispatch action ACT_EDIT_TASK',store.getState());
const actEditId = {
    type : ACT_EDIT_TASK,
    data : {
        id : '2',
        name : 'Ở dơ'
    }      
}

store.dispatch(actEditId)

console.log('6. Sau khi dispatch action ACT_EDIT_TASK ',store.getState());