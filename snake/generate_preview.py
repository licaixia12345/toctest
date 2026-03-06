from PIL import Image, ImageDraw, ImageFont
import random

# 创建游戏预览图
width, height = 500, 600
img = Image.new('RGB', (width, height), '#1a1a2e')
draw = ImageDraw.Draw(img)

# 绘制标题
try:
    title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36)
    score_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
    small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
except:
    title_font = ImageFont.load_default()
    score_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

# 标题
draw.text((width//2, 30), "🐍 贪吃蛇", fill='#00ff88', font=title_font, anchor='mt')

# 分数
draw.text((width//2, 70), "得分: 30", fill='white', font=score_font, anchor='mt')

# 游戏区域
game_x, game_y = 50, 100
game_size = 400
draw.rectangle([game_x, game_y, game_x + game_size, game_y + game_size], 
               fill='#0a0a0a', outline='#00ff88', width=3)

# 绘制网格
grid_size = 20
for i in range(21):
    draw.line([(game_x + i * grid_size, game_y), (game_x + i * grid_size, game_y + game_size)], 
              fill='#1a1a1a', width=1)
    draw.line([(game_x, game_y + i * grid_size), (game_x + game_size, game_y + i * grid_size)], 
              fill='#1a1a1a', width=1)

# 绘制蛇
snake = [(10, 10), (9, 10), (8, 10), (7, 10), (6, 10)]
for i, (x, y) in enumerate(snake):
    color = '#00ff88' if i == 0 else f'rgba(0, 255, 136, {1 - i * 0.15})'
    px, py = game_x + x * grid_size + 1, game_y + y * grid_size + 1
    draw.rectangle([px, py, px + grid_size - 2, py + grid_size - 2], fill='#00ff88')
    if i == 0:
        # 蛇头眼睛
        draw.rectangle([px + 4, py + 4, px + 7, py + 7], fill='black')
        draw.rectangle([px + 11, py + 4, px + 14, py + 7], fill='black')

# 绘制食物
food_x, food_y = 15, 8
fx, fy = game_x + food_x * grid_size + grid_size // 2, game_y + food_y * grid_size + grid_size // 2
draw.ellipse([fx - 8, fy - 8, fx + 8, fy + 8], fill='#ff4444')

# 控制说明
draw.text((width//2, 520), "使用方向键 ↑ ↓ ← → 控制蛇的移动", fill='#888888', font=small_font, anchor='mt')
draw.text((width//2, 545), "按空格键暂停/继续游戏", fill='#888888', font=small_font, anchor='mt')

# 开始按钮
btn_x, btn_y = width//2 - 60, 570
draw.rounded_rectangle([btn_x, btn_y, btn_x + 120, btn_y + 40], radius=20, fill='#00ff88')
draw.text((width//2, btn_y + 20), "开始游戏", fill='#1a1a2e', font=score_font, anchor='mm')

# 保存图片
img.save('/workspace/snake/game_preview.png')
print("Game preview saved to /workspace/snake/game_preview.png")
