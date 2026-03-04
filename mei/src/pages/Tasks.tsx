import React from 'react';
import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Gift } from 'lucide-react';

export const Tasks: React.FC = () => {
  const { state, completeTask } = useGame();

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'daily':
        return '📅';
      case 'achievement':
        return '🏆';
      case 'collection':
        return '📦';
      default:
        return '📋';
    }
  };

  const handleCompleteTask = (taskId: string) => {
    completeTask(taskId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-4"
        >
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Gift className="w-8 h-8 text-pink-500" />
            任务中心
          </h1>
          <p className="text-gray-600 mt-2">
            完成任务获得丰厚奖励！
          </p>
        </motion.div>

        {/* Tasks List */}
        <div className="space-y-4">
          {state.tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg p-6 ${
                task.status === 'claimed' ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{getTaskIcon(task.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-lg">{task.title}</h3>
                    <div className="flex items-center gap-2">
                      {task.status === 'completed' && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCompleteTask(task.id)}
                          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                        >
                          领取奖励
                        </motion.button>
                      )}
                      {task.status === 'claimed' && (
                        <span className="text-green-600 font-medium flex items-center gap-1">
                          <CheckCircle className="w-5 h-5" />
                          已领取
                        </span>
                      )}
                      {task.status === 'in_progress' && (
                        <span className="text-gray-400">
                          <Circle className="w-5 h-5" />
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-1">{task.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">进度</span>
                      <span className="text-sm font-bold text-gray-900">
                        {task.progress} / {task.target}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${(task.progress / task.target) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Rewards */}
                  <div className="flex gap-3 mt-4">
                    <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                      <span className="text-lg">💰</span>
                      <span className="text-sm font-bold text-yellow-700">
                        +{task.reward.gold}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
                      <span className="text-lg">💎</span>
                      <span className="text-sm font-bold text-blue-700">
                        +{task.reward.diamond}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-purple-100 px-3 py-1 rounded-full">
                      <span className="text-lg">⭐</span>
                      <span className="text-sm font-bold text-purple-700">
                        +{task.reward.experience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-6 mt-4"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">游戏统计</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">💆</div>
              <div className="text-2xl font-bold text-gray-900">
                {state.statistics.totalSkincareSessions}
              </div>
              <div className="text-sm text-gray-600">护肤次数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🧴</div>
              <div className="text-2xl font-bold text-gray-900">
                {state.statistics.totalProductsUsed}
              </div>
              <div className="text-sm text-gray-600">产品使用</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-2xl font-bold text-gray-900">
                {state.statistics.totalTasksCompleted}
              </div>
              <div className="text-sm text-gray-600">完成任务</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="text-2xl font-bold text-gray-900">
                {Math.floor(state.statistics.playTimeMinutes / 60)}h{state.statistics.playTimeMinutes % 60}m
              </div>
              <div className="text-sm text-gray-600">游戏时间</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
