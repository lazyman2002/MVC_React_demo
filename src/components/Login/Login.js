import "./Login.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";

const Login = ({ setAccount }) => {
    const [keyLogin, setKeyLogin] = useState("");
    const [password, setPassword] = useState("");
    const defaultValid = {
        isValidKey: true,
        isValidPassword: true,
    };
    const [objCheckValid, setObjCheckValid] = useState(defaultValid);
    let history = useHistory();
    const handleRegisterClick = () => {
        history.push("/register");
    };

    const handleLogin = async () => {
        if (!keyLogin || !password) {
            setObjCheckValid(defaultValid);
            if (!keyLogin) {
                setObjCheckValid({ ...objCheckValid, isValidKey: false });
                toast.error("Please enter Email or Phone number");
            }
            if (!password) {
                setObjCheckValid({ ...objCheckValid, isValidPassword: false });
                toast.error("Please enter password");
            }
            return;
        }
        const response = await loginUser(keyLogin, password);
        if (response && response && response.EC === 0) {
            let data = {
                isAuth: true,
                token: "fake",
            };
            sessionStorage.setItem("account", JSON.stringify(data));
            setAccount(data);
            history.push("/users");
        } else {
            toast.error(response.EM);
        }
    };
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">WBAC</div>
                        <div className="detail">Learning still</div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">WBAC</div>
                        <input
                            type="text"
                            className={
                                objCheckValid.isValidKey
                                    ? "form-control"
                                    : "form-control is-invalid"
                            }
                            placeholder="Email or phone number"
                            value={keyLogin}
                            onChange={(e) => {
                                setKeyLogin(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            className={
                                objCheckValid.isValidPassword
                                    ? "form-control"
                                    : "form-control is-invalid"
                            }
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={() => {
                                handleLogin();
                            }}
                        >
                            Login
                        </button>
                        <span className="text-center">
                            <a href="/" className="forgot-password">
                                Forgot your password?
                            </a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={handleRegisterClick}
                            >
                                <Link
                                    to="/register"
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    Create new account
                                </Link>
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
