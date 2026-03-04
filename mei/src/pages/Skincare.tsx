import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { SKINCARE_PRODUCTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import type { SkincareProduct } from '../types';

export const Skincare: React.FC = () => {
  const { state, useProduct } = useGame();
  const [selectedProduct, setSelectedProduct] = useState<SkincareProduct | null>(null);
  const [showEffect, setShowEffect] = useState(false);

  const availableProducts = SKINCARE_PRODUCTS.filter(
    (p) =>
      state.inventory.unlocked.includes(p.id) ||
      state.player.level >= p.unlockLevel
  );

  const handleUseProduct = (product: SkincareProduct) => {
    setSelectedProduct(product);
    setShowEffect(true);
    useProduct(product);

    setTimeout(() => {
      setShowEffect(false);
      setSelectedProduct(null);
    }, 1500);
  };

  const getRoutineSteps = () => {
    const steps: SkincareProduct[] = [];
    const used = state.currentRoutine;

    if (used.length === 0) {
      return availableProducts.slice(0, 4);
    }

    return availableProducts;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-4"
        >
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-pink-500" />
            护肤流程
          </h1>
          <p className="text-gray-600 mt-2">
            {state.time.isDaytime ? '☀️ 日间防护流程' : '🌙 夜间修护流程'}
          </p>
        </motion.div>

        {/* Effect Animation */}
        <AnimatePresence>
          {showEffect && selectedProduct && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl mb-4"
                >
                  {selectedProduct.icon}
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  使用了 {selectedProduct.name}
                </h2>
                <div className="flex gap-4 justify-center">
                  {Object.entries(selectedProduct.effects).map(([stat, value]) => (
                    <motion.div
                      key={stat}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {stat === 'hydration' && '💧'}
                        {stat === 'radiance' && '✨'}
                        {stat === 'elasticity' && '💪'}
                        {stat === 'cleanliness' && '🛡️'}
                        {stat === 'health' && '❤️'}
                        {stat === 'hydration' && '水分'}
                        {stat === 'radiance' && '光泽'}
                        {stat === 'elasticity' && '弹性'}
                        {stat === 'cleanliness' && '清洁'}
                        {stat === 'health' && '健康'}
                        +{value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getRoutineSteps().map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleUseProduct(product)}
              className="bg-white rounded-2xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl text-center mb-3">{product.icon}</div>
              <h3 className="font-bold text-gray-900 text-center mb-1">
                {product.name}
              </h3>
              <div className="text-xs text-gray-600 text-center mb-2">
                {product.quality === 'basic' && '⭐ 基础'}
                {product.quality === 'good' && '⭐⭐ 良好'}
                {product.quality === 'excellent' && '⭐⭐⭐ 优秀'}
                {product.quality === 'premium' && '⭐⭐⭐⭐ 高级'}
              </div>
              <div className="flex flex-wrap gap-1 justify-center">
                {Object.entries(product.effects).map(([stat, value]) => (
                  <span
                    key={stat}
                    className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full"
                  >
                    +{value}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Routine Progress */}
        {state.currentRoutine.length > 0 && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-3xl shadow-xl p-6 mt-4"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">当前流程</h2>
            <div className="flex gap-2 flex-wrap">
              {state.currentRoutine.map((productId, index) => {
                const product = SKINCARE_PRODUCTS.find((p) => p.id === productId);
                return product ? (
                  <motion.div
                    key={productId}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full"
                  >
                    <span className="text-xl">{product.icon}</span>
                    <span className="font-medium text-gray-700">{product.name}</span>
                    {index < state.currentRoutine.length - 1 && (
                      <span className="text-gray-400">→</span>
                    )}
                  </motion.div>
                ) : null;
              })}
            </div>
            {state.routineComplete && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-4 flex items-center gap-2 text-green-600"
              >
                <Check className="w-6 h-6" />
                <span className="font-bold">护肤流程完成！获得额外奖励！</span>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
