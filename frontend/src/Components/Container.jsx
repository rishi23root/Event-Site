import React from 'react'
import "../Css/Container.css"

export default function Container() {
    const changeBackground = () => {
        console.log(window.scrollY)
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div className="previousevent">

            <h2 >Previous Events</h2>

            <h3>Today</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Today</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Tomorrow</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Tomorrow</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Yesturday</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Yesturday</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Yesturday</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Tomorrow</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
            <h3>Tomorrow</h3>
            <div className="events">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
            </div>
        </div>
    )
}
