import {ThemeToggle} from "../components/ThemeToggle"
import {StarBackground} from "../components/StarBackground"
import {Navbar} from "../components/Navbar"
import {HeroSection} from "../components/HeroSection"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    	
    {/* Theme Toggle */}
    <ThemeToggle />
    {/* Background Effects */}
    <StarBackground />
    {/* Navbar */}
    <Navbar />
    {/* Main Content */}
    <main>
    <HeroSection />
    </main>
    {/* Footer */}

    </div>
  );
    
};

export default Home;
