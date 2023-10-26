import { useState } from "react";
import Nav from "../components/Nav";
import Authmodal from "../components/Authmodal";

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    const authToken = false;
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(true);

    };

    return (
        <div className="overlay">
            <Nav setShowModal={setShowModal}
                showModal={showModal} setIsSignUp={setIsSignUp}></Nav>
            <div>

                <button className="primary-button" onClick={handleClick}>
                    {authToken ? "signOut" : "Create Account"}
                </button>

                {showModal && <Authmodal setShowModal={setShowModal}
                    setIsSignUp={setIsSignUp} isSignUp={isSignUp} />}
            </div>
        </div>
    )
}

export default HomePage;