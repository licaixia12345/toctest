const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    const consoleMessages = [];
    const errors = [];
    
    page.on('console', msg => {
      consoleMessages.push({ type: msg.type(), text: msg.text() });
    });
    
    page.on('pageerror', error => {
      errors.push(error.toString());
    });
    
    await page.goto('http://localhost:8888', { waitUntil: 'networkidle0' });
    
    // 点击开始游戏
    await page.click('#startBtn');
    await page.waitForTimeout(1000);
    
    // 模拟吃食物 - 让蛇移动一段时间
    await page.waitForTimeout(5000);
    
    console.log('=== Console Messages ===');
    consoleMessages.forEach(msg => {
      const prefix = msg.type === 'error' ? '❌ ERROR:' : '📝 LOG:';
      console.log(prefix, msg.text);
    });
    
    console.log('\n=== Page Errors ===');
    errors.forEach(err => console.log('🔴', err));
    
    if (consoleMessages.length === 0 && errors.length === 0) {
      console.log('No console messages or errors captured yet.');
      console.log('Tip: The snake needs to eat food to trigger the error.');
    }
    
    await browser.close();
  } catch (e) {
    console.log('Error:', e.message);
  }
})();
