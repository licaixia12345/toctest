import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { GameState, SkincareProduct, Task } from '../types';
import { createInitialGameState, QUALITY_MULTIPLIERS, EXP_PER_LEVEL } from '../constants';

type GameAction =
  | { type: 'USE_PRODUCT'; productId: string; product: SkincareProduct }
  | { type: 'BUY_PRODUCT'; productId: string; price: number }
  | { type: 'COMPLETE_TASK'; taskId: string }
  | { type: 'UPDATE_TASK_PROGRESS'; taskId: string; progress: number }
  | { type: 'SET_TIME'; hour: number; minute: number }
  | { type: 'LOAD_GAME'; state: GameState }
  | { type: 'RESET_ROUTINE' };

const calculateStatChange = (
  baseEffect: number,
  quality: string,
  comboBonus: number = 0
): number => {
  const multiplier = QUALITY_MULTIPLIERS[quality] || 1;
  return baseEffect * multiplier * (1 + comboBonus);
};

const calculateExperience = (level: number): number => {
  return EXP_PER_LEVEL * Math.pow(1.1, level - 1);
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'USE_PRODUCT': {
      const { product } = action;
      const newStats = { ...state.skinStats };
      
      Object.entries(product.effects).forEach(([stat, value]) => {
        if (value && stat in newStats) {
          const change = calculateStatChange(value, product.quality);
          newStats[stat as keyof typeof newStats] = Math.min(
            100,
            Math.max(0, newStats[stat as keyof typeof newStats] + change)
          );
        }
      });

      const newInventory = { ...state.inventory };
      newInventory.products = {
        ...newInventory.products,
        [product.id]: (newInventory.products[product.id] || 0) + 1,
      };

      const expGain = 10;
      const newExp = state.player.experience + expGain;
      const levelUp = newExp >= calculateExperience(state.player.level);
      
      const newTasks = state.tasks.map(task => {
        if (task.status === 'in_progress') {
          let shouldUpdate = false;
          let newProgress = task.progress;

          if (task.description.includes('护肤流程') && state.routineComplete) {
            shouldUpdate = true;
            newProgress = Math.min(task.target, task.progress + 1);
          } else if (task.description.includes('化妆水') && product.type === 'tone') {
            shouldUpdate = true;
            newProgress = Math.min(task.target, task.progress + 1);
          } else if (task.description.includes('洁面') && product.type === 'cleanse') {
            shouldUpdate = true;
            newProgress = Math.min(task.target, task.progress + 1);
          }

          if (shouldUpdate && newProgress >= task.target) {
            return { ...task, progress: newProgress, status: 'completed' as const };
          } else if (shouldUpdate) {
            return { ...task, progress: newProgress };
          }
        }
        return task;
      });

      const hydrationTask = newTasks.find(t => t.description.includes('水分值'));
      if (hydrationTask && hydrationTask.status === 'in_progress') {
        if (newStats.hydration >= hydrationTask.target) {
          hydrationTask.status = 'completed';
          hydrationTask.progress = hydrationTask.target;
        } else {
          hydrationTask.progress = newStats.hydration;
        }
      }

      return {
        ...state,
        skinStats: newStats,
        inventory: newInventory,
        player: {
          ...state.player,
          experience: newExp,
          level: levelUp ? state.player.level + 1 : state.player.level,
          gold: levelUp ? state.player.gold + 50 : state.player.gold,
        },
        tasks: newTasks,
        statistics: {
          ...state.statistics,
          totalProductsUsed: state.statistics.totalProductsUsed + 1,
        },
        routineComplete: state.currentRoutine.length >= 3,
      };
    }

    case 'BUY_PRODUCT': {
      const canAfford = state.player.gold >= action.price;
      if (!canAfford) return state;

      const newInventory = { ...state.inventory };
      newInventory.products = {
        ...newInventory.products,
        [action.productId]: (newInventory.products[action.productId] || 0) + 1,
      };

      const collectionTask = state.tasks.find(t => t.type === 'collection');
      const uniqueProducts = Object.keys(newInventory.products).length;
      
      const newTasks = state.tasks.map(task => {
        if (task.id === collectionTask?.id && task.status === 'in_progress') {
          const newProgress = Math.min(task.target, uniqueProducts);
          if (newProgress >= task.target) {
            return { ...task, progress: newProgress, status: 'completed' as const };
          }
          return { ...task, progress: newProgress };
        }
        return task;
      });

      return {
        ...state,
        inventory: newInventory,
        player: {
          ...state.player,
          gold: state.player.gold - action.price,
        },
        tasks: newTasks,
      };
    }

    case 'COMPLETE_TASK': {
      const task = state.tasks.find(t => t.id === action.taskId);
      if (!task || task.status !== 'completed') return state;

      return {
        ...state,
        player: {
          ...state.player,
          gold: state.player.gold + task.reward.gold,
          diamond: state.player.diamond + task.reward.diamond,
          experience: state.player.experience + task.reward.experience,
        },
        tasks: state.tasks.map(t =>
          t.id === action.taskId ? { ...t, status: 'claimed' as const } : t
        ),
        statistics: {
          ...state.statistics,
          totalTasksCompleted: state.statistics.totalTasksCompleted + 1,
        },
      };
    }

    case 'UPDATE_TASK_PROGRESS': {
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.taskId
            ? { ...task, progress: Math.min(action.progress, task.target) }
            : task
        ),
      };
    }

    case 'SET_TIME': {
      return {
        ...state,
        time: {
          hour: action.hour,
          minute: action.minute,
          isDaytime: action.hour >= 6 && action.hour < 18,
        },
      };
    }

    case 'LOAD_GAME': {
      return action.state;
    }

    case 'RESET_ROUTINE': {
      return {
        ...state,
        currentRoutine: [],
        routineComplete: false,
      };
    }

    default:
      return state;
  }
};

interface GameContextType {
  state: GameState;
  useProduct: (product: SkincareProduct) => void;
  buyProduct: (productId: string, price: number) => boolean;
  completeTask: (taskId: string) => void;
  setTime: (hour: number, minute: number) => void;
  resetRoutine: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, null, () => {
    const saved = localStorage.getItem('beauty_cultivation_save');
    if (saved) {
      try {
        return JSON.parse(saved) as GameState;
      } catch {
        return createInitialGameState();
      }
    }
    return createInitialGameState();
  });

  useEffect(() => {
    localStorage.setItem('beauty_cultivation_save', JSON.stringify(state));
  }, [state]);

  const useProduct = (product: SkincareProduct) => {
    dispatch({ type: 'USE_PRODUCT', productId: product.id, product });
  };

  const buyProduct = (productId: string, price: number): boolean => {
    if (state.player.gold >= price) {
      dispatch({ type: 'BUY_PRODUCT', productId, price });
      return true;
    }
    return false;
  };

  const completeTask = (taskId: string) => {
    dispatch({ type: 'COMPLETE_TASK', taskId });
  };

  const setTime = (hour: number, minute: number) => {
    dispatch({ type: 'SET_TIME', hour, minute });
  };

  const resetRoutine = () => {
    dispatch({ type: 'RESET_ROUTINE' });
  };

  return (
    <GameContext.Provider
      value={{
        state,
        useProduct,
        buyProduct,
        completeTask,
        setTime,
        resetRoutine,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
