import React from 'react';
import { Link } from "react-router-dom";
import '../Css/Error.css';
import GIF from '../Asserts/error.gif'
import { motion } from "framer-motion"

function Error404() {
    return (
        <motion.section
            initial={{
                opacity: 0,
                y: -30
            }}
            animate={{
                opacity: 1,
                y: 0
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
                y: 30
            }}
            key="404"
            className="page_404">
            <div className="cointainer">
                <h1 className="text-center text404">
                    404
                </h1>
                <div className="imageGIF">
                    <img src={GIF} alt="GIF 404" />
                </div>
                <div className="contant_box_404">
                    <h3 className="h2">
                        Look like you're lost
                    </h3>
                    <p>
                        the page you are looking for not avaible!
                    </p>
                    <Link to="/" className="link_404">
                        Go to Home
                    </Link>
                </div>
            </div>
        </motion.section>
    )
}

export default Error404
