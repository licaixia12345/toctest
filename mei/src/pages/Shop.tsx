import React from 'react';
import { useGame } from '../contexts/GameContext';
import { SKINCARE_PRODUCTS } from '../constants';
import { motion } from 'framer-motion';
import { ShoppingCart, Lock } from 'lucide-react';

export const Shop: React.FC = () => {
  const { state, buyProduct } = useGame();

  const handleBuy = (product: typeof SKINCARE_PRODUCTS[0]) => {
    const success = buyProduct(product.id, product.price);
    if (success) {
      alert(`成功购买 ${product.name}！`);
    } else {
      alert('金币不足！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-4"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-pink-500" />
              护肤品商店
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span className="text-xl font-bold text-yellow-600">{state.player.gold}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💎</span>
                <span className="text-xl font-bold text-blue-600">{state.player.diamond}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKINCARE_PRODUCTS.map((product, index) => {
            const isUnlocked = state.player.level >= product.unlockLevel;
            const owned = state.inventory.products[product.id] || 0;

            return (
              <motion.div
                key={product.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-2xl shadow-lg p-4 ${
                  !isUnlocked ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{product.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">{product.name}</h3>
                      {!isUnlocked && (
                        <Lock className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {product.quality === 'basic' && '⭐ 基础'}
                      {product.quality === 'good' && '⭐⭐ 良好'}
                      {product.quality === 'excellent' && '⭐⭐⭐ 优秀'}
                      {product.quality === 'premium' && '⭐⭐⭐⭐ 高级'}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{product.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1">
                        <span className="text-2xl">💰</span>
                        <span className="text-lg font-bold text-yellow-600">
                          {product.price}
                        </span>
                      </div>
                      {owned > 0 ? (
                        <span className="text-sm text-green-600 font-medium">
                          已拥有 ×{owned}
                        </span>
                      ) : (
                        <button
                          onClick={() => handleBuy(product)}
                          disabled={!isUnlocked}
                          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          购买
                        </button>
                      )}
                    </div>
                    {product.unlockLevel > 1 && (
                      <div className="text-xs text-gray-400 mt-2">
                        {product.unlockLevel}级解锁
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-1 mt-3 flex-wrap">
                  {Object.entries(product.effects).map(([stat, value]) => (
                    <span
                      key={stat}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {stat === 'hydration' && '💧'}
                      {stat === 'radiance' && '✨'}
                      {stat === 'elasticity' && '💪'}
                      {stat === 'cleanliness' && '🛡️'}
                      {stat === 'health' && '❤️'}
                      +{value}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
