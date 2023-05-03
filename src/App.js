import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Contact from './pages/contact';
import UnkownPage from './pages/unkownPage';
import Home from './pages/home';
import Articles from './pages/Articles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='articles' element={<Articles />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<UnkownPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
