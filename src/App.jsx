// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from './components/navbar/Navbar';

// PAGES
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App;