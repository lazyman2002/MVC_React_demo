import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation/Nav";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import { Users } from "./components/ManagerUsers/Users";
import { useEffect, useState } from "react";
import _ from "lodash";

function App() {
    const [account, setAccount] = useState({});
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (session) {
            setAccount(JSON.parse(session));
        }
    }, []);
    return (
        <Router>
            <div className="app-container">
                {account && !_.isEmpty(account) && account.isAuth && <Nav />}
                <Switch>
                    <Route path="/news">About</Route>
                    <Route path="/contact">Users</Route>
                    <Route path="/about">Home</Route>
                    <Route path="/" exact>
                        Home Page
                    </Route>
                    <Route path="/login">
                        <Login setAccount={setAccount} />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="*">404 Notfound</Route>
                </Switch>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Router>
    );
}

export default App;
