import "./Login.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = (props) => {
    let history = useHistory();
    const handleRegisterClick = () => {
        history.push("/register");
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
                            className="form-control"
                            placeholder="Email or phone number"
                        />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
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
