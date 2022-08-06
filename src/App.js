import { Suspense } from 'react';
import './App.css';
import Header from './Components/HeaderComponent/Header';
import Home from './Components/Pages/Home';
import Work from './Components/Pages/Work';
import About from './Components/Pages/About';
import Team from './Components/Pages/Team';
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Components/FooterComponent/Footer';
import AnimatedCursor from './Components/CursorComponent/Cursor';
import {useLocation} from "react-router-dom";
import { useEffect } from 'react';


const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Suspense fallback={null}>
    <Router>
    <>
    <ScrollToTop />
    <AnimatedCursor />
    <Header />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/Work' element={ <Work />} />
      <Route path='/About' element={ <About />} />
      <Route path='/Team' element={ <Team />} />
      <Route path='/Contact' element={ <Contact />} />
    </Routes>
    <Footer/>
    </>
    </Router>
    </Suspense>
  );
}

export default App;
