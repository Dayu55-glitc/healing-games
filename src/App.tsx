import React, { useState } from 'react';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import { gameData } from './data/gameData';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState<{
    id: string;
    title: string;
    url: string;
  } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePlayGame = (gameId: string) => {
    const game = gameData.find(game => game.id === gameId);
    if (game) {
      setCurrentGame({
        id: game.id,
        title: game.title,
        url: game.url
      });
      setModalOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setCurrentGame(null);
    }, 300); // Wait for animation to complete
    document.body.style.overflow = ''; // Restore scrolling
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? '' : 'hidden';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-violet-50 text-gray-600">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white/90 shadow-sm py-4">
        <div className="container mx-auto px-5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 no-underline">
            <span className="text-2xl bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">🎮</span>
            <span className="text-xl font-semibold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">Healing Games</span>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#" className="font-medium text-gray-600 hover:text-red-400 transition-colors">Home</a>
            <a href="#" className="font-medium text-gray-600 hover:text-red-400 transition-colors">Games</a>
            <a href="#" className="font-medium text-gray-600 hover:text-red-400 transition-colors">About</a>
            <a href="#" className="font-medium text-gray-600 hover:text-red-400 transition-colors">Blog</a>
            <a href="#" className="font-medium text-gray-600 hover:text-red-400 transition-colors">Contact</a>
          </div>
          <button 
            className="md:hidden text-2xl text-gray-600 bg-transparent border-none cursor-pointer"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white z-20 p-5 shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-5 right-5 text-2xl text-gray-600 bg-transparent border-none cursor-pointer"
          onClick={toggleMobileMenu}
        >
          ×
        </button>
        <div className="mt-16 flex flex-col gap-5">
          <a href="#" className="text-lg font-medium text-gray-600 hover:text-red-400 py-2 border-b border-gray-200">Home</a>
          <a href="#" className="text-lg font-medium text-gray-600 hover:text-red-400 py-2 border-b border-gray-200">Games</a>
          <a href="#" className="text-lg font-medium text-gray-600 hover:text-red-400 py-2 border-b border-gray-200">About</a>
          <a href="#" className="text-lg font-medium text-gray-600 hover:text-red-400 py-2 border-b border-gray-200">Blog</a>
          <a href="#" className="text-lg font-medium text-gray-600 hover:text-red-400 py-2 border-b border-gray-200">Contact</a>
        </div>
      </div>
      <div 
        className={`fixed inset-0 bg-black/50 z-15 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Header */}
      <header className="text-center py-16 px-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <span className="absolute top-[10%] left-[20%] text-2xl text-red-400">❤️</span>
          <span className="absolute top-[15%] right-[25%] text-2xl text-purple-500">☁️</span>
          <span className="absolute bottom-[20%] left-[30%] text-2xl text-red-400">✨</span>
        </div>
        <div className="container mx-auto">
          <div className="inline-flex items-center gap-4 mb-5">
            <span className="text-3xl text-red-400">❤️</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">Find Your Inner Peace</h1>
            <span className="text-3xl text-purple-500">❤️</span>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-2">Discover games that nurture your soul, calm your mind, and bring joy to your daily life.</p>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">Founded in 2020, Healing Games has helped over 500,000 people find peace and balance through interactive digital experiences.</p>
        </div>
      </header>

      {/* Main Content - Games Grid */}
      <main className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {gameData.map(game => (
            <GameCard 
              key={game.id}
              game={game}
              onPlay={handlePlayGame}
            />
          ))}
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 bg-white/70">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Why Choose Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl mb-4 bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">🧘</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mindfulness</h3>
              <p className="text-gray-600">Our games are designed to promote mindfulness and present-moment awareness, helping reduce stress and anxiety.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl mb-4 bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Growth</h3>
              <p className="text-gray-600">Experience games that foster personal growth and emotional well-being through meaningful interactions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-4xl mb-4 bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">💫</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Creative Expression</h3>
              <p className="text-gray-600">Express yourself creatively and discover new ways to explore your imagination through our interactive experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-red-400/5 to-purple-500/5 text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="max-w-xl mx-auto text-gray-600 mb-8">Subscribe to our newsletter to receive updates on new game releases, wellness tips, and exclusive offers.</p>
          <form className="flex max-w-md mx-auto">
            <input 
              type="email" 
              className="flex-1 py-4 px-5 border-2 border-gray-200 rounded-l-lg text-base focus:outline-none focus:border-red-400 transition-colors" 
              placeholder="Your email address" 
              required 
            />
            <button 
              type="submit" 
              className="bg-gradient-to-r from-red-400 to-purple-500 text-white border-0 py-0 px-6 rounded-r-lg text-base font-medium cursor-pointer hover:from-red-500 hover:to-purple-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 py-16 mt-10">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-red-400 after:to-purple-500">About Us</h3>
              <p className="text-gray-700">Dedicated to bringing peace and healing through interactive experiences and mindful gaming.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-red-400 after:to-purple-500">Explore</h3>
              <ul className="list-none">
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Games</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Wellness Blog</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Community</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-red-400 after:to-purple-500">Support</h3>
              <ul className="list-none">
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Help Center</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Contact</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Privacy</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-red-400 after:to-purple-500">Connect</h3>
              <ul className="list-none">
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Twitter</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Instagram</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Facebook</a></li>
                <li className="mb-3"><a href="#" className="text-gray-700 hover:text-red-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-red-400 before:text-lg before:font-bold">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-5 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>&copy; 2023 Healing Games. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Game Modal */}
      {currentGame && (
        <GameModal 
          isOpen={modalOpen}
          title={currentGame.title}
          gameUrl={currentGame.url}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;