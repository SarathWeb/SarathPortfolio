
import './App.css'; 
import Header from './/components/Header.jsx';
import About from './components/About.jsx';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Footer from  './components/Footer.jsx'
import Resume from './components/Resume.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';

function App() {
 return (
  <>
   <BrowserRouter>
   <Header />
      <Routes>
      <Route path='/' index element = {<Navigate to="/about" replace />} />
        <Route path='/about' index element = {<About />} />
        <Route path='/resume' element = {<Resume />} />
        <Route path='/project' element = {<Project />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>
      <Footer />
   </BrowserRouter>
  
  </>
 )
}
export default App
