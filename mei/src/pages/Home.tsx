import React from 'react';
import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Droplets, Shield, Zap } from 'lucide-react';

const StatBar: React.FC<{
  label: string;
  value: number;
  color: string;
  icon: React.ReactNode;
}> = ({ label, value, color, icon }) => (
  <div className="mb-3">
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className="text-sm font-bold text-gray-900">{Math.round(value)}</span>
    </div>
    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  </div>
);

export const Home: React.FC = () => {
  const { state } = useGame();
  const { player, skinStats } = state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{player.avatar}</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{player.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">等级 {player.level}</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(player.experience / (100 * Math.pow(1.1, player.level - 1))) * 100}%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">💰</span>
                <span className="text-xl font-bold text-yellow-600">{player.gold}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💎</span>
                <span className="text-xl font-bold text-blue-600">{player.diamond}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skin Stats */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-4"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-pink-500" />
            肌肤状态
          </h2>
          <StatBar
            label="水分值"
            value={skinStats.hydration}
            color="bg-gradient-to-r from-blue-400 to-blue-600"
            icon={<Droplets className="w-5 h-5 text-blue-500" />}
          />
          <StatBar
            label="光泽度"
            value={skinStats.radiance}
            color="bg-gradient-to-r from-yellow-400 to-yellow-600"
            icon={<Sparkles className="w-5 h-5 text-yellow-500" />}
          />
          <StatBar
            label="弹性值"
            value={skinStats.elasticity}
            color="bg-gradient-to-r from-purple-400 to-purple-600"
            icon={<Heart className="w-5 h-5 text-purple-500" />}
          />
          <StatBar
            label="清洁度"
            value={skinStats.cleanliness}
            color="bg-gradient-to-r from-green-400 to-green-600"
            icon={<Shield className="w-5 h-5 text-green-500" />}
          />
          <StatBar
            label="健康值"
            value={skinStats.health}
            color="bg-gradient-to-r from-pink-400 to-pink-600"
            icon={<Zap className="w-5 h-5 text-pink-500" />}
          />
        </motion.div>

        {/* Time Display */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl p-6 text-white"
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">
              {String(state.time.hour).padStart(2, '0')}:
              {String(state.time.minute).padStart(2, '0')}
            </div>
            <div className="text-lg opacity-90">
              {state.time.isDaytime ? '☀️ 早晨护肤时间' : '🌙 夜间修护时间'}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
