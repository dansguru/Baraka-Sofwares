import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Projects from "./pages/Projects";
import DansPage from "./pages/DansPage";
import Footer from "./components/Footer";
import NotFoundScreen from "./pages/NotFoundScreen.jsx";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen">
                <Navbar />

                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <ServicesSection id="services" />
                            <AboutSection id="about" />
                            <TeamSection id="team" />
                            <ContactSection id="contact" />
                            <Footer />
                        </>
                    } />


                    <Route path="/projects" element={
                        <>
                            <Projects />
                            <Footer />
                        </>
                    } />


                    <Route path="/dans" element={
                        <>
                            <DansPage />
                            <Footer />
                        </>
                    } />


                    <Route path="*" element={
                        <>
                            <NotFoundScreen />
                            <Footer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;