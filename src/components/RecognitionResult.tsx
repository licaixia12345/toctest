import { CheckCircle, Info, AlertTriangle, Zap, Image as ImageIcon, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface RecognitionResultProps {
  imageType: string
  confidence: number
  features?: Record<string, unknown>
  suggestions?: string[]
  className?: string
}

export default function RecognitionResult({
  imageType,
  confidence,
  features = {},
  suggestions = [],
  className
}: RecognitionResultProps) {
  // 根据置信度获取颜色
  const getConfidenceColor = (conf: number) => {
    if (conf >= 0.9) return 'text-green-600'
    if (conf >= 0.7) return 'text-yellow-600'
    return 'text-orange-600'
  }

  // 根据图片类型获取图标
  const getTypeIcon = (type: string) => {
    switch (type) {
      case '人物':
        return <ImageIcon className="h-8 w-8 text-blue-500" />
      case '风景':
        return <ImageIcon className="h-8 w-8 text-green-500" />
      case '动物':
        return <ImageIcon className="h-8 w-8 text-purple-500" />
      case '食物':
        return <ImageIcon className="h-8 w-8 text-red-500" />
      case '建筑':
        return <ImageIcon className="h-8 w-8 text-amber-500" />
      default:
        return <ImageIcon className="h-8 w-8 text-gray-500" />
    }
  }

  // 生成处理建议
  const generateSuggestions = (type: string): string[] => {
    const typeSuggestions: Record<string, string[]> = {
      '人物': [
        '可考虑使用人像美化功能',
        '建议调整亮度和对比度以突出人物特征',
        '可尝试添加背景模糊效果'
      ],
      '风景': [
        '建议增强色彩饱和度以突出自然景观',
        '可考虑调整曝光度以获得更好的光影效果',
        '推荐使用风景模式进行进一步编辑'
      ],
      '动物': [
        '建议使用自动对焦功能确保动物清晰',
        '可尝试调整色温以获得更自然的色彩',
        '推荐使用连拍模式捕捉动态瞬间'
      ],
      '食物': [
        '建议使用美食模式增强食物色彩',
        '可考虑调整白平衡以获得更准确的色彩',
        '推荐使用特写镜头突出食物细节'
      ],
      '建筑': [
        '建议使用水平校正功能确保建筑垂直',
        '可尝试调整透视以获得更好的构图',
        '推荐使用HDR模式增强建筑细节'
      ]
    }
    return typeSuggestions[type] || [
      '建议根据具体场景调整图片参数',
      '可尝试使用自动优化功能',
      '推荐保存原图以便后续编辑'
    ]
  }

  const displaySuggestions = suggestions.length > 0 ? suggestions : generateSuggestions(imageType)

  return (
    <div className={cn('w-full', className)}>
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* 头部信息 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 rounded-full">
              {getTypeIcon(imageType)}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">识别结果</h2>
              <p className="text-gray-500">图片类型分析与处理建议</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`font-medium ${getConfidenceColor(confidence)}`}>
              {Math.round(confidence * 100)}%
            </span>
            <span className="text-sm text-gray-500">置信度</span>
          </div>
        </div>

        {/* 图片类型 */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="font-medium text-gray-700">图片类型</h3>
          </div>
          <div className="ml-7 bg-blue-50 rounded-lg p-4">
            <p className="text-lg font-semibold text-blue-700">{imageType}</p>
          </div>
        </div>

        {/* 识别特征 */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Zap className="h-5 w-5 text-yellow-500 mr-2" />
            <h3 className="font-medium text-gray-700">识别特征</h3>
          </div>
          <div className="ml-7 bg-yellow-50 rounded-lg p-4">
            {Object.keys(features).length > 0 ? (
              <ul className="space-y-2">
                {Object.entries(features).map(([key, value]) => (
                  <li key={key} className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-2">{key}:</span>
                    <span className="text-sm text-gray-600">{String(value)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600">
                系统已识别出图片类型，正在分析详细特征...
              </p>
            )}
          </div>
        </div>

        {/* 处理建议 */}
        <div>
          <div className="flex items-center mb-2">
            <Lightbulb className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="font-medium text-gray-700">处理建议</h3>
          </div>
          <div className="ml-7 bg-purple-50 rounded-lg p-4">
            <ul className="space-y-2">
              {displaySuggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-sm text-gray-700">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
