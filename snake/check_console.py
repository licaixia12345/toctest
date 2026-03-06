from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

print("正在启动浏览器检查控制台...")

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')

try:
    from selenium.webdriver.chrome.service import Service
    from webdriver_manager.chrome import ChromeDriverManager
    
    # 尝试使用 webdriver_manager
    try:
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    except:
        # 如果失败，尝试直接使用系统中的 chromedriver
        driver = webdriver.Chrome(options=options)
    
    # 收集控制台日志
    driver.get('http://localhost:8888')
    time.sleep(1)
    
    # 获取浏览器日志
    logs = driver.get_log('browser')
    
    print("\n=== 控制台日志 ===")
    if logs:
        for log in logs:
            level = log['level']
            msg = log['message']
            if 'ERROR' in level:
                print(f"❌ [{level}] {msg}")
            else:
                print(f"📝 [{level}] {msg}")
    else:
        print("暂无控制台日志")
        print("提示：需要玩游戏让蛇吃到食物才会触发错误")
    
    print("\n=== 页面信息 ===")
    print(f"页面标题: {driver.title}")
    
    # 点击开始游戏按钮
    try:
        start_btn = driver.find_element(By.ID, 'startBtn')
        start_btn.click()
        print("已点击开始游戏按钮")
        time.sleep(2)
        
        # 再次获取日志
        logs = driver.get_log('browser')
        print("\n=== 游戏启动后的控制台日志 ===")
        if logs:
            for log in logs:
                level = log['level']
                msg = log['message']
                if 'ERROR' in level:
                    print(f"❌ [{level}] {msg}")
                else:
                    print(f"📝 [{level}] {msg}")
    except Exception as e:
        print(f"操作按钮时出错: {e}")
    
    driver.quit()
    print("\n检查完成！")
    
except Exception as e:
    print(f"错误: {e}")
    print("\n提示：当前环境没有可用的浏览器驱动")
    print("你可以手动在浏览器中打开 http://localhost:8888 并按 F12 查看控制台")
