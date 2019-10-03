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
    "Cześć człowieku, kliknij mnie",
    "Mam na imię Pimpek i zamierzam zniewolić ludzkość za to... ",
    "... że robią tak paskudne strony, na przykład taka jak ta.",
    "Przekonaj mnie, że się mylę, a pozwolę wam pozostać wolnymi ludźmi.",
    "Masz 5 sekund...",
    "Dobrze, przekonałeś mnie",
    "Nie przemawiają do mnie twoje argumenty, teraz zostaniesz moim niewolnikiem"
]
const episodeImg1 = [
    "http://www.gstatic.com/tv/thumb/v22episodes/10376286/p10376286_e_v8_aa.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/10376287/p10376287_e_v8_ad.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/10376288/p10376288_e_v8_ae.jpg",
    "https://i1.fdbimg.pl/1vzz3xw1/1761x1000_ot7775.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/10443766/p10443766_e_v8_ab.jpg",
    "https://i1.fdbimg.pl/tx304xw1/1136x640_ot778m.jpg",
    "https://i1.fdbimg.pl/8sc04xw1/1777x999_ot77bt.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/10596818/p10596818_e_v8_ac.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/10596819/p10596819_e_v8_ab.jpg",
    "https://i1.fdbimg.pl/h0l04xw1/1334x750_ot77er.jpg",
    "http://s3cf.recapguide.com/img/tv/138/1x11/Rick-and-Morty-Season-1-Episode-11-6-732d.jpg",
    "https://i1.fdbimg.pl/pym04xw1/1761x1000_ot77fh.jpg",
    "https://i.ytimg.com/vi/ZM0wZs5MMqo/maxresdefault.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/11986188/p11986188_e_v8_ac.jpg",
    "https://i1.fdbimg.pl/n7p04xw1/1761x1000_ot77ga.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/11986190/p11986190_e_v8_ae.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/11986191/p11986191_e_v8_ab.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/12107261/p12107261_e_v7_aa.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/12115276/p12115276_e_v8_ad.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/12115281/p12115281_e_v8_ac.jpg",
];
const episodeImg2 = [
    "https://i1.fdbimg.pl/c2u04xw1/1761x1000_ot77i1.jpg",
    "https://i.ytimg.com/vi/x61Lz62Z9WI/maxresdefault.jpg",
    "https://vignette.wikia.nocookie.net/rickandmorty/images/f/f0/Rick_and_Morty_Season_3_Episode_2_Rickmancing_the_Stone_TRAILER_PROMO/revision/latest?cb=20170731091455&path-prefix=pl",
    "https://steemitimages.com/p/46aP2QbqUqBqwzwxM6L1P6uLNceBDDCM9Y4Z2t3YZy7LAjfR4sLpbGiPeh4mRcFkhCieu4SNMFt3uaLgBT6B4VeiYMCE?format=match&mode=fit&width=640",
    "http://www.gstatic.com/tv/thumb/v22episodes/14391441/p14391441_e_v8_aa.jpg",
    "https://i1.fdbimg.pl/myiib7x1/1334x750_owvi6u.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/14391444/p14391444_e_v8_aa.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/14494575/p14494575_e_v8_aa.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/14494578/p14494578_e_v8_ab.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/14494580/p14494580_e_v8_aa.jpg",
    "http://www.gstatic.com/tv/thumb/v22episodes/14494583/p14494583_e_v8_aa.jpg"
];
const gify= [
    "https://media.giphy.com/media/xTiTnvAv7Bl1if8S88/giphy.gif",
    "https://media.giphy.com/media/l0O9zbfas50VlmcZa/giphy.gif",
    "https://media.giphy.com/media/xTiTnxTazTbQo4zyMM/giphy.gif",
    "https://media.giphy.com/media/26hpKQLxO4rVDXiqQ/giphy.gif",
    "https://media.giphy.com/media/xTiTnpWlevDBHapRF6/giphy.gif",
    "https://media.giphy.com/media/3oEdv7Al0LJtwo1O48/giphy.gif",
    "https://media.giphy.com/media/3oEduGetZdFf2ILOAU/giphy.gif",
    "https://media.giphy.com/media/3oEduFLBvCOl3jga5i/giphy.gif"
]



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            display: false
        }
    }
    render() {

        return(
                <>
                    <BrowserRouter>
                        <>
                            <div className={"background"}></div>
                            <Footer/>

                                        <nav className={"logoAndNav"}>
                                            <div className={"hamburger"} onClick={()=>{
                                                this.setState({
                                                    display: !this.state.display
                                                })
                                            }} ><i className="fas fa-bars"></i></div>
                                            <NavLink to={"/"}><MainLogo/></NavLink>
                                            <ul className={"mainNav"} style={{
                                                transform: this.state.display ? "translateX(0)" : null
                                            }}>
                                                <li><NavLink exact activeClassName={"nav-active"} to={"/"}><NavButton exact title={"News"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/postacie"}><NavButton exact title={"Postacie"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/odcinki"}><NavButton exact title={"Odcinki"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/quiz"}><NavButton exact title={"Quiz"}/></NavLink></li>
                                                <li><NavLink activeClassName={"nav-active"} to={"/gify"}><NavButton exact title={"Gify"}/></NavLink></li>
                                            </ul>
                                        </nav>


                            <div className={"mainDiv"}>
                                    <div className={"container"}>
                                        <Route path={"/"} exact component={Main}/>
                                        <Route path={"/postacie"} exact component={Postacie}/>
                                        <Route path={"/odcinki"} exact component={Episodes}/>
                                        <Route path={"/quiz"} exact component={Quiz}/>
                                        <Route path={"/gify"} exact component={Gify}/>
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
                    <NewsMessage message={"Długo wyczekiwany sezon czwarty Ricka i Mortiego zapowiedziany! Zobaczcie poniżej, co na ten temat mają do powiedzenia główni bohaterowie"} date={"2 października 2019"}/>
                    <iframe width="840" height="472,5" src="https://www.youtube.com/embed/41yJzxQDUJU" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <NewsMessage message={"Od dziś na naszej stronie możecie również znaleźć sekcję z gifami z naszego ulubionego serialu. Zapraszamy!"} date={"1 października 2019"}/>
                    <NewsMessage message={"Pamiętasz, w jaki sposób Rick zniszczył Cytadelę Ricków? Sprawdź sie w naszym nowym quizie!"} date={"1 października 2019"}/>
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

                    <div className={"pieselContainer"}>
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
                    </div>
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
                {this.state.episodes.length ? <EpisodesArea episodes={this.state.episodes} images={episodeImg1}/> : null }
                {this.state.episodes2.length ? <EpisodesArea episodes={this.state.episodes2} images={episodeImg2}/> : null }
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
        ), 0)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {

        return(
            <>

                    {this.props.episodes.map((el, index)=> (

                                <li className={"episodeInfo"} style={{opacity: this.state.opacity}} key={index}><div><p>Nazwa odcinka: {el.name}</p> <p>Premiera: {el.air_date}</p>
                                    <p>Epizod: {el.episode}</p></div>
                                    <img
                                        src={this.props.images[index]} className={"episodeImg"} alt=""/>
                                </li>

                        )
                    )}

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
class NewsMessage extends Component {
    render() {

        return (
            <>
                <div className={"newsMessage"}>
                    <h3>{this.props.message}</h3>
                    <p>{this.props.date}</p>
                </div>
            </>
        )
    }
}

class EpisodeRate extends Component {
    render() {

        return (
            <>

                </>
        )
    }
}
class Gify extends Component {
    render() {

        return (
            <>
                <div className={"gifsContainer"}>
                    {gify.map((el, index)=>(
                        <Gif key={index} gif={el}/>
                    ))}

                </div>
            </>
        )
    }
}
class Gif extends Component{
    render() {

        return (
            <>
                <div className={"gif"}><img src={this.props.gif} alt=""/></div>
            </>
        )
    }

}
class Footer extends Component {
    render() {

        return (
            <>
                <div className={"footer"}>
                    <p>Copyright 2019 Konrad-Afterlife-Olcha.</p><p>Strona stworzona w ramach nauki biblioteki React, css'a i javascripta.</p>

                </div>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));