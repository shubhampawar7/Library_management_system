import React, { useState } from "react";
import './index.css'

function Login() {
    //states start
    const [user, setUser] = useState();
    const [pass, setPass] = useState();
    const [login, setLoggedIn] = useState("shubh");
    let userEvent = "";
    let passEvent = "";

    const [userValiddata, setuserValid] = useState(1);//for username validation
    const [passValiddata, setpassValid] = useState(1);//for password validation
    const [datauser, setDatauser] = useState("");
    const [datapass, setDatapass] = useState("");



    //states end



    //function start

    function formData(e) {
        e.preventDefault()
        console.log(user, pass)
    }

    // usename validation
    function Uservalid(event) {
        userEvent = event.target.value;

        if (userEvent.length < 5) {

            if (userEvent.length == 0) {
                setuserValid(1)
            }
            else {
                setuserValid(2);
            }
        }
        else {
            setuserValid(1)


        }
    }
    //username validation end

    //password validation
    function Passvalid(event) {
        passEvent = event.target.value;
        // var pattern="?=.^0-9";
        // var reg=e.match(pattern)
        if (passEvent.length < 8) {
            if (passEvent.length == 0) {
                setpassValid(1)
            }
            else {
                setpassValid(2);
            }
        }


        else {
            setpassValid(1)


        }
    }
    //password validation end

    function Data() {

        setDatauser(userEvent)
        setDatapass(passEvent)

    }




    //function end




    return (

        <>
            <div className="container">
            

                <div className="formMain">
                    <form className="formInner" onSubmit={formData}>
                        <label>Username :</label> <input className="inputBox" type="text" placeholder="username" required onChange={Uservalid} />{userValiddata == 1 ? ("") : (<p style={{ color: "red" }}>minimum 5 char required *</p>)}
                        <label>Password :</label> <input className="inputBox" type="password" placeholder="password" required onChange={Passvalid} />{passValiddata == 1 ? ("") : (<ul style={{ color: "red" }}><li>An English uppercase character (A-Z)</li><li>An English lowercase character (a-z)</li><li>A number (0-9) and/or symbol (such as !, #, or %)</li><li>Min 8 characters required.</li></ul>)}
                        <br />
                        <button type="submit" onClick={Data}>Login</button>
                    </form>
                    <div>
                        <table style={{ border: "2px solid black" }}>
                            <tr className="tableRow"><th className="tableHeading">Username</th><th >password</th></tr>
                            <tr className="tableRow"><td className="tabledata">{datauser}-</td><td >{datapass}-</td></tr>


                        </table>

                    </div>
                </div>

            </div>
        </>
    );



}

export default Login;