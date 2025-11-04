import './welcome.css'
import Nav from './Nav.jsx'
import Mode from './Mode.jsx'
import './Mode.css'

function Welcome() {
    return (
        <header>
            <h1>Job Application Tracker</h1>
            <p>Welcome! This is a piece of software that you can use, to keep
                track of all the jobs that you have applied to!    
                <br /><br />
                Let's get going, shall we?
            </p>

            <hr />
            <Nav></Nav>
            <hr />
            <Mode></Mode>
        </header>
    )
}

export default Welcome