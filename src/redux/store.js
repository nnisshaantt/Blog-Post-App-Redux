import {createStore, combineReducers} from 'redux';
import userReducer from './reducer/userReducer';
import studentReducer from './reducer/studentReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const mainReducer = combineReducers({
    user: userReducer,
    student:studentReducer
});

let commonData = "";
if(localStorage.getItem("BlogStorage"))
{
    commonData = JSON.parse(localStorage.getItem("BlogStorage"));
}
else{
    commonData = {
        user:{
            items:[
                {
                    id : 1,title : 'Default Blog',category:'Sports',content:'Lorem Ipsum',isLiked:false
                }
            ]
        }
    }

    localStorage.setItem("BlogStorage",JSON.stringify(commonData));
}


const store = createStore(mainReducer,commonData,composeWithDevTools());
//window.__redux_devtools_extension__ && window.__redux_devtools_extension__()


export default store