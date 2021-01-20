import React, {useState} from 'react';
import ContactSignup from '../../components/Contact/ContactSignup';
import ContactSuccess from '../../components/Contact/ContactSuccess';
import './Contact.css';
import { FaFacebookSquare, FaGooglePlus, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
    return (
        <>
        <div className="contact-container">
            <h3>Get in touch</h3>
            <p>Create your account by filling out the information bellow.</p>
        <div className="form-container">
          <span className="close-btn">x</span>
          <div className="form-content-left">
          <div class="social-container">
            <span>Sign up using your social network</span>
              <a href="/" class="social facebook">
                <FaFacebookSquare />
              </a>
              <a href="/" class="social google">
                <FaGooglePlus />
              </a>
              <a href="/" class="social linkedin">
                <FaLinkedin />
              </a>
              <a href="/" class="social twitter">
                <FaTwitterSquare />
              </a>
          </div>
                
          </div>

        {!isSubmitted ? (
        <ContactSignup submitForm={submitForm} />) : (<ContactSuccess />)}
        </div>
        </div>
        </>
    );
};

export default Contact;