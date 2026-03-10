def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# 测试代码
if __name__ == "__main__":
    test_cases = [
        [3, 6, 8, 10, 1, 2, 1],
        [5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5],
        [],
        [7]
    ]
    for test in test_cases:
        print(f"原始数组: {test}")
        sorted_arr = quick_sort(test)
        print(f"排序后: {sorted_arr}")
        print("-" * 30)