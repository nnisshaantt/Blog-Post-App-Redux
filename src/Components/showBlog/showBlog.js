import { Link, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import {deleteBlog, editBlog, likeBlog} from '../../redux/allAction';
import heartImg from '../../images/heart.png';

const ShowBlog = (props) => {

    // const userList = useSelector(state => {
    //     return state.user?.items;
    // });


    const [tempo,setTempVar] = useState(null);

    // useEffect(() => {
    //     setTempVar(!tempVar);
    // },[userList])

    console.log("ShowBlogProps",props);

    const dispatch = useDispatch();
    const nav = useNavigate();

    const [isEdit,setisEdit] = useState(false);
    // let tempo = null;

    let myparamval = window?.location?.href.split("/")[4];

    useEffect(() => {   
        if(props.user.items?.length > 0)
        {
            let temp = props?.user?.items?.filter(comp => {
                if(comp.id == myparamval)
                {
                    return comp;
                }
            });
            setTempVar(temp[0]);
        }
    },[]);
        
    let [title, setTitle] = useState('');
    let [category, setCategory] = useState('');
    let [content, setContent] = useState('');

    const onClickEdit = (e) => {
        e.preventDefault();
        if(isEdit)
        {
            setisEdit(false);
        }
        else{
            setisEdit(true);
        }

    };

    function setTitleValue(val){
        tempo.title = val;
    }

    function setCategoryValue(val){
        tempo.category = val;
    }

    function setContentValue(val){
        tempo.content = val;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let newBlog = {
            id : 0,title : '',category:'',content:'',isLiked:false
        }
        newBlog.id = tempo.id;
        newBlog.title = tempo.title;
        newBlog.category = tempo.category;
        newBlog.content = tempo.content; 
        dispatch(editBlog(newBlog));
        nav("/"); 
    };

    const onDeleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteBlog(tempo.id))
        window.location.href = "/";
    };

    const onClickLike = (e) => {
        e.preventDefault();
        let newBlog = {
            id : 0,title : '',category:'',content:'',isLiked:false
        }
        newBlog.id = tempo.id;
        newBlog.title = tempo.title;
        newBlog.category = tempo.category;
        newBlog.content = tempo.content;
        newBlog.isLiked = !tempo.isLiked;
        console.log("Before Dispatch",newBlog);
        dispatch(likeBlog(newBlog));
    };


    return (<>
        <div className="container app-nav shadow">
            <span>
                <a href="/" >Go To Home</a>
                <button className="btn btn-primary like-btn" onClick={onClickLike}>{tempo?.isLiked ? <>Liked <img width="30px" src={heartImg} /></> : "Like"}</button>
                <button className="btn btn-info" onClick={onClickEdit}>{isEdit ? "Show Blog" :"Edit"}</button>
                <button className="btn btn-success" onClick={onDeleteHandler}>Delete</button>
            </span>
        </div>
        {
            isEdit ? <div className="container blog-container shadow">
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="mb-3">
                <label className="form-label">Title&nbsp;:</label>
                <input onChange = {(e) => setTitleValue(e.target.value)} defaultValue = {tempo?.title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Category&nbsp;:</label>
                <input onChange = {(e) => setCategoryValue(e.target.value)} defaultValue = {tempo?.category} type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Blog Content&nbsp;:</label>
                <textarea onChange = {(e) => setContentValue(e.target.value)} defaultValue = {tempo?.content}  style={{height:"190px"}} type="text" className="form-control" id="textArea" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button className="btn btn-danger"style={{marginLeft:"10px"}} onClick={onClickEdit}>Cancel</button>
        </form>

        </div>  
            :<div className="container blog-container shadow">
            <span><h2 style={{color:"yellow"}}>{tempo?.title}</h2><b>Category : {tempo?.category}</b></span><br /><br /><br />
            <p>
                {tempo?.content}
            </p>
        </div>
        }

    </>)
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(ShowBlog);