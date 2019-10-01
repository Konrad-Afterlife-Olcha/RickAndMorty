import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import Button from '@material-ui/core/Button';



class App extends React.Component {
    render() {

        return(
                <>
                    <BrowserRouter>
                        <>
                            <div className={"background"}></div>
                                <div className={"mainDiv"}>

                                        <nav className={"logoAndNav"}>
                                            <MainLogo/>
                                            <ul className={"mainNav"}>
                                                <li><NavLink exact activeClassName={"nav-active"} to={"/"}><NavButton exact title={"Home"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/odcinki"}><NavButton exact title={"Odcinki"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/postacie"}><NavButton exact title={"Postacie"}/></NavLink></li>
                                            </ul>
                                        </nav>



                                    <div className={"container"}>
                                        <Route path={"/"} exact component={Main}/>
                                        <Route path={"/odcinki"} exact component={Episodes}/>
                                        <Route path={"/postacie"} exact component={Postacie}/>
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
    constructor(){
        super()
        this.state = {
            episodes: [],
            season: 1
        };
    }
    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/episode/?page=${this.state.page}`).then(res => res.json()).then((res) => {
                        this.setState({
                            characters: res.results
                        })
                    }
                )
        }

    render() {

        return(
            <>
                <nav className={"seasons"}><button className={"seasonButton"}>Pierwszy sezon</button><button className={"seasonButton"}>Drugi sezon</button><button className={"seasonButton"}>Trzeci sezon</button></nav>
            </>
        )
    }
}

class Postacie extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         characters: [],
    //         page: 1
    //     };
    // }
    // componentDidMount() {
    //     fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`).then(res=>res.json() ).then((res)=> {
    //             this.setState({
    //                 characters: res.results
    //             })
    //         }
    //     )
    // }
    //
    // componentDidUpdate() {
    //     fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`).then(res=>res.json() ).then((res)=> {
    //             this.setState({
    //                 characters: res.results
    //             })
    //         }
    //     )
    // }
    // componentWillUnmount() {
    // }
    //
    // render() {
    //
    //
    //     return(
    //         <>
    //             <nav className={"galleryTopNav"}>
    //                 <button className={"buttonPrev"} onClick={()=>(
    //                     this.setState({
    //                         page: this.state.page === 1 ? 25 : (this.state.page - 1)
    //
    //                     })
    //                 )}>Prev page</button>
    //                 <button className={"buttonNext"} onClick={()=>(
    //                     this.setState({
    //                         page: this.state.page === 25 ? 1 : (this.state.page + 1)
    //
    //                     })
    //                 )}>Next page</button>
    //             </nav>
    //             <div className={"charactersContainer"}>
    //                 {this.state.characters.length ? this.state.characters.map((el, index)=>(
    //                     <Character key={index} url={el.image} name={el.name}/>
    //                 )): null}
    //
    //             </div>
    //             {/*{this.state.characters.length ? <Character url={this.state.characters[1].image} name={this.state.characters[1].name}/> : null}*/}
    //         </>
    //     )
    // }
}

class NavButton extends Component {
    render() {

        return (
            <>
                <p className={"buttonsNav"}><img className={"portalPng"} src="img/portal.png" alt=""/><img className={"rickAndMorty"} src="img/nav2.png" alt=""/> {this.props.title}</p>

            </>

        )
    }
}
class MainLogo extends Component {
    render() {

        return (
            <>
                <div className={"mainLogoContainer"}><img className={"mainLogo"} src="img/rickAndMortyLogo.png" alt=""/></div>

                </>
        )
    }
}

class Character extends Component {




    render() {

        return (
            <>

                <div className={"characterComponent"}>
                    <img  src={this.props.url} alt=""/>
                    <p>{this.props.name}</p>
                </div>

                </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));