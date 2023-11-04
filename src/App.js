import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Services from "./components/Services/services";
import Portfolio from "./components/Portfolio/portfolio";
import Skills from "./components/Skills/skills"
import Timeline from "./components/Timeline/timeline";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <br></br>
            <Intro />
            <br></br>
            <Services />
            <br></br>
            <Portfolio />
            <br></br>
            <Skills />
            <br></br>
            <Timeline />
            <br></br>
            <Contact />
            <br></br>
            <Footer />
        </div>
    );
}

export default App;
