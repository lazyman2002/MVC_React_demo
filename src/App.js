import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/Navigation/Nav";
import Login from "./components/Login/Login";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Nav />
                <Switch>
                    <Route path="/news">About</Route>
                    <Route path="/contact">Users</Route>
                    <Route path="/about">Home</Route>
                    <Route path="/" exact>
                        Home Page
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">404 Notfound</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
