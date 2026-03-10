# 图片识别API接口文档

## 接口说明

本API提供图片识别功能，供其他系统调用。目前支持单个图片识别和批量图片识别两种功能。

## 基础信息

- **API Base URL**: `http://localhost:3001/api`
- **认证方式**: API Key (通过 `x-api-key` 请求头传递)
- **响应格式**: JSON

## 认证

所有API接口（除健康检查外）都需要在请求头中包含有效的API Key：

```
x-api-key: your-secure-api-key
```

> 注意：实际部署时应使用安全的API Key管理方式，本示例中使用的是固定值。

## 接口列表

### 1. 健康检查

**Endpoint**: `GET /health`

**描述**: 检查API服务是否正常运行

**请求参数**: 无

**响应示例**:

```json
{
  "status": "ok",
  "message": "Image recognition API is running"
}
```

### 2. 单个图片识别

**Endpoint**: `POST /recognize`

**描述**: 识别单个图片的类型

**请求参数**:

| 参数名 | 类型 | 必需 | 描述 |
|--------|------|------|------|
| imageSource | string | 是 | 图片源（URL或base64编码） |

**请求示例**:

```json
{
  "imageSource": "https://example.com/image.jpg"
}
```

**响应示例**:

成功:

```json
{
  "success": true,
  "data": {
    "type": "人物",
    "confidence": 0.95
  }
}
```

失败:

```json
{
  "error": "Bad Request",
  "message": "Missing required parameter: imageSource"
}
```

### 3. 批量图片识别

**Endpoint**: `POST /recognize/batch`

**描述**: 批量识别多个图片的类型

**请求参数**:

| 参数名 | 类型 | 必需 | 描述 |
|--------|------|------|------|
| imageSources | array[string] | 是 | 图片源数组（URL或base64编码） |

**请求示例**:

```json
{
  "imageSources": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ]
}
```

**响应示例**:

成功:

```json
{
  "success": true,
  "data": [
    {
      "type": "风景",
      "confidence": 0.92
    },
    {
      "type": "动物",
      "confidence": 0.88
    }
  ]
}
```

失败:

```json
{
  "error": "Bad Request",
  "message": "imageSources array cannot be empty"
}
```

## 错误处理

API会返回以下错误状态码：

| 状态码 | 描述 |
|--------|------|
| 400 | 请求参数错误 |
| 401 | 未授权（API Key无效） |
| 404 | 请求的端点不存在 |
| 500 | 服务器内部错误 |

## 示例代码

### 使用Node.js调用

```javascript
const axios = require('axios');

// 单个图片识别
async function recognizeImage(imageUrl) {
  try {
    const response = await axios.post('http://localhost:3001/api/recognize',
      { imageSource: imageUrl },
      { headers: { 'x-api-key': 'your-secure-api-key' } }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.data);
    throw error;
  }
}

// 批量图片识别
async function batchRecognizeImages(imageUrls) {
  try {
    const response = await axios.post('http://localhost:3001/api/recognize/batch',
      { imageSources: imageUrls },
      { headers: { 'x-api-key': 'your-secure-api-key' } }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.data);
    throw error;
  }
}

// 使用示例
(async () => {
  const result = await recognizeImage('https://example.com/image.jpg');
  console.log('Recognition result:', result);

  const batchResult = await batchRecognizeImages([
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg'
  ]);
  console.log('Batch recognition result:', batchResult);
})();
```

### 使用Python调用

```python
import requests

# 单个图片识别
def recognize_image(image_url):
    url = 'http://localhost:3001/api/recognize'
    headers = {'x-api-key': 'your-secure-api-key'}
    data = {'imageSource': image_url}
    
    response = requests.post(url, json=data, headers=headers)
    return response.json()

# 批量图片识别
def batch_recognize_images(image_urls):
    url = 'http://localhost:3001/api/recognize/batch'
    headers = {'x-api-key': 'your-secure-api-key'}
    data = {'imageSources': image_urls}
    
    response = requests.post(url, json=data, headers=headers)
    return response.json()

# 使用示例
if __name__ == '__main__':
    result = recognize_image('https://example.com/image.jpg')
    print('Recognition result:', result)
    
    batch_result = batch_recognize_images([
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg'
    ])
    print('Batch recognition result:', batch_result)
```

## 部署说明

1. 安装依赖：`npm install`
2. 启动API服务器：`npm run api`
3. 服务器将在 `http://localhost:3001` 上运行

> 注意：实际部署时应配置环境变量来管理API Key和其他敏感信息。