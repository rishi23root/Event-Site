import React, { useEffect } from 'react';
import "../Css/Login.css";

import { useHistory } from "react-router-dom";

import firebase from '../config/firebase';
import { motion } from "framer-motion"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

import { getCookie } from '../other/cookies';

const Login = () => {
    const History = useHistory();

    const checkLogedinUser = () => {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                // console.log(user);
                if (user !== null && getCookie('session')) {
                    resolve("First Logout, to login again !!")
                } else if (user !== null && !getCookie('session')) {
                    // indexedDB.deleteDatabase('firebaseLocalStorageDb')
                    reject("Session expire, login again plz ")
                } else {
                    reject('')
                }
            })
        })
    }

    useEffect(() => {
        checkLogedinUser()
            .then(res => {
                toast.error(res)
                History.push("/Dashboard")
            }).catch(err => {
                err && toast.error(err)
            })
        // }
    }, [])

    function loginDatabase(email, password, sendbtn) {
        const loginPromise = new Promise((resolve, reject) => {
            sendbtn.disabled = true;
            firebase.auth().signInWithEmailAndPassword(
                email,
                password)
                .then((userCredential) => {
                    fetch('/api/newLogin', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "LoginCredential": atob(userCredential.user.Aa.split('.')[1])
                        },
                        body: JSON.stringify({ 'UserEmail': userCredential.user.bc.email })
                    })
                        .then(res => res.text())
                        .then(res => {
                            console.log(res)
                            toast.success("Login Successfull 😎")
                            resolve(userCredential.user.bc.email)
                            History.push("/Dashboard");
                        })
                        .catch(console.error)
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    sendbtn.disabled = false;
                    if (errorCode) {
                        reject(`${errorCode.split("/")[1]}`)
                        // reject(`${errorCode}\n - ${errorMessage}`)
                    }
                    else {
                        reject(`Error - ${errorMessage}`)
                    }
                });
        });

        toast.promise(
            loginPromise,
            {
                pending: 'Processing Your Request 😊',
                success: {
                    render({ data }) {
                        return `Hello ${data.split("@")[0]} 😃`
                    },
                    // other options
                    theme: "dark",
                },
                error: {
                    render({ data }) {
                        return `😥 ${data}`
                    },
                    theme: "dark",
                    icon: "❌"
                }
            }
        )
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("Login request Processing");
        const email = e.target[0].value;
        const password = e.target[1].value;
        if (/^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+([.]\w{2,3}){2}$/.test(email)) {
            if (password.trim().length < 6) {
                toast.error("Password must have atleast 6 charactors")
            } else {
                // authentication of user
                loginDatabase(email, password, document.getElementById("submit"));
            }

        } else {
            toast.error("Email is Not Valid - 'example@galgotiasuniversity.edu.in'")
        }

    }

    return (
        <motion.section
            initial={{
                opacity: 0,
                x: -500
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 0.3,
                type: "spring",
                damping: 10,
                mass: 1,
                stiffness: 100
            }}
            exit={{
                opacity: 0,
                y: 300
            }}
            key="hi"
        >
            <div id="container" className="container">
                <div className="leftside">
                    <div className="imageCointainer">
                        <img src="/TechnoJam.png" alt="Image" className="imageItself" />
                    </div>
                </div>

                <form className="rightside" onSubmit={handleLogin}>
                    <h1 className="heading">
                        Event Portal
                    </h1>
                    <label>Official Email :</label>
                    <input
                        type="email"
                        name="userMail"
                        autoComplete="on"
                        autoFocus
                        required
                    />

                    <label>Password :</label>
                    <input
                        type="password"
                        name="userPassword"
                        autoComplete="on"
                        required
                    />

                    <div className="btnContainer">
                        <button id="submit" type="submit" >
                            Sign In
                        </button>
                        {/* <p>
                            Don't have an account ? 
                            <span>
                                <Link to="/Signin">
                                    Sign up
                                </Link>
                            </span>
                        </p> */}
                    </div>
                </form>
            </div>
        </motion.section>
    )
}

export default Login;