import time
import statistics
from src.services.imageRecognition import ImageRecognitionService

async def test_recognition_accuracy():
    """测试识别准确率"""
    print("\n=== 测试识别准确率 ===")
    
    # 测试用例
    test_cases = [
        "https://example.com/person.jpg",  # 人物
        "https://example.com/landscape.jpg",  # 风景
        "https://example.com/animal.jpg",  # 动物
        "https://example.com/food.jpg",  # 食物
        "https://example.com/building.jpg",  # 建筑
    ]
    
    total_tests = 100
    correct_count = 0
    confidence_scores = []
    
    for i in range(total_tests):
        for test_case in test_cases:
            try:
                result = await ImageRecognitionService.identifyImageType(test_case)
                confidence_scores.append(result.confidence)
                # 简单的准确率评估（由于是模拟数据，这里只是统计成功识别的次数）
                if result.confidence > 0.8:
                    correct_count += 1
            except Exception as e:
                print(f"测试失败: {e}")
    
    accuracy = (correct_count / (total_tests * len(test_cases))) * 100
    avg_confidence = statistics.mean(confidence_scores) if confidence_scores else 0
    
    print(f"总测试次数: {total_tests * len(test_cases)}")
    print(f"成功识别次数: {correct_count}")
    print(f"准确率: {accuracy:.2f}%")
    print(f"平均置信度: {avg_confidence:.2f}")
    
    return accuracy, avg_confidence

async def test_response_time():
    """测试响应时间"""
    print("\n=== 测试响应时间 ===")
    
    test_cases = [
        "https://example.com/test1.jpg",
        "https://example.com/test2.jpg",
        "https://example.com/test3.jpg",
    ]
    
    response_times = []
    
    for test_case in test_cases:
        for _ in range(10):  # 每个测试用例运行10次
            start_time = time.time()
            try:
                await ImageRecognitionService.identifyImageType(test_case)
                end_time = time.time()
                response_time = (end_time - start_time) * 1000  # 转换为毫秒
                response_times.append(response_time)
            except Exception as e:
                print(f"测试失败: {e}")
    
    if response_times:
        avg_time = statistics.mean(response_times)
        min_time = min(response_times)
        max_time = max(response_times)
        std_dev = statistics.stdev(response_times) if len(response_times) > 1 else 0
        
        print(f"总测试次数: {len(response_times)}")
        print(f"平均响应时间: {avg_time:.2f}ms")
        print(f"最小响应时间: {min_time:.2f}ms")
        print(f"最大响应时间: {max_time:.2f}ms")
        print(f"响应时间标准差: {std_dev:.2f}ms")
        
        return avg_time, min_time, max_time, std_dev
    else:
        print("无有效测试结果")
        return 0, 0, 0, 0

async def test_batch_processing():
    """测试批量处理性能"""
    print("\n=== 测试批量处理性能 ===")
    
    test_images = [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg",
    ]
    
    start_time = time.time()
    try:
        results = await ImageRecognitionService.batchIdentifyImageTypes(test_images)
        end_time = time.time()
        total_time = (end_time - start_time) * 1000  # 转换为毫秒
        
        print(f"批量处理图片数量: {len(test_images)}")
        print(f"总处理时间: {total_time:.2f}ms")
        print(f"平均每张图片处理时间: {total_time / len(test_images):.2f}ms")
        print(f"识别结果数量: {len(results)}")
        
        return total_time, len(results)
    except Exception as e:
        print(f"测试失败: {e}")
        return 0, 0

if __name__ == "__main__":
    import asyncio
    
    print("开始测试图像识别系统...")
    
    # 运行所有测试
    async def run_all_tests():
        await test_recognition_accuracy()
        await test_response_time()
        await test_batch_processing()
    
    asyncio.run(run_all_tests())
    print("\n测试完成!")
