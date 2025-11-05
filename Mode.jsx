import './Mode.css'

function Mode({darkMode, setDarkMode}) {
    return (
        <button className={darkMode ? "light-mode" : "dark-mode"} onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? "☀️" : "🌙"}
        </button>
    )
}

export default Mode