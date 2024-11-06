import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import ShirtsPage from './pages/mens/ShirtsPage';
import PantsPage from './pages/mens/PantsPage';
import JacketsPage from './pages/mens/JacketsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MensPage />} />
            <Route path="/women" element={<WomensPage />} />
            <Route path="/men/shirts" element={<ShirtsPage />} />
            <Route path="/men/pants" element={<PantsPage />} />
            <Route path="/men/jackets" element={<JacketsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;