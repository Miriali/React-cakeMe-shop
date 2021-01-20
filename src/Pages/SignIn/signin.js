import React from 'react';
import './signin.css';
import useForm from '../../components/Contact/useForm';
import validate from '../../components/Contact/validateInfo';
import { FaFacebookSquare, FaGooglePlus, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Signin = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm, 
        validate
    );

    return (
        <div className="container">
            <h2>Welcome to CakeMe</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                <div class="signin-social-container">
                    <p>Log in using your social network</p>
                    <div className="signin-icons">
                    <a href="/" class="signin-social facebook"><FaFacebookSquare /></a>
                    <a href="/" class="signin-social google"><FaGooglePlus /></a>
                    <a href="/" class="signin-social linkedin"><FaLinkedin /></a>
                    <a href="/" class="signin-social twitter"><FaTwitterSquare /></a>
                    </div>
                </div>
                
                <div className="signin-form-inputs">
                <label htmlFor="username" className="signin-form-label">
                    Username
                </label>
                <input
                    id="username" 
                    type="text"
                    name="username" 
                    className="signin-form-input"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="signin-form-inputs">
                <label htmlFor="password" className="signin-form-label">
                    Password
                </label>
                <input 
                    id="password" 
                    type="password"
                    name="password" 
                    className="form-input"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                </div>

                <button className="signin-input-btn" type="submit">
                    Sign up
                </button>
                <span className="signin-input-login">Don´t you have an account? Sign up <a href='Contact'>here</a></span>
                <span className="signin-input-forgot">Forgot your password?</span>
            </form>
        </div>  
    );
}

export default Signin;
