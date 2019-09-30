import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Link, Switch, NavLink} from "react-router-dom";

class App extends React.Component {
    render() {

        return(
            <>
                <BrowserRouter>
                    <>
                        <Switch>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/odcinki"}>Odcinki</Link>
                            <Link to={"/postacie"}>Postacie</Link>
                            <Route path={"/odcinki"} component={Episodes}/>
                            <Route path={"/postacie"} component={Postacie}/>
                        </Switch>

                    </>
                </BrowserRouter>
                </>
        )
    }
}

class Main extends Component {
    render() {

        return(
            <>
                <h1>Main</h1>
                </>
        )
    }
}
class Episodes extends Component {
    render() {

        return(
            <>
                <h1>Main</h1>
            </>
        )
    }
}

class Postacie extends Component {
    render() {

        return(
            <>
                <h1>Main</h1>
            </>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById("app"));