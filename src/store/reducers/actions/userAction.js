import axios from 'axios';

export function userAction(){
    let dataList = axios
    .get('http://localhost:3005/users')
    .then((response)=>{
     return response.data;
    }).catch((error)=>{
        console.log(error);
    });
    return{
        type: "USER-LIST",
        payload: dataList,
            
    };
     
}