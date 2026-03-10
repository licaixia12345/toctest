import express from 'express';
import cors from 'cors';
import { ImageRecognitionService } from './imageRecognition.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// API密钥验证中间件
const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  // 实际项目中应该从环境变量或配置文件中获取
  const validApiKey = 'your-secure-api-key';
  
  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or missing API key'
    });
  }
  
  next();
};

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Image recognition API is running'
  });
});

// 单个图片识别接口
app.post('/api/recognize', validateApiKey, async (req, res) => {
  try {
    const { imageSource } = req.body;
    
    // 请求验证
    if (!imageSource) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Missing required parameter: imageSource'
      });
    }
    
    if (typeof imageSource !== 'string') {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid parameter type: imageSource must be a string'
      });
    }
    
    // 调用图片识别服务
    const result = await ImageRecognitionService.identifyImageType(imageSource);
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error in recognize endpoint:', error);
    
    res.status(500).json({
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
});

// 批量图片识别接口
app.post('/api/recognize/batch', validateApiKey, async (req, res) => {
  try {
    const { imageSources } = req.body;
    
    // 请求验证
    if (!imageSources) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Missing required parameter: imageSources'
      });
    }
    
    if (!Array.isArray(imageSources)) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid parameter type: imageSources must be an array'
      });
    }
    
    if (imageSources.length === 0) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'imageSources array cannot be empty'
      });
    }
    
    // 验证数组中的每个元素
    for (const source of imageSources) {
      if (typeof source !== 'string') {
        return res.status(400).json({
          error: 'Bad Request',
          message: 'Invalid element in imageSources: all elements must be strings'
        });
      }
    }
    
    // 调用批量图片识别服务
    const results = await ImageRecognitionService.batchIdentifyImageTypes(imageSources);
    
    res.json({
      success: true,
      data: results
    });
  } catch (error) {
    console.error('Error in batch recognize endpoint:', error);
    
    res.status(500).json({
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
});

// 404 处理
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Image recognition API server running on port ${PORT}`);
});