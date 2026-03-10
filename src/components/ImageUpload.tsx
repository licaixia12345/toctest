import { useState, useRef } from 'react'
import { Upload, Image as ImageIcon, X, Check, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ImageRecognitionService, ImageRecognitionResult } from '@/services/imageRecognition'

export interface ImageUploadProps {
  onImageUpload?: (image: string | File) => void
  onImageTypeIdentified?: (result: ImageRecognitionResult) => void
  className?: string
}

export default function ImageUpload({ 
  onImageUpload, 
  onImageTypeIdentified, 
  className 
}: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(null)
  const [imageType, setImageType] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [urlInput, setUrlInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processImageFile(file)
    }
  }

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (urlInput.trim()) {
      processImageUrl(urlInput.trim())
    }
  }

  const processImageFile = (file: File) => {
    setLoading(true)
    setError(null)
    
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      setError('请选择图片文件')
      setLoading(false)
      return
    }

    // 创建预览
    const reader = new FileReader()
    reader.onload = async (e) => {
      const imageUrl = e.target?.result as string
      setImage(imageUrl)
      await identifyImageType(imageUrl)
      onImageUpload?.(file)
    }
    reader.readAsDataURL(file)
  }

  const processImageUrl = (url: string) => {
    setLoading(true)
    setError(null)

    // 验证URL格式
    try {
      new URL(url)
    } catch {
      setError('请输入有效的图片URL')
      setLoading(false)
      return
    }

    // 检查URL是否指向图片
    const img = new Image()
    img.onload = async () => {
      setImage(url)
      await identifyImageType(url)
      onImageUpload?.(url)
    }
    img.onerror = () => {
      setError('无法加载图片，请检查URL')
      setLoading(false)
    }
    img.src = url
  }

  const identifyImageType = async (imageSource: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const result: ImageRecognitionResult = await ImageRecognitionService.identifyImageType(imageSource)
      setImageType(result.type)
      onImageTypeIdentified?.(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : '图片识别失败，请重试')
      setImageType(null)
    } finally {
      setLoading(false)
    }
  }

  const removeImage = () => {
    setImage(null)
    setImageType(null)
    setError(null)
    setUrlInput('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 图片预览区域 */}
        <div className="flex flex-col items-center justify-center">
          <div className={cn(
            'relative w-full h-64 border-2 border-dashed rounded-lg flex items-center justify-center overflow-hidden',
            image ? 'border-green-500' : 'border-gray-300'
          )}>
            {loading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-2 text-sm text-gray-600">处理中...</p>
              </div>
            ) : image ? (
              <>
                <img 
                  src={image} 
                  alt="Preview" 
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  aria-label="Remove image"
                >
                  <X size={16} />
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <Upload size={48} />
                <p className="mt-2">点击或拖拽上传图片</p>
                <p className="text-xs mt-1">或输入图片URL</p>
              </div>
            )}
          </div>
          
          {/* 图片类型识别结果 */}
          {imageType && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg w-full">
              <div className="flex items-center">
                <Check size={16} className="text-green-500 mr-2" />
                <p className="text-sm font-medium">图片类型：{imageType}</p>
              </div>
            </div>
          )}
          
          {/* 错误提示 */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 rounded-lg w-full">
              <div className="flex items-center">
                <AlertCircle size={16} className="text-red-500 mr-2" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* 上传选项 */}
        <div className="flex flex-col gap-4">
          {/* 本地文件上传 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              选择本地图片
            </label>
            <div className="flex items-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center">
                  <ImageIcon size={16} className="mr-2" />
                  选择文件
                </div>
              </label>
            </div>
          </div>

          {/* URL上传 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              输入图片URL
            </label>
            <form onSubmit={handleUrlSubmit} className="flex gap-2">
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  loading 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-blue-500 text-white hover:bg-blue-600"
                )}
              >
                加载
              </button>
            </form>
          </div>

          {/* 上传说明 */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">上传说明：</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 支持JPG、PNG、GIF等常见图片格式</li>
              <li>• 图片大小建议不超过5MB</li>
              <li>• 系统会自动识别图片类型</li>
              <li>• 请确保上传的图片符合相关法律法规</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
