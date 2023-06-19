import React, {useEffect, useReducer} from "react";
import "./Login.css";
import {ACCESS_TOKEN, GOOGLE_AUTH_URL} from "../../../constants";
import {login} from "../../../util/APIUtils";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import googleLogo from "../../../img/google-logo.png";
import {toast} from "react-toastify";
import  Footer from '../../../common/Footer'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
const Login = ({authenticated}) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            if (location.state?.error) {
                toast(location.state.error, {type: "error",position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",});
            }

            navigate(location.pathname, {replace: true, state: {}});
        }, 100);
    }, [location.pathname, location.state?.error, navigate]);

    if (authenticated) {
        return (
            <Navigate
                to={{
                    pathname: "/",
                    state: {from: location}
                }}
            />
        );
    }

    return (
        <div className="login-container bg-gray-50 h-screen">
            <div className="login-content bg-black-800">
                <h2 className="fw-bold mb-2 text-uppercase" style={{ color: 'white' }}>Login</h2>
                <p className="text-white-50 mb-5" >Please enter your login and password!</p>

                <SocialLogin />
                <div className="or-separator">
                    <span className="or-text bg-black-8000">OR</span>
                </div>
                <LoginForm/>
                <span className="signup-link">
                Don't have an account? <Link to="/signup">Signup here</Link>
        </span>

            </div>
            <Footer/>
        </div>
    );
};

const SocialLogin = () => {
    return (
        <div className="social-login">
            <a className="btn btn-block social-btn google bg-red-700" style={{ color: 'white' }} href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google"/> Log in with Google
            </a>
        </div>
    );
};

const LoginForm = () => {
    const [state, setState] = useReducer(
        (prevState, newState) => {
            return {...prevState, ...newState};
        },
        {
            email: "",
            password: ""
        }
    );
    const navigate = useNavigate();

    const handleInputChange = event => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        setState({
            [inputName]: inputValue
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const loginRequest = Object.assign({}, state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                toast("You're successfully logged in!", {type: "success",position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",});

                navigate("/home");
            })
            .catch(error => {
                toast(
                    (error && error.message) ||
                    "Oops! Something went wrong. Please try again!",
                    {type: "error",position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",}
                );
            });
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={state.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">
                    Login
                </button>
            </div>
            
        </form>

        
    );
    
};

export default Login;
