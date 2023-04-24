const initialData={
    usersdata:[]
}

const basicReducer=(storeData=initialData,action)=>{
    if(action.type==="users"){
        
        return{
            ...storeData,
            usersdata:action.payload
            // usersdata:[...storeData.usersdata, action.payload]
        };
}
}
export default basicReducer;