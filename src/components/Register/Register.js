import "./Register.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerNewUser } from "../../services/userService";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const defaultValid = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidRePassword: true,
    };
    const [objCheckValid, setObjCheckInput] = useState(defaultValid);
    let history = useHistory();
    const handleLoginClick = () => {
        history.push("/login");
    };
    const isValidInput = () => {
        setObjCheckInput(defaultValid);
        if (!email) {
            toast.error("Email is required");
            setObjCheckInput({ ...objCheckValid, isValidEmail: false });
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
            setObjCheckInput({ ...objCheckValid, isValidEmail: false });
            return false;
        }
        return true;
    };

    const handleRegister = async () => {
        let check = isValidInput();
        if (check === true) {
            let response = await registerNewUser(
                email,
                phone,
                username,
                password
            );
            console.log(response);
            let serverData = response;
            console.log(serverData);
            if (+serverData.EC === 0) {
                toast.success(serverData.EM);
                history.push("/login");
            } else {
                toast.error(serverData.EM);
            }
        }
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
                                className={
                                    objCheckValid.isValidEmail
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone number:</label>
                            <input
                                type="text"
                                className={
                                    objCheckValid.isValidPhone
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
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
                                type="password"
                                className={
                                    objCheckValid.isValidPassword
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Re-enter password: </label>
                            <input
                                type="password"
                                className={
                                    objCheckValid.isValidRePassword
                                        ? "form-control"
                                        : "form-control is-invalid"
                                }
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
