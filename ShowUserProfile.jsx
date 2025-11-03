function ShowUserProfile({data}) {   
    return (
        <div class="">
            <h1>Here is your profile</h1>
            <p><strong>Note:</strong>
                <br /> This data is not <u>stored</u>! I'm not robbing your data, 
                the data that you enter is <strong><u>ONLY</u></strong> shown in the frontend 
                for this project...
            </p>

            <p><strong>Full Name:</strong> {data.fullName}</p>
            <p><strong>Email:</strong> {data.Email}</p>
            <p><strong>Phone:</strong> {data.Phone}</p>
            <p><strong>Age:</strong> {data.Age}</p>
            <p><strong>Status:</strong> {data.Status}</p>
            <p><strong>Note:</strong> {data.Note}</p>
        </div>
    )
}

export default ShowUserProfile