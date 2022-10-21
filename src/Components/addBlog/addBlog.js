import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import shortid from 'shortid';
import {userRegister} from '../../redux/allAction';
import { useNavigate, Link } from "react-router-dom";
import {useSelector} from 'react-redux';



const AddBlog = () => {

    const userList = useSelector(state => {
        return state.user.items;
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [title, setTitle] = useState('');
    let [category, setCategory] = useState('');
    let [content, setContent] = useState('');

    function setTitleValue(val){
        setTitle(val);
    }

    function setCategoryValue(val){
        setCategory(val);
    }

    function setContentValue(val){
        setContent(val);
    }
    
    let newBlog = {
        id : 1,title : '',category:'',content:'',isLiked:false
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        newBlog.id = shortid.generate();
        newBlog.title = title;
        newBlog.category = category;
        newBlog.content = content;
        dispatch(userRegister(newBlog));
        navigate("/");
        console.log(newBlog);
    };

    
    return (<>
        <div className="container app-nav shadow">
            <span>
                {/* <a href="/">Go To Home</a> */}
                <Link to="/" >GoTo Home</Link>
            </span>
        </div>
        <div className="container blog-container shadow">
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="mb-3">
                <label className="form-label">Title&nbsp;:</label>
                <input onChange = {(e) => setTitleValue(e.target.value)} value = {title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Category&nbsp;:</label>
                <input onChange = {(e) => setCategoryValue(e.target.value)} value = {category} type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Blog Content&nbsp;:</label>
                <textarea onChange = {(e) => setContentValue(e.target.value)} value = {content} style={{height:"190px"}} type="text" className="form-control" id="textArea" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div> 
    </>)
}

export default AddBlog;