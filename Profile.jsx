import Note from './Note.jsx'
import ShowUserProfile from './ShowUserProfile.jsx'
import { useRef, useState } from 'react'

function Profile() {
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const age = useRef();
    const status = useRef();
    const note = useRef();

    // only for rendering after submit
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const profile = {
            fullName: name.current.value,
            Email: email.current.value,
            Phone: phone.current.value,
            Age: age.current.value,
            Status: status.current.value,
            Note: note.current.value
        }

        console.log("here is your profile:\n", profile.fullName, profile.Email, profile.Phone)    
        setSubmittedData(profile)
    }

    return (
        <div class="profile">
            <h1>Profile Overview</h1>
            <p> Please enter the information you'd like displayed on your profile. <strong>Note:</strong> this is a frontend-only demo, no data is stored or shared.  
            </p>

            <form class="" onSubmit={handleSubmit}>
                <label for="fullname">Full Name: </label>
                <input type="text" id="name" placeholder="Enter your Full Name:" required ref={name}></input> 
                <br /><br />

                <label for="email">Email: </label>
                <input type="email" id="email" placeholder="Enter your Email:" required ref={email}></input> 
                <br /><br />

                <label for="phone">Phone Number: </label>
                <input type="tel" id="phone" placeholder="Enter your Phone Number:" required ref={phone}></input> 
                <br /><br />
                
                <label for="age">Age: </label>
                <input type="number" placeholder="Enter your Age:" required ref={age}></input> 
                <br /><br />

                <label for="status">Status: </label>
                <input type="number" id="number-entered" placeholder="Enter your Current Employment Status:" required ref={status}></input> 
                <br /><br />

                <label for="notes">Notes (for each job): </label>
                <input type="text" id="notes" placeholder="Enter your Note:" required ref={note}></input> 
                {/* <Note></Note> */}
                <br /><br />

                <input type="submit" value="View Profile"/>
            </form>

            {submittedData && <ShowUserProfile data={submittedData} />}
        </div>
    )
}

export default Profile