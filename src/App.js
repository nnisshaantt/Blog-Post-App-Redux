import React, { useState, useEffect } from "react";
import Home from '../src/Components/home/home';
import AddBlog from '../src/Components/addBlog/addBlog.js';

import './App.css';


function App() {
  
  const [pageVar,setPageVar] = useState('home');

  function pageVarUpdate(val){
    setPageVar(val);
  }

  return (<>


      <div className="container app-nav">
        {
          pageVar == "showBlog" ? <span>
            <a href="#"  onClick={() => pageVarUpdate("home")}>Go To Home</a>
            <a href="#" onClick={() => pageVarUpdate("home")}>Like</a>
            <a href="#" onClick={() => pageVarUpdate("home")}>Edit</a>
            <a href="#" onClick={() => pageVarUpdate("home")}>Delete</a>
          </span> : <span>
          {
            pageVar === "home" ? 
              <>
                <a href="#" onClick={() => pageVarUpdate("addBlog")}>Add Blog</a>
              </>
              : <a href="#"  onClick={() => pageVarUpdate("home")}>Go To Home</a>
          }          
        </span>
        }

      </div>
      <div className="container blog-container shadow">
        {
          pageVar === "home" ? <Home setPageVar={setPageVar} pageVar={pageVar} /> :(pageVar == "addBlog" ? <AddBlog /> : <Home />)
        }
      </div>

  </>
  );
}

export default App;
