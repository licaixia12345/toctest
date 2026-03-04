# 美丽修行小游戏 - 技术架构文档

## 1. 技术栈选型

### 1.1 核心技术栈
- **框架**: React 18 + TypeScript
- **构建工具**: Vite 5.x
- **样式方案**: Tailwind CSS 3.x
- **动画库**: Framer Motion
- **图标库**: Lucide React

### 1.2 状态管理
- **React Context API**: 全局状态管理
- **useReducer**: 复杂状态逻辑
- **自定义 Hooks**: 业务逻辑封装

### 1.3 数据存储
- **localStorage**: 本地游戏进度保存
- **游戏状态序列化**: JSON 格式存储

## 2. 项目架构

### 2.1 目录结构
```
mei/
├── public/                 # 静态资源
│   ├── images/            # 游戏图片资源
│   └── sounds/            # 音效资源
├── src/
│   ├── components/        # React 组件
│   │   ├── common/       # 通用组件
│   │   ├── game/         # 游戏相关组件
│   │   ├── ui/           # UI 基础组件
│   │   └── layout/       # 布局组件
│   ├── contexts/         # React Context
│   │   └── GameContext.tsx
│   ├── hooks/            # 自定义 Hooks
│   │   ├── useGameState.ts
│   │   ├── useSkincare.ts
│   │   └── useShop.ts
│   ├── types/            # TypeScript 类型定义
│   │   └── index.ts
│   ├── utils/            # 工具函数
│   │   ├── storage.ts
│   │   └── gameUtils.ts
│   ├── constants/        # 常量定义
│   │   └── index.ts
│   ├── pages/            # 页面组件
│   │   ├── Home.tsx
│   │   ├── Skincare.tsx
│   │   ├── Shop.tsx
│   │   ├── Inventory.tsx
│   │   └── Tasks.tsx
│   ├── App.tsx           # 主应用组件
│   ├── main.tsx          # 入口文件
│   └── index.css         # 全局样式
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 3. 核心模块设计

### 3.1 游戏状态管理模块

#### 3.1.1 状态结构
```typescript
interface GameState {
  player: Player;
  skinStats: SkinStats;
  inventory: Inventory;
  tasks: Task[];
  shop: Shop;
  time: GameTime;
  statistics: Statistics;
}
```

#### 3.1.2 状态操作
- 初始化游戏状态
- 保存/加载游戏进度
- 状态更新和同步

### 3.2 护肤系统模块

#### 3.2.1 护肤步骤流程
```
清洁 → 补水 → 精华 → 保湿 → 防晒（日间）
清洁 → 补水 → 精华 → 保湿 → 特殊护理（夜间）
```

#### 3.2.2 护肤品效果计算
- 基础效果值
- 品质加成系数
- 连击奖励倍数
- 时段加成系数

### 3.3 任务系统模块

#### 3.3.1 任务类型
- **每日任务**: 每日刷新，基础奖励
- **成就任务**: 一次性完成，高额奖励
- **收集任务**: 收集特定物品，阶段奖励

#### 3.3.2 任务状态机
```
未解锁 → 进行中 → 已完成 → 已领取奖励
```

### 3.4 商店系统模块

#### 3.4.1 商品分类
- 清洁类：洁面乳、卸妆油
- 补水类：化妆水、喷雾
- 精华类：各种功效精华
- 保湿类：乳液、面霜
- 特殊护理：面膜、去角质

#### 3.4.2 商品刷新机制
- 基础商品：永久解锁
- 限时商品：定期刷新
- 等级解锁：玩家等级限制

## 4. 数据模型设计

### 4.1 玩家模型
```typescript
interface Player {
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
```

### 4.2 肌肤状态模型
```typescript
interface SkinStats {
  hydration: number;      // 水分值 (0-100)
  radiance: number;       // 光泽度 (0-100)
  elasticity: number;     // 弹性值 (0-100)
  cleanliness: number;    // 清洁度 (0-100)
  health: number;         // 健康值 (0-100)
}
```

### 4.3 护肤品模型
```typescript
interface SkincareProduct {
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
```

### 4.4 任务模型
```typescript
interface Task {
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
```

## 5. 核心算法

### 5.1 肌肤状态变化算法
```typescript
function calculateSkinStatChange(
  baseValue: number,
  productEffect: number,
  qualityMultiplier: number,
  comboBonus: number
): number {
  const change = productEffect * qualityMultiplier * (1 + comboBonus);
  return Math.min(100, Math.max(0, baseValue + change));
}
```

### 5.2 经验值计算算法
```typescript
function calculateExperience(baseExp: number, level: number): number {
  return baseExp * Math.pow(1.1, level - 1);
}
```

### 5.3 商品价格算法
```typescript
function calculateProductPrice(
  basePrice: number,
  quality: number,
  effect: number
): number {
  return basePrice * quality * effect;
}
```

## 6. 性能优化策略

### 6.1 渲染优化
- **React.memo**: 组件记忆化
- **useMemo/useCallback**: 缓存计算结果和函数
- **虚拟列表**: 大量数据列表渲染
- **懒加载**: 组件按需加载

### 6.2 状态更新优化
- **批量更新**: 合并多次状态更新
- **防抖节流**: 频繁操作的处理
- **状态选择器**: 精确订阅状态变化

### 6.3 资源优化
- **图片压缩**: WebP 格式优先
- **雪碧图**: 合并小图标
- **代码分割**: 路由级别代码分割
- **Tree Shaking**: 移除未使用代码

## 7. 数据持久化

### 7.1 存储策略
```typescript
// localStorage 存储结构
{
  'beauty_cultivation_save': {
    version: string;
    timestamp: number;
    gameState: GameState;
  }
}
```

### 7.2 自动保存机制
- 定时保存：每 5 分钟自动保存
- 事件触发保存：关键操作后立即保存
- 退出保存：页面卸载前保存

### 7.3 数据迁移
- 版本号管理
- 兼容旧版本数据
- 迁移函数编写

## 8. 动画系统设计

### 8.1 动画类型
- **页面切换动画**: 路由过渡效果
- **操作反馈动画**: 点击、成功、失败
- **数值变化动画**: 分数、进度条增长
- **特效动画**: 粒子效果、光效

### 8.2 动画性能
- 使用 CSS transform 代替 top/left
- 使用 will-change 提示浏览器
- 避免同时触发大量动画
- 使用 requestAnimationFrame

## 9. 响应式设计

### 9.1 断点定义
```css
/* 移动端 */
@media (max-width: 640px) { }

/* 平板 */
@media (min-width: 641px) and (max-width: 1024px) { }

/* 桌面 */
@media (min-width: 1025px) { }
```

### 9.2 适配策略
- 移动端优先设计
- 弹性布局（Flexbox/Grid）
- 相对单位（rem、vw、vh）
- 触摸友好设计

## 10. 错误处理

### 10.1 错误类型
- 数据加载错误
- 存储错误
- 计算错误
- 渲染错误

### 10.2 错误边界
- React Error Boundary
- 全局错误捕获
- 友好错误提示
- 错误日志记录

### 10.3 恢复策略
- 数据损坏回滚
- 默认值兜底
- 重新尝试机制

## 11. 测试策略

### 11.1 单元测试
- 工具函数测试
- 状态管理测试
- 算法逻辑测试

### 11.2 组件测试
- 组件渲染测试
- 交互行为测试
- Props 验证测试

### 11.3 集成测试
- 游戏流程测试
- 数据流测试
- 持久化测试

## 12. 部署方案

### 12.1 构建配置
- 生产环境优化
- 资源压缩
- Source Map 生成
- 环境变量注入

### 12.2 部署平台
- Vercel（推荐）
- Netlify
- GitHub Pages
- 自建服务器

### 12.3 CI/CD
- 自动化构建
- 自动化测试
- 自动化部署
