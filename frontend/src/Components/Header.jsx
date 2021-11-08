import React from 'react'
import "../Css/Header.css"
import firebase from '../config/firebase';
import form from 'react';

import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

import { deleteAllCookies } from '../other/cookies';

function Header() {
    const History = useHistory();

    const logoutFunc = () => {
        console.log('logout clicked');
        firebase.auth().signOut().then(() => {
            toast.success('Sign-out successful.')
            deleteAllCookies()
            History.push('/Login')
        }).catch((error) => {
            toast.error('An error happened, try agian')
        });
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -100
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            key="hiheader"
        >
            <div className="Navbar">
                <div className="logo">
                    <img src="TechnoJam.png" alt="logo" />
                </div>

                <div className="Searchbar">
                    <input type="text" placeholder="Search...."></input>
                </div>
                
                <button
                    className="logout"
                    onClick={logoutFunc}
                >
                    Logout
                </button>
            </div>

        </motion.div>
    )
}

export default Header
