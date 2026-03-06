import time
import os

# 使用 imgkit 或其他方式生成截图
# 由于没有浏览器，我们使用 html2image 或其他方式

try:
    from html2image import Html2Image
    hti = Html2Image()
    
    # 读取 HTML 文件
    with open('index.html', 'r') as f:
        html_content = f.read()
    
    # 截图
    hti.screenshot(html_str=html_content, save_as='game_screenshot.png', size=(500, 600))
    print("Screenshot saved as game_screenshot.png")
except ImportError:
    print("html2image not available, trying alternative...")
    
    # 使用 wkhtmltoimage 如果可用
    result = os.system('wkhtmltoimage --version 2>/dev/null')
    if result == 0:
        os.system('wkhtmltoimage --width 500 --height 600 http://localhost:8888 game_screenshot.png')
        print("Screenshot saved using wkhtmltoimage")
    else:
        print("No screenshot tool available")
        print("Game is running at http://localhost:8888")
