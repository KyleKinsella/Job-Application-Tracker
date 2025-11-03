import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Applications from './Applications';

function Nav() {
    return (
        <Router>
            <nav>
                <Link to="/home">Home | </Link>
                <Link to="/profile">Profile | </Link>
                <Link to="/applications">Applications</Link>
            </nav>
         
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/applications" element={<Applications />} />
            </Routes>
        </Router>
    )
}

export default Nav