import { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        first_name: "",
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        gender_identity: 'man',
        gender_interest: 'woman',
        email: '',
        url: '',
        about: '',
        matches: [],
    });

    const handleChange = (e) => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        console.log('value' + value, 'name' + name)

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <Nav minimal={true} setShowModal={() => { }}
                showModal={false} />

            <div className="Onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id='first_name'
                            type='text'
                            name='first_name'
                            placeholder="first name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}></input>

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id='dob_day'
                                type='number'
                                name='dob_day'
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}></input>
                            <input
                                id='dob_month'
                                type='number'
                                name='dob_month'
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}></input>
                            <input
                                id='dob_year'
                                type='number'
                                name='dob_year'
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}></input>
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id='man-gender-identity'
                                type='radio'
                                name='gender_identity'
                                placeholder="DD"
                                value='man'
                                onChange={handleChange}
                                checked={formData.gender_identity === 'man'}>
                            </input>
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                id='woman-gender-identity'
                                type='radio'
                                name='gender_identity'

                                value='woman'
                                onChange={handleChange}
                                checked={formData.gender_identity === 'woman'}>
                            </input>
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input
                                id='more-gender-identity'
                                type='radio'
                                name='gender_identity'

                                value='more'
                                onChange={handleChange}
                                checked={formData.gender_identity === 'more'}>
                            </input>
                            <label htmlFor="more-gender-identity">More</label>
                        </div>
                        <label htmlFor="show-gender-identity">Show gender on my profile</label>
                        <input
                            id='show-gender'
                            type='checkbox'
                            name='show_gender'
                            onChange={handleChange}
                            checked={formData.show_gender}>
                        </input>

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id='man-gender-interest'
                                type='radio'
                                name='gender_interest'
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'man'}>
                            </input>
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                id='woman-gender-interest'
                                type='radio'
                                name='gender_interest'
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'woman'}>
                            </input>
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                id='everyone-gender-interest'
                                type='radio'
                                name='gender_interest'
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'}>
                            </input>
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks.."
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <input type="submit" />
                    </section>


                    <section>
                        <label htmlFor="about">Profile Profile</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"></img>}
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Onboarding;