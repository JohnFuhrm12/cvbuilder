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

    // Experience 

    const [showExperienceForm, setShowExperienceForm] = useState(false);

    const [company, setCompany] = useState(null);
    const [position, setPosition] = useState(null);
    const [startEx, setStartEx] = useState(null);
    const [endEx, setEndEx] = useState(null);
    const [locationEx, setLocationEx] = useState(null);
    const [description, setDescription] = useState(null);

    function showExperience() {
        if (showExperienceForm) {
            setShowExperienceForm(false);
        } else {
            setShowExperienceForm(true);
        };
    };

    class ExperienceItem {
        constructor(company, position, startEx, endEx, locationEx, description) {
            this.company = company || null;
            this.position = position || null;
            this.startEx = startEx || null;
            this.endEx = endEx || null;
            this.locationEx = locationEx || null;
            this.description = description || null;
        };
    };

    function addExperience(e, company, position, startEx, endEx, locationEx, description) {
        e.preventDefault();
        const expItem = new ExperienceItem(company, position, startEx, endEx, locationEx, description);
        props.setExperienceItems(oldItems => [...oldItems, expItem]);
        showExperience();
        console.log(props.experienceItems);
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
                {showExperienceForm ? 
                                <form className='infoForm'>
                                <label htmlFor="company" className="infoInputLabel">Company:</label>
                                <input type='text' name="company" className="infoInput" placeholder='Company Name' onChange={(e) => {setCompany(e.target.value)}}/>
                                <label htmlFor="position" className="infoInputLabel">Position:</label>
                                <input type='text' name="position" className="infoInput" placeholder='Position' onChange={(e) => {setPosition(e.target.value)}}/>
                                <div id='dateRow'>
                                    <div>
                                        <label htmlFor="startDateEx" className="infoInputLabel">Start Date:</label>
                                        <input type='text' name="startDateEx" className="infoInput" placeholder='Start Date' onChange={(e) => {setStartEx(e.target.value)}}/>
                                    </div>
                                    <div>
                                        <label htmlFor="endDateEx" className="infoInputLabel">End Date:</label>
                                        <input type='text' name="endDateEx" className="infoInput" placeholder='End Date' onChange={(e) => {setEndEx(e.target.value)}}/>
                                    </div>
                                </div>
                                <label htmlFor="companyLocation" className="infoInputLabel">Location:</label>
                                <input type='text' name="companyLocation" className="infoInput" placeholder='City, Country' onChange={(e) => {setLocationEx(e.target.value)}}/>
                                <label htmlFor="description" className="infoInputLabel">Location:</label>
                                <textarea type='text' name="description" className="infoInput" placeholder='Description' onChange={(e) => {setDescription(e.target.value)}}/>
                                <button className='addBtn' onClick={(e) => {addExperience(e, company, position, startEx, endEx, locationEx, description)}}>Add</button>
                            </form>
                : <>
                    {props.experienceItems.map((exp) => {
                        return (
                            <h2 className='eduTitle'>{exp.company}</h2>
                        )
                    })}
                    <button className='addBtn' onClick={showExperience}>Add Experience</button>
                </>}
            </div>
        </div>
    )
};

export default Info;