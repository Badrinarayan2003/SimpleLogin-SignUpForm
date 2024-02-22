import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [isVisible, setIsVisible] = useState(false)

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
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
                <div className="card">

                    <h1>Login</h1>
                    <div className="wrapper">
                        <i className="fa-solid fa-user wrap-icon"></i>
                        <input type="text" placeholder="Username" name="userName" value={formData.userName} onChange={handleChange} />
                    </div>

                    <div className="wrapper">
                        <i className="fa-solid fa-lock wrap-icon"></i>
                        <input type={isVisible ? "text" : "password"} placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                        <span className="eye-span" onClick={() => setIsVisible(!isVisible)}>{isVisible ? (<i className="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}</span>
                    </div>

                    <div className="signup-forgot">
                        <a href="/">Foget Password?</a>
                        <Link to="/signup">Sign Up</Link>
                    </div>

                    <button type="submit" onClick={handleClick}>Login</button>
                    <p>----Or Sign up With----</p>
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

export default Login;