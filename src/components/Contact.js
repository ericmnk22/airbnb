import react from 'react';

export default function Contact(props){
    return(
        <div className='contact'>
            <div className='contact-card'>
                <img src={props.img1} />
                <h3>{props.name}</h3>
            </div>
            <div className='info-group'>
                <img src={props.img2} />
                <p>{props.tel}</p>
            </div>
            <div className='info-group'>
                <img src={props.img3} />
                <p>{props.email}</p>
            </div>

        </div>
    )
}