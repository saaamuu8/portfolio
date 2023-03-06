// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from './components/navbar/Navbar';

// PAGES
import HomePage from "./pages/HomePage";

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App;