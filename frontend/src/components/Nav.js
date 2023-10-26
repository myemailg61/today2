import logo from './asset/logo.png';

const Nav = ({ setShowModal, showModal, setIsSignUp }) => {
    const authToken = true;

    const clkHnd = () => {
        setShowModal(true);
        setIsSignUp(false);
    };


    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={logo}></img>
            </div>

            {!authToken && <button
                className='nav-button' onClick={clkHnd} disabled={showModal}
            >Log In</button>}
        </nav >
    )
}

export default Nav;