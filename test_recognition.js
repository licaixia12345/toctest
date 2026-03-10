import { ImageRecognitionService }import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy()import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率"import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.comimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i =import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        //import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${errorimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy =import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduceimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length :import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCasesimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  consoleimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log(import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCasesimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  forimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; iimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        constimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  //import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimesimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time)import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maximport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length >import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduceimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    consoleimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应时间: ${avgTime.toFixed(2)}ms`);
    console.log(`最小import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应时间: ${avgTime.toFixed(2)}ms`);
    console.log(`最小响应时间: ${minTime.toFixed(2)}ms`);
    console.log(`import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应时间: ${avgTime.toFixed(2)}ms`);
    console.log(`最小响应时间: ${minTime.toFixed(2)}ms`);
    console.log(`最大响应时间: ${maxTime.toFixed(2)}ms`);
    console.logimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应时间: ${avgTime.toFixed(2)}ms`);
    console.log(`最小响应时间: ${minTime.toFixed(2)}ms`);
    console.log(`最大响应时间: ${maxTime.toFixed(2)}ms`);
    console.log(`响应时间标准差: ${stdDev.toFixed(2)}ms`);
    
    return { avgTime, minTime,import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应时间: ${avgTime.toFixed(2)}ms`);
    console.log(`最小响应时间: ${minTime.toFixed(2)}ms`);
    console.log(`最大响应时间: ${maxTime.toFixed(2)}ms`);
    console.log(`响应时间标准差: ${stdDev.toFixed(2)}ms`);
    
    return { avgTime, minTime, maxTime, stdDev };
  } else {
    console.log("无有效import { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应时间: ${avgTime.toFixed(2)}ms`);
    console.log(`最小响应时间: ${minTime.toFixed(2)}ms`);
    console.log(`最大响应时间: ${maxTime.toFixed(2)}ms`);
    console.log(`响应时间标准差: ${stdDev.toFixed(2)}ms`);
    
    return { avgTime, minTime, maxTime, stdDev };
  } else {
    console.log("无有效测试结果");
    return { avgimport { ImageRecognitionService } from './src/services/imageRecognition.js';

async function testRecognitionAccuracy() {
  """测试识别准确率""";
  console.log("\n=== 测试识别准确率 ===");
  
  // 测试用例
  const testCases = [
    "https://example.com/person.jpg",  // 人物
    "https://example.com/landscape.jpg",  // 风景
    "https://example.com/animal.jpg",  // 动物
    "https://example.com/food.jpg",  // 食物
    "https://example.com/building.jpg",  // 建筑
  ];
  
  const totalTests = 100;
  let correctCount = 0;
  const confidenceScores = [];
  
  for (let i = 0; i < totalTests; i++) {
    for (const testCase of testCases) {
      try {
        const result = await ImageRecognitionService.identifyImageType(testCase);
        confidenceScores.push(result.confidence);
        // 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
        if (result.confidence > 0.8) {
          correctCount++;
        }
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  const accuracy = (correctCount / (totalTests * testCases.length)) * 100;
  const avgConfidence = confidenceScores.length > 0 ? 
    confidenceScores.reduce((sum, score) => sum + score, 0) / confidenceScores.length : 0;
  
  console.log(`总测试次数: ${totalTests * testCases.length}`);
  console.log(`成功识别次数: ${correctCount}`);
  console.log(`准确率: ${accuracy.toFixed(2)}%`);
  console.log(`平均置信度: ${avgConfidence.toFixed(2)}`);
  
  return { accuracy, avgConfidence };
}

async function testResponseTime() {
  """测试响应时间""";
  console.log("\n=== 测试响应时间 ===");
  
  const testCases = [
    "https://example.com/test1.jpg",
    "https://example.com/test2.jpg",
    "https://example.com/test3.jpg",
  ];
  
  const responseTimes = [];
  
  for (const testCase of testCases) {
    for (let i = 0; i < 10; i++) {  // 每个测试用例运行10次
      const startTime = performance.now();
      try {
        await ImageRecognitionService.identifyImageType(testCase);
        const endTime = performance.now();
        const responseTime = endTime - startTime;  // 毫秒
        responseTimes.push(responseTime);
      } catch (error) {
        console.log(`测试失败: ${error}`);
      }
    }
  }
  
  if (responseTimes.length > 0) {
    const avgTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
    const minTime = Math.min(...responseTimes);
    const maxTime = Math.max(...responseTimes);
    const stdDev = responseTimes.length > 1 ? 
      Math.sqrt(responseTimes.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / (responseTimes.length - 1)) : 0;
    
    console.log(`总测试次数: ${responseTimes.length}`);
    console.log(`平均响应时间: ${avgTime.toFixed(2)}ms`);
    console.log(`最小响应时间: ${minTime.toFixed(2)}ms`);
    console.log(`最大响应时间: ${maxTime.toFixed(2)}ms`);
    console.log(`响应时间标准差: ${stdDev.toFixed(2)}ms`);
    
    return { avgTime, minTime, maxTime, stdDev };
  } else {
    console.log("无有效测试结果");
    return { avgTime: 0, minTime: 0