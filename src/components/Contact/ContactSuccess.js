import React from 'react';
import Pavlova from '../../images/pavlova.jpg';

const ContactSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request!</div>
            <img src={Pavlova} alt="success" className="form-img-2"/>
        </div>
    )
}

export default ContactSuccess;