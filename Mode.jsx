import { useState } from 'react'
import './Mode.css'

function Mode() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            {/* <h1>Mode</h1> */}
            {/* <p>Here you will be able to toggle between <strong>light</strong> and <strong>dark</strong> mode.</p> */}

            <button className={darkMode ? "light-mode" : "dark-mode"} 
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? "Light Mode☀️": "Dark Mode🌙"}
            </button>
        </div>
    )
}

export default Mode