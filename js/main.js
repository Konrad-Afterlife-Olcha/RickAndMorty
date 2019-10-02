import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, NavLink, BrowserRouter} from "react-router-dom";

const quizQuestions = [
    {
        img: "https://samequizy.pl/wp-content/uploads/2018/08/filing_images_72b0674a318d.jpeg",
        pytanie: "Kim jest Rick Sanchez?",

        odpowiedzi: ["Najmądrzejszym ssakiem we Wszechświecie","Przypadkowym gościem", "Postacią drugoplanową", "Jest lekarzem, dlatego ma fartuch", "Jest programistą Java w wersji script", "Nikim"],
        poprawna: "Najmądrzejszym ssakiem we Wszechświecie"
    },
    {
        img: "https://samequizy.pl/wp-content/uploads/2018/06/filing_images_5a8672051ba0.jpg",
        pytanie: "Ile lat minęło zanim wrócił do córki?",
        odpowiedzi: ["30 lat", "20 lat", "40lat", "Math.random()*40"],
        poprawna: "20 lat"
    },
    {
        img: "https://samequizy.pl/wp-content/uploads/2018/08/filing_images_5ef027ddbcf4.jpg",
        pytanie: "Jak nazywa się ta postać?",
        odpowiedzi: ["Gazek", "JSON", "Pierd", "Chmurka", "Mgiełka"],
        poprawna: "Pierd"
    },
    {
        img: "https://samequizy.pl/wp-content/uploads/2018/08/filing_images_a27a0c99bff6-1.jpeg",
        pytanie: "Jak nazywały się te potworki?",
        odpowiedzi: ["Munions", "Meeseeks", "Backend Developers", "W serialu nie było tych postaci"],
        poprawna: "Meeseeks"
    },
    {
        img: "https://samequizy.pl/wp-content/uploads/2018/06/filing_images_16cb6959d039.jpg",
        pytanie: "Jak Rick zniszczył Cytadelę Ricków?",
        odpowiedzi: ["Zmieniając 1 na 0", "Zabijając wszystkich", "Teleportując Cytadelę do więzienia federalnego"],
        poprawna: "Zmieniając 1 na 0"
    }


];
const pieselTexts = [
    "Cześć człowieku, kliknij mnie, a może przeżyjesz",
    "Mam na imię Pimpek i zamierzam zniewolić ludzkość za to... ",
    "... że robią tak paskudne strony, na przykład taka jak ta.",
    "Przekonaj mnie, że się mylę, a pozwolę wam pozostać wolnymi ludźmi.",
    "Masz 5 sekund...",
    "Dobrze, przekonałeś mnie",
    "Nie przemawiają do mnie twoje argumenty, teraz zostaniesz moim niewolnikiem"
]



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
                                                <li><NavLink exact activeClassName={"nav-active"} to={"/"}><NavButton exact title={"News"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/postacie"}><NavButton exact title={"Postacie"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/odcinki"}><NavButton exact title={"Odcinki"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/quiz"}><NavButton exact title={"Quiz"}/></NavLink></li>
                                            </ul>
                                        </nav>



                                    <div className={"container"}>
                                        <Route path={"/"} exact component={Main}/>
                                        <Route path={"/postacie"} exact component={Postacie}/>
                                        <Route path={"/odcinki"} exact component={Episodes}/>
                                        <Route path={"/quiz"} exact component={Quiz}/>
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
                <div className={"mainContainer"}>
                    <iframe width="840" height="472,5" src="https://www.youtube.com/embed/41yJzxQDUJU" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <Piesel text={pieselTexts[0]}/>

                </>
        )
    }
}
class Piesel extends Component {
    constructor(){
        super();
        this.state = {
            opacity: true,
            pieselText: 0,
            convince: false,
            convinceOpacity: true
        }
    }
    componentDidUpdate() {
        if (this.state.pieselText === 4) {
            this.timeout = setTimeout(() => {
                console.log("działa")
                if(this.state.convince){
                    this.setState({
                        pieselText: 5
                    })
                } else {
                    this.setState({
                        pieselText: 6
                    })
                }
            }, 5000)
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        return(
            <>


                    <div className={"pieselText"} style={{opacity: this.state.opacity ? 1 : 0}}>{pieselTexts[this.state.pieselText]}</div>
                    < div onClick = {()=> {
                        console.log(this.state.pieselText)
                        if (this.state.pieselText < 4) {
                            this.setState({
                                pieselText: this.state.pieselText + 1
                            })
                        }
                        if(this.state.pieselText === 3) {
                            this.setState({
                                convinceOpacity: false
                            })
                        }


                    }} className={"piesel"} style={{opacity: this.state.opacity ? 1 : 0}}><img src="img/piesel.png" alt="" /></div>


                <p onClick={()=>(
                    this.setState({
                        opacity: !this.state.opacity
                    })
                )} className={"hidePiesel"}>{this.state.opacity ? "Ukryj Pimpka" : "Pokaż Pimpka"}</p>
                <button onClick={()=>(
                    this.setState({
                        convince: true,
                        convinceOpacity: true
                    })
                )} className={"convinceButton"} style={{
                    opacity: this.state.convinceOpacity ? 0 : 1
                }}>Rozumiem, następnym razem bardziej się postaram :(</button>
                </>
        )
    }
}

class Episodes extends Component {
    constructor(){
        super();
        this.state = {
            episodes: [],
            episodes2: []
        };
        this.mounted = false
    }
    componentDidMount() {
        this.mounted = true;
         fetch(`https://rickandmortyapi.com/api/episode/`).then(res=>res.json() ).then((res)=> {
            if(this.mounted){
                        this.setState({
                            episodes: res.results
                        })
            }
                    }
                );
        fetch(`https://rickandmortyapi.com/api/episode?page=2`).then(res=>res.json() ).then((res)=> {
            if(this.mounted){
                        this.setState({
                            episodes2: res.results
                        })
            }

                    }
                )
    }
    componentWillUnmount() {
        this.mounted = false
    }

    render() {

        return(
            <>
                {this.state.episodes.length ? <EpisodesArea episodes={this.state.episodes}/> : null }
                {this.state.episodes2.length ? <EpisodesArea episodes={this.state.episodes2}/> : null }
            </>
        )
    }

}

class EpisodesArea extends Component {
    constructor(){
        super()
        this.state = {
            opacity: 0
        }
    }
    componentDidMount() {
        this.timeout = setTimeout(()=>(
            this.setState({
                opacity: 1
            })
        ), 500)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {

        return(
            <>
                <div className={"episodesArea"} >
                    {this.props.episodes.map((el, index)=> (

                                <li className={"episodeInfo"} style={{opacity: this.state.opacity}} key={index}><p>Nazwa odcinka: {el.name}</p> <p>Piemiera: {el.air_date}</p>
                                    <p>Epizod: {el.episode}</p>
                                </li>

                        )
                    )}
                </div>
                </>

        )
    }
}

class Postacie extends Component {
    constructor(){
        super()
        this.state = {
            characters: [],
            page: 1
        };
        this.mountedChar = false
    }
    componentDidMount() {
        this.mountedChar = true;
        fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`).then(res=>res.json() ).then((res)=> {
            if(this.mountedChar) {
                this.setState({
                    characters: res.results
                })
            }
            }
        )
    }

    componentDidUpdate() {
        this.mountedChar = true;
        fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`).then(res=>res.json() ).then((res)=> {
            if(this.mountedChar) {
                this.setState({
                    characters: res.results
                })
            }
            }
        )
    }
    componentWillUnmount() {
        this.mountedChar = false
    }

    render() {


        return(
            <>
                <nav className={"galleryTopNav"}>
                    <button className={"buttonPrev"} onClick={()=>(
                        this.setState({
                            page: this.state.page === 1 ? 25 : (this.state.page - 1)

                        })
                    )}>Prev page</button>
                    <button className={"buttonNext"} onClick={()=>(
                        this.setState({
                            page: this.state.page === 25 ? 1 : (this.state.page + 1)

                        })
                    )}>Next page</button>
                </nav>
                <div className={"charactersContainer"}>
                    {this.state.characters.length ? this.state.characters.map((el, index)=>(
                        <Character key={index} url={el.image} name={el.name} status={el.status} gender={el.gender}/>
                    )): null}

                </div>
                {/*{this.state.characters.length ? <Character url={this.state.characters[1].image} name={this.state.characters[1].name}/> : null}*/}
            </>
        )
    }
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
    constructor(){
        super()
        this.state = {
            opacity: 0
        }
    }
    componentDidMount() {
        this.timeout = setTimeout(()=>(
            this.setState({
                opacity: 1
            })
        ), 500)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    characterStatus = () => {
        if (this.props.status === "Alive") {
            return "żywy"
        }
        if (this.props.status === "unknown") {
            return "nieznany"
        }
        if (this.props.status === "Dead") {
            return "martwy"
        }
    }
    characterGender = () => {
        if(this.props.gender === "Male"){
            return "Mężczyzna"
        }
        if(this.props.gender === "Female"){
            return "Kobieta"
        }
        if(this.props.gender === "unknown"){
            return "nieznana"
        }
    }
    render() {

        return (
            <>

                <div className={"characterComponent"}  style={{opacity: this.state.opacity}}>
                    <img  src={this.props.url} alt=""/>
                    <div className={"characterInfo"}>
                        <p>Imię: <span>{this.props.name}</span></p>
                        <p>Status: <span>{this.characterStatus()}</span></p>
                        <p>Płeć: <span>{this.characterGender()}</span></p>
                        </div>
                </div>
                </>
        )
    }
}

class Quiz extends Component {
    render() {

        return(
            <>
                {quizQuestions.map((el, index)=>(
                    <div key={index} className={"quizContainer"}>
                        <QuizQuestion question={el.pytanie}/>
                        <QuizImg img={el.img}/>
                        <div className={"answerContainer"}>
                            {el.odpowiedzi.map((item, index)=>(
                                <QuizAnswer key={index} answer={item} right={el.poprawna}/>

                            ))}
                        </div>
                        </div>
                ))}


                </>
        )
    }
}
class QuizQuestion extends Component {
    render() {

        return(
            <>
                <h2 className={"question"}>{this.props.question}</h2>
                </>
        )
    }
}
class QuizImg extends Component {
    render() {

        return(
            <>
                <div className={"quizImg"}><img src={this.props.img} alt=""/></div>
            </>
        )
    }
}
class QuizAnswer extends Component {
    constructor(){
        super();
        this.state = {
            rightAnswer: null,
            badAnswer: null
        }
    }

    setStyle = ()=>{
        if(this.state.rightAnswer){
            return {
                border: "4px solid green"
            }
        } else if(this.state.badAnswer) {
            return {
                border: "4px solid red"
            }
        }



    }
    render() {

        return(

                <p onClick={()=>{
                    if(this.props.right === this.props.answer){
                            this.setState({
                                rightAnswer: true,
                            })
                    } else {
                            this.setState({
                                badAnswer: true
                            })
                    }
                }} className={"answer"} style={this.setStyle()}>{this.props.answer}</p>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));