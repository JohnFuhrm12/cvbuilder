import { useState } from 'react';
import '../styles/Info.css';

function Info( {...props} ) {

    const [showEducationForm, setShowEducationForm] = useState(false);

    const [school, setSchool] = useState(null);
    const [degree, setDegree] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [location, setLocation] = useState(null);

    function showEducation() {
        if (showEducationForm) {
            setShowEducationForm(false);
        } else {
            setShowEducationForm(true);
        };
    };

    class EducationItem {
        constructor(school, degree, start, end, location) {
            this.school = school || null;
            this.degree = degree || null;
            this.start = start || null;
            this.end = end || null;
            this.location = location || null;
        };
    };

    function addEducation(e, school, degree, start, end, location) {
        e.preventDefault();
        const eduItem = new EducationItem(school, degree, start, end, location);
        props.setEducationItems(oldItems => [...oldItems, eduItem]);
        showEducation();
        console.log(props.educationItems);
    };

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
                {showEducationForm ? 
                                <form className='infoForm'>
                                <label htmlFor="school" className="infoInputLabel">School:</label>
                                <input type='text' name="school" className="infoInput" placeholder='School' onChange={(e) => {setSchool(e.target.value)}}/>
                                <label htmlFor="degree" className="infoInputLabel">Degree:</label>
                                <input type='text' name="degree" className="infoInput" placeholder='Degree' onChange={(e) => {setDegree(e.target.value)}}/>
                                <div id='dateRow'>
                                    <div>
                                        <label htmlFor="startDate" className="infoInputLabel">Start Date:</label>
                                        <input type='text' name="startDate" className="infoInput" placeholder='Start Date' onChange={(e) => {setStart(e.target.value)}}/>
                                    </div>
                                    <div>
                                        <label htmlFor="endDate" className="infoInputLabel">End Date:</label>
                                        <input type='text' name="endDate" className="infoInput" placeholder='End Date' onChange={(e) => {setEnd(e.target.value)}}/>
                                    </div>
                                </div>
                                <label htmlFor="schoolLocation" className="infoInputLabel">Location:</label>
                                <input type='text' name="schoolLocation" className="infoInput" placeholder='City, Country' onChange={(e) => {setLocation(e.target.value)}}/>
                                <button className='addBtn' onClick={(e) => {addEducation(e, school, degree, start, end, location)}}>Add</button>
                            </form>
                : <>
                    {props.educationItems.map((edu) => {
                        return (
                            <h2 className='eduTitle'>{edu.school}</h2>
                        )
                    })}
                    <button className='addBtn' onClick={showEducation}>Add Education</button>
                </>}
            </div>
            <div className="infoBlock">
                <h2 className="infoTitle">Experience</h2>
                <button className='addBtn'>Add Experience</button>
            </div>
        </div>
    )
};

export default Info;