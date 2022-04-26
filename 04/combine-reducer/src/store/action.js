// ACTIONS
export const ACT_ADD_TASK = 'ACT_ADD_TODO'
export const ACT_DELETE_ID = 'ACT_DELETE_ID'
export const ACT_EDIT_TASK = 'ACT_EDIT_TASK'


export const actAddTask = (id, name) => {
    return{
        type : ACT_ADD_TASK,
        data : {
            id,
            name
        }      
    }
}

export const actDeleteId = (id) => {
    return{
        type : ACT_DELETE_ID,
        data : {
            id,
        }      
    }
}

export const actEditTask = (id, name) => {
    return{
        type : ACT_EDIT_TASK,
        data : {
            id,
            name
        }      
    }
}