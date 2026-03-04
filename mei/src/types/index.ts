export interface Player {
  id: string;
  name: string;
  level: number;
  experience: number;
  gold: number;
  diamond: number;
  avatar: string;
  createdAt: number;
  lastLoginAt: number;
}

export interface SkinStats {
  hydration: number;
  radiance: number;
  elasticity: number;
  cleanliness: number;
  health: number;
}

export type ProductType = 'cleanse' | 'tone' | 'serum' | 'moisturize' | 'sunscreen' | 'mask';
export type QualityLevel = 'basic' | 'good' | 'excellent' | 'premium';

export interface ProductEffects {
  hydration?: number;
  radiance?: number;
  elasticity?: number;
  cleanliness?: number;
}

export interface SkincareProduct {
  id: string;
  name: string;
  type: ProductType;
  quality: QualityLevel;
  effects: ProductEffects;
  price: number;
  description: string;
  icon: string;
  unlockLevel: number;
}

export interface Inventory {
  products: Record<string, number>;
  unlocked: string[];
}

export type TaskType = 'daily' | 'achievement' | 'collection';
export type TaskStatus = 'locked' | 'in_progress' | 'completed' | 'claimed';
export type RefreshType = 'daily' | 'once' | 'never';

export interface TaskReward {
  gold: number;
  diamond: number;
  experience: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  progress: number;
  target: number;
  reward: TaskReward;
  status: TaskStatus;
  refreshType: RefreshType;
}

export interface Shop {
  items: string[];
  limitedItems: string[];
}

export interface GameTime {
  hour: number;
  minute: number;
  isDaytime: boolean;
}

export interface Statistics {
  totalSkincareSessions: number;
  totalProductsUsed: number;
  totalTasksCompleted: number;
  playTimeMinutes: number;
}

export interface GameState {
  player: Player;
  skinStats: SkinStats;
  inventory: Inventory;
  tasks: Task[];
  shop: Shop;
  time: GameTime;
  statistics: Statistics;
  currentRoutine: string[];
  routineComplete: boolean;
}
