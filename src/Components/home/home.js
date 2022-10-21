import {useSelector, connect} from 'react-redux';
import {useState, useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom";
import shortid from 'shortid';

const Home = (props) => {

    const userList = useSelector(state => {
        return state.user.items;
    })

    const [blogArray,setBlogArray] = useState([]);

    useEffect(() => {   
        if(props?.user?.items?.length > 0)
        {
            setBlogArray(props.user.items);
        }
    },[]);


    const generateTable = () => {
        console.log("BlogDetails",blogArray);
        let array = [];
        blogArray.map((user,index) => {
            array.push(<tr key={index}>
                <td><Link to={`showBlog/${user.id}`} ><button className="blog-list-btn">{user.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="blog-category">{user.category}</span></button></Link></td>
            </tr>)
        });
        return array;
    };

    return (<>
    <div className="container app-nav shadow">
        <span>
            <Link to="/addBlog" >Add Blog</Link>
        </span>
    </div>
        <div className="container blog-container shadow">
            <h1>Blogs</h1>
            <table style={{ width: "500px" }}>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>  
    </>)
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Home);