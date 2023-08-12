import '../styles/Template.css';

function Template( {...props} ) {

    return (
        <div id="templateContent">
            <div id='header'>
                <h2 id='nameTitle'>{props.name}</h2>
                <div id='subHeader'>
                    <h2 className='subTitle' id='emailTitle'>{props.email}</h2>
                    <h2 className='subTitle' id='phoneTitle'>{props.phone}</h2>
                    <h2 className='subTitle' id='addressTitle'>{props.address}</h2>
                </div>
            </div>
            <div id='educationContainer'>
                <h2 className='sectionTitle'>Education</h2>
                {props.educationItems.map((edu) => {
                    return (
                        <div className='eduContainer'>
                            <div className='eduItemContainer'>
                                <h2 className='eduItem'>{`${edu.start} - ${edu.end}`}</h2>
                                <h2 className='eduItem'>{edu.location}</h2>
                            </div>
                            <div className='eduItemContainer'>
                                <h2 className='eduItemBold'>{edu.school}</h2>
                                <h2 className='eduItem'>{edu.degree}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div id='experienceContainer'>
                <h2 className='sectionTitle'>Experience</h2>
                {props.experienceItems.map((exp) => {
                    return (
                        <div className='expContainer'>
                            <div className='expItemContainer'>
                                <h2 className='expItem'>{`${exp.startEx} - ${exp.endEx}`}</h2>
                                <h2 className='expItem'>{exp.locationEx}</h2>
                            </div>
                            <div className='expItemContainer'>
                                <h2 className='expItemBold'>{exp.company}</h2>
                                <h2 className='expItem'>{exp.position}</h2>
                                <p className='expDesc'>{exp.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Template;