const Login = (props) => {
    return (
        <div className="login-container mt-3">
            <div className="container">
                <div className="row">
                    <div className="content-left col-7">
                        <div className="brand">WBAC</div>
                        <div className="detail">Learning still</div>
                    </div>
                    <div className="content-right col-5 d-flex flex-column gap-3 py-3">
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
                            Forgot your password?
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success">
                                Create new accpunt
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
