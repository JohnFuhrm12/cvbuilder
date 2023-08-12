import '../styles/Info.css';

function Info( {...props} ) {


    return (
        <div id='infoContent'>
            <div className="infoBlock">
                <h2 className="infoTitle">Personal Details</h2>
                <form className='infoForm'>
                    <label htmlFor="name" className="infoInputLabel">Name:</label>
                    <input type='text' name="name" className="infoInput" placeholder='Full Name' onChange={(e) => {props.setName(e.target.value)}}/>
                    <label htmlFor="email" className="infoInputLabel">Email:</label>
                    <input type='email' name="email" className="infoInput" placeholder='Email' onChange={(e) => {props.setEmail(e.target.value)}}/>
                    <label htmlFor="number" className="infoInputLabel">Phone Number:</label>
                    <input type='text' name="number" className="infoInput" placeholder='Phone Number' onChange={(e) => {props.setPhone(e.target.value)}}/>
                    <label htmlFor="address" className="infoInputLabel">Address</label>
                    <input type='text' name="address" className="infoInput" placeholder='City, Country' onChange={(e) => {props.setAddress(e.target.value)}}/>
                </form>
            </div>
            <div className="infoBlock">
                <h2 className="infoTitle">Education</h2>
            </div>
            <div className="infoBlock">
                <h2 className="infoTitle">Experience</h2>
            </div>
        </div>
    )
};

export default Info;