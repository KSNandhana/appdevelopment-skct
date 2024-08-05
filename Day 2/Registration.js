import { useState } from "react";
import { Link } from "react-router-dom";
import '../Assets/styles/registration.css';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const validate = () => {
        let validationErrors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!formData.name) {
            validationErrors.name = "Name is required";
        }

        if (!formData.dateOfBirth) {
            validationErrors.dateOfBirth = "Date of birth is required";
        }

        if (!formData.gender) {
            validationErrors.gender = "Gender is required";
        }

        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (!passwordPattern.test(formData.password)) {
            validationErrors.password = "Password must be at least 8 characters long, contain one capital letter, one digit, and one special character";
        }

        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = "Confirm password is required";
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem('user', JSON.stringify(formData));
            setMessage("Registration successful. You can now log in.");
            console.log("Registration successful:", formData);
        }
    };

    return (
        <div className="registration-container">
            {/* <h1 className="registration-title">Register</h1> */}
            <form className="registration-form" onSubmit={handleSubmit}>
                <label className="registration-label">Name</label>
                <input
                    className="registration-input"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="registration-error">{errors.name}</span>}
                
                <label className="registration-label">Date of Birth</label>
                <input
                    className="registration-input"
                    type="date"
                    placeholder="Enter your date of birth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />
                {errors.dateOfBirth && <span className="registration-error">{errors.dateOfBirth}</span>}
                
                <label className="registration-label">Gender</label>
                <select
                    className="registration-input"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                {errors.gender && <span className="registration-error">{errors.gender}</span>}
                
                <label className="registration-label">Email</label>
                <input
                    className="registration-input"
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="registration-error">{errors.email}</span>}
                
                <label className="registration-label">Password</label>
                <input
                    className="registration-input"
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
                {errors.password && <span className="registration-error">{errors.password}</span>}

                <label className="registration-label">Confirm Password</label>
                <input
                    className="registration-input"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                />
                {errors.confirmPassword && <span className="registration-error">{errors.confirmPassword}</span>}
                
                <button className="registration-button" type="submit">Register</button>
                <p className="registration-link">
                    Already have an account? <Link to="/Login">Login</Link>
                </p>
            </form>
            {message && <p className="registration-message">{message}</p>}
        </div>
    );
}

export default Registration;
