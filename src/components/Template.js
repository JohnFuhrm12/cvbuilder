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
        </div>
    );
};

export default Template;