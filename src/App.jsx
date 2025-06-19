import './App.css';
import Flag from './components/Flag/Flag.jsx';
import LC from './components/LogoandIcon/LC.jsx';
import Nav from './components/Nav/NavBar.jsx';
import Slide from './components/Slide/Slide.jsx';
import About from './components/About/About.jsx';
import Services from './components/our-services/services.jsx';
import Serv from './components/serv/Serv1.jsx';
import Project from './components/Project/Project.jsx';
import Footer from './components/footer/Footer.jsx';
import End from './components/FooterEnd/FooterEnd.jsx'
import End1 from './components/End/End.jsx'

const App = () => {
  return (
    <div>
      <Flag/>
      <LC/>
      <Nav/>
      <Slide/>
      <About/>
      <Services/>
      <Serv/>
      <Project/>
      <Footer/>
      <End/>
      <End1/>
    </div>
  )
}

export default App
