import { useEffect, useRef, useState } from "react"

function FillDataIn() {
    const companyName = useRef();
    const dateApplied = useRef();
    const Position_Role = useRef();
    const Job_Type = useRef();
    const Location = useRef();
    const Model = useRef();
    const Salary = useRef();
    const Stage = useRef();
    const Notes = useRef();

    const [submittedData, setSubmittedData] = useState([]);
    
    // this will stop the removing of data, once we refresh the page! //
    useEffect(() => {
        const stored = localStorage.getItem("jobApplications");

        if(stored) {
            setSubmittedData(JSON.parse(stored));
        }        
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Company: companyName.current.value,
            DateApplied: dateApplied.current.value,
            Position_Role: Position_Role.current.value,
            Job_Type: Job_Type.current.value,
            Location: Location.current.value,
            Model: Model.current.value,
            Salary: Salary.current.value,
            Stage: Stage.current.value,
            Notes: Notes.current.value
        }

        console.log("here is the data:", data)

        const updatedData = [...submittedData, data]
        setSubmittedData(prev => [updatedData])

        // Save to Local Storage // 
        localStorage.setItem("jobApplications", JSON.stringify(updatedData))

        // reset the values! // 
        companyName.current.value = "";
        dateApplied.current.value = "";
        Position_Role.current.value = "";
        Job_Type.current.value = "";
        Location.current.value = "";
        Model.current.value = "";
        Salary.current.value = "";
        Stage.current.value = "";
        Notes.current.value = "";
    }

    return (
        <div class="">
            <h1>Job Applications</h1>
            <p>Below are all of the jobs that you have applied to. Please fill in the boxes with the 
                required information. 
            </p>

            <br />
            
            <form class="" onSubmit={handleSubmit}>
                <label for="companyname">Company Name: </label>
                <input type="text" id="companyname" placeholder="Enter Company Name:" required ref={companyName}></input> 
                <br /><br />

                <label for="dateApplied">Date Applied: </label>
                <input type="text" id="dateApplied" placeholder="When did you Apply for this job?" required ref={dateApplied}/>
                <br /><br />

                <label for="Position_Role">Position / Role: </label>
                <input type="text" id="Position_Role" placeholder="What is the Position / Role?" required ref={Position_Role}/>
                <br /><br />

                {/* (Full-time / Part-time / Internship / Graduate / Contract):  */}
                <label for="Job_Type">Job Type: </label>
                <input type="text" id="Job_Type" placeholder="What is the Job Type?" required ref={Job_Type}/>
                <br /><br />

                <label for="Location">Location: </label>
                <input type="text" id="Location" placeholder="Where is the Job Located?" required ref={Location}/>
                <br /><br />

                <label for="Model">Model: </label>
                <input type="text" id="Model" placeholder="On-Site, Remote, Hybrid?" required ref={Model}/>
                <br /><br />

                <label for="Salary">Salary: </label>
                <input type="text" id="Salary" placeholder="What is the Salary?" required ref={Salary}/>
                <br /><br />

                <label for="Stage">Stage: </label>
                <input type="text" id="Stage" placeholder="Applied, Interview, Offer, Rejected?" required ref={Stage}/>
                <br /><br />

                <label for="Notes">Notes: </label>
                <input type="text" id="Notes" placeholder="What are your Notes?" required ref={Notes}/>
                <br /><br />

                <input type="submit" value="Record This Job"></input>
            </form>

            <br /><br />
           
            <table class="skills-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Company</th>
                        <th>Date Applied</th>
                        <th>Position / Role</th>
                        <th>Job Type</th>
                        <th>Location</th>
                        <th>Model</th>
                        <th>Salary</th>
                        <th>Stage</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedData.map((item, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.Company}</td>
                        <td>{item.DateApplied}</td>
                        <td>{item.Position_Role}</td>
                        <td>{item.Job_Type}</td>
                        <td>{item.Location}</td>
                        <td>{item.Model}</td>
                        <td>{item.Salary}</td>
                        <td>{item.Stage}</td>
                        <td>{item.Notes}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FillDataIn