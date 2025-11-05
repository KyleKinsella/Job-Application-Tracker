import './welcome.css'
import Nav from './Nav.jsx'
import Mode from './Mode.jsx'
import './Mode.css'
import { useState, useEffect } from 'react'
import './style.css'

function Welcome() {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode])

    return (
        <>
        <Mode darkMode={darkMode} setDarkMode={setDarkMode} ></Mode>

        <h1>Job Application Tracker</h1>
        <p>Welcome! This is a piece of software that you can use, to keep
            track of all the jobs that you have applied to!    
            <br /><br />
            Let's get going, shall we?
        </p>

        <hr />
        <Nav></Nav>
        <hr />
        </>
    )
}

export default Welcome