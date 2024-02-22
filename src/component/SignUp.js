import { useState } from "react";


function SignUp() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        number: "",
        gender: ""
    })


    const handleChange = (evt) => {
        const newVal = evt.target.value
        const newName = evt.target.name

        setFormData((pre) => {
            return { ...pre, [newName]: newVal }
        })
    }

    const handleClick = (evt) => {
        evt.preventDefault()
        console.log(formData)
    }


    return (
        <>
            <div className="container">
                <div className="card-one">
                    <h1>SignUp</h1>
                    <div className="wrapper-one">
                        <label>Name</label>
                        <input type="text" placeholder="Full name..." name='name' value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="wrapper-one">
                        <label>Email</label>
                        <input type="email" placeholder="Email..." name='email' value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="wrapper-one">
                        <label>Age</label>
                        <input type="number" placeholder="Age..." name='age' value={formData.age} onChange={handleChange} />
                    </div>
                    <div className="wrapper-one">
                        <label>Number</label>
                        <input type="number" placeholder="Phone..." name='number' value={formData.number} onChange={handleChange} />
                    </div>
                    <div className="gender-box">
                        <label htmlFor="male" >Male</label>
                        <input type="radio" id="male" value="male" name='gender' onChange={handleChange} />

                        <label htmlFor="female" >Female</label>
                        <input type="radio" id="female" value="female" name='gender' onChange={handleChange} />
                    </div>

                    <button type="submit" onClick={handleClick}>Login</button>
                    <div className="social">
                        <div className="google-box"><i className="fa-brands fa-google google"></i></div>
                        <div className="twitter-box"><i className="fa-brands fa-twitter twitter"></i></div>
                        <div className="facebook-box"><i className="fa-brands fa-facebook facebook"></i></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;