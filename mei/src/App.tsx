import React, { useState } from 'react';
import { GameProvider } from './contexts/GameContext';
import { Home } from './pages/Home';
import { Skincare } from './pages/Skincare';
import { Shop } from './pages/Shop';
import { Tasks } from './pages/Tasks';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Sparkles, ShoppingCart, ClipboardList } from 'lucide-react';

type Page = 'home' | 'skincare' | 'shop' | 'tasks';

const Navigation: React.FC<{
  currentPage: Page;
  onPageChange: (page: Page) => void;
}> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home' as Page, icon: HomeIcon, label: '首页' },
    { id: 'skincare' as Page, icon: Sparkles, label: '护肤' },
    { id: 'shop' as Page, icon: ShoppingCart, label: '商店' },
    { id: 'tasks' as Page, icon: ClipboardList, label: '任务' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onPageChange(item.id)}
                className={`flex flex-col items-center py-3 px-4 transition-colors ${
                  isActive
                    ? 'text-pink-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`}
                />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 w-12 h-1 bg-pink-600 rounded-t-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'skincare':
        return <Skincare />;
      case 'shop':
        return <Shop />;
      case 'tasks':
        return <Tasks />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pb-20">
      {renderPage()}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
