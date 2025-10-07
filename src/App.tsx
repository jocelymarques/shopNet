import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
// import About from './pages/about';
// import Services from './pages/services';
// import Pricing from './pages/pricing';
// import Contact from './pages/contact';

function App() {


  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
