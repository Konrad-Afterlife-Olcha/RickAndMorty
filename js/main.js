import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, NavLink, BrowserRouter} from "react-router-dom";
import Button from '@material-ui/core/Button';

class App extends React.Component {
    render() {

        return(
                <>
                    <BrowserRouter>
                        <>
                            <div className={"background"}></div>
                            <div className={"mainDiv"}>

                                    <nav>
                                        <ul className={"mainNav"}>
                                            <li><NavLink to={"/"}>Home</NavLink></li>
                                            <li><NavLink to={"/odcinki"}>Odcinki</NavLink></li>
                                            <li><NavLink to={"/postacie"}>Postacie</NavLink></li>
                                        </ul>
                                    </nav>



                                <div className={"container"}>
                                    <Route path={"/"} exact component={Main}/>
                                    <Route path={"/odcinki"} component={Episodes}/>
                                    <Route path={"/postacie"} component={Postacie}/>
                                </div>
                            </div>
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

                <h1 style={{color: "white"}}>Home</h1>
                </>
        )
    }
}
class Episodes extends Component {
    render() {

        return(
            <>
                <h1 style={{color: "white"}}>Odcinki</h1>
            </>
        )
    }
}

class Postacie extends Component {
    render() {

        return(
            <>
                <h1 style={{color: "white"}}>Postacie</h1>
            </>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById("app"));