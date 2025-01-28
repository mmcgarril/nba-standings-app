import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Standings from "./pages/Standings";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/standings/:standingsId">
                    <Standings />
                </Route>
            </Switch>
        </Router>
    )
}