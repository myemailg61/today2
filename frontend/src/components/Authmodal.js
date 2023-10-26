import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Authmodal = ({ setShowModal, isSignUp }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const clkHnd = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Password needs to match');
                return;
            }
            const response = await axios.post('http://ay.classicayurvedic.com/signup', { email, password })
            //console.log('make a post request to our database');

            //setCookie('AuthToken', response.data.token)
            //setCookie('UserId', response.data.userId)

            const success = response.status === 201;

            if (success) navigate('/onboarding');
            //if (success && !isSignUp) navigate('/dashboard');

            window.location.reload()

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='authHold'>
            <div className='auth-modal'>
                <div className="close-icon" onClick={clkHnd}>x</div>
                <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>

                <form onSubmit={handleSubmit}>
                    <input type='email' id='email' name='email' placeholder='email'
                        required={true}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input type='password' id='password' name='password' placeholder='password'
                        required={true}
                        onChange={(e) => setPassword(e.target.value)} />

                    {isSignUp && <input type='password' id='password-check' name='password-check' placeholder='confirm password'
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)} />}

                    <input className="secondary-button" type="submit" />
                    <p>{error}</p>
                </form>
            </div>
        </div>
    )
}

export default Authmodal;