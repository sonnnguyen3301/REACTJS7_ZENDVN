import { ACT_ADD_TASK, ACT_DELETE_ID, ACT_EDIT_TASK } from "../action";

const initState = {
    data : [{
        id: '1',
        name: 'lau nhà'
    },
    {
        id: '2',
        name: 'quét nhà'
    },
    {
        id: '3',
        name: 'dọn nhà'
    }
]
}
const reducer = (state = initState, action)=>{
    
    switch (action.type){
        case ACT_ADD_TASK:
            return{
                ...state,
                data : [
                    ...state.data,
                    action.data
                ]
            }
        case ACT_DELETE_ID:
            return{
                ...state,
                data : state.data.filter(dataItem =>{
                    return dataItem.id !== action.data.id
                })
            }
        case ACT_EDIT_TASK:
            // console.log('action.data.name',action.data.name);
            // let newEditArray = Object.assign([...state.data])
            // console.log('newEditArray[objIndex]',newEditArray[2].name);
            // 
            // console.log('objIndex',objIndex);
            // newEditArray[objIndex].name = action.data.name
            return{
                ...state,
                data : state.data.filter(dataItem =>{
                    // let dataEdit = {...state,...state.data}
                    let objIndex = state.data.findIndex((dataItem => dataItem.id === action.data.id))
                    // if(dataItem.id === action.data.id)
                    // {
                    //     dataItem.name = action.data.name
                    // }
                    return {...state, data:[...state.data,state.data[objIndex] = action.data]}
                })
            }
        default:
            return state
    }

}

export default reducer;


