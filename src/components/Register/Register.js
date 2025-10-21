import "./Register.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    let history = useHistory();
    const handleLoginClick = () => {
        history.push("/login");
    };
    useEffect(() => {
        axios
            .get("localhost:8080/api/test-api", {
                headers: { "x-api-key": "reqres-free-v1" },
            })
            .then((response) => {
                console.log("Axios GET response:", response);
            })
            .catch((error) => {
                console.error("Axios GET error:", error);
            });
    }, []);
    const isValidInput = () => {
        if (!email) {
            toast.error("Email is required");
            return false;
        }
        if (!phone) {
            toast.error("Phone number is required");
            return false;
        }
        if (!username) {
            toast.error("Username is required");
            return false;
        }
        if (!password) {
            toast.error("Password is required");
            return false;
        }
        if (password !== rePassword) {
            toast.error("Passwords do not match");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return false;
        }
        toast.success("Pending validation passed");
        return true;
    };

    const handleRegister = () => {
        let userData = {
            email: email,
            phone: phone,
            username: username,
            password: password,
        };
        toast.info("Register successful!");
        console.log("Register data:", userData);
    };
    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">WBAC</div>
                        <div className="detail">Learning still</div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">WBAC</div>
                        <div className="form-group">
                            <label>Email address:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone number:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Re-enter password: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={() => {
                                handleRegister();
                            }}
                        >
                            Register
                        </button>
                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={handleLoginClick}
                            >
                                Already have an account? Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
