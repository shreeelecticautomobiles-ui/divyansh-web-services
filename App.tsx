
import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Demos from './pages/Demos';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

// Use HashRouter in iframe environments (like AI Studio preview) to prevent SecurityError,
// but use BrowserRouter for clean URLs on the production live site.
const Router = (typeof window !== 'undefined' && window.self !== window.top)
  ? HashRouter
  : BrowserRouter;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
