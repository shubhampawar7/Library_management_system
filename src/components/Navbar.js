import React from "react";
import { Link } from "react-router-dom";
import './index.css'
// import Mainimg from 'E:\Trinesis\Library Management system\lms\src\components\images\main.jpeg'
// import bgimg from 'E:\Trinesis\Library Management system\lms\src\components\images\logo.jpeg';

// import bootstrap from 'bootstrap';

function Navbar() {



    //    signinup function start
    function signupfunction() {
        if (window.confirm("do u want to signup")) {
            window.location.to = "http://127.0.0.1:5502/";


        }
        else {
            // alert('fine, if not want');
            window.location.to = "http://127.0.0.1:5502/index.html";
        }
    }
    // signinup function end



    // signinin function start
    function signinfunction() {

        if (window.confirm("do you want to signin")) {
            window.location.to = "http://127.0.0.1:5502/";
        }
        else {
            window.location.to = "http://127.0.0.1:5502/";

        }
    }
    // signin function end


    return (
        <>

            {/* navbar start */}

            <nav className="navbar navbar-expand-md navbar-light bg-secondary bg-gradient  ">
                <div className="container-fluid">
                    <div className="navbar-brand img-fluid ">
                    
                      <img style={{ height: "60px", width: "100%" , }} src="https://img.freepik.com/free-vector/open-book-icon-education-symbol-flat-design-vector-illustration_53876-136267.jpg?w=740&t=st=1674148367~exp=1674148967~hmac=c6571fea419550f1011fc6b78f63949db0d117f26d06d17f5a2dd189cf265604" />
                    
                    </div>
                    {/* className="collapse  navbar-collapse  " id="navbarSupportedContent" aria-current="page" */}
                    <div className=" lead"   style={{ height: "auto ", alignItems: "center",justifyContent:"center",margin:"auto"  }}>
                        <h3 id="heading">Library Management System</h3>
                    </div>



                    {/* toggle button start */}
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* toggle button end */}


                    {/* heading start */}
                    
                    {/* heading end */}


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto f-right mb-0">
                            <li className="nav-item m-auto f-right ">
                                <Link className="nav-link active tex" aria-current="page" to="/login">Home</Link>
                            </li>
{/* 
                            <li className="nav-item m-auto f-right ">
                                <Link className="nav-link  " aria-current="page" to="/Home">Books</Link>
                            </li> */}
                            
                            <li className="nav-item m-auto f-right ">
                                <Link className="btn btn-outline-dark f-right bg-info" to="/" onClick={signinfunction} role="button">Login</Link>
                            </li>

                            {/* 
          <li className="nav-item">
            <Link className="btn btn-outline-dark mx-2 " onClick={signupfunction} id="demo" role="button">Signup</Link>
          </li> */}

                        </ul>

                    </div>

                </div>

            </nav>
            {/* navbar end */}

            {/* <div className="image-main">
                <img className="image-link" src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="image"></img>
            </div> */}


        </>
    );


}

export default Navbar;