# For循环示例

## JavaScript/TypeScript

### 基本计数循环
```javascript
// 从0到9循环
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### 遍历数组
```javascript
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 使用for...of循环（ES6+）
for (const fruit of fruits) {
  console.log(fruit);
}

// 使用for...in循环遍历对象
const person = { name: 'John', age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

## Python

### 基本计数循环
```python
# 从0到9循环
for i in range(10):
    print(i)

# 从1到10循环
for i in range(1, 11):
    print(i)

# 步长为2
for i in range(0, 10, 2):
    print(i)  # 输出: 0, 2, 4, 6, 8
```

### 遍历列表
```python
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)

# 带索引遍历
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
```

### 遍历字典
```python
person = {'name': 'John', 'age': 30}
for key, value in person.items():
    print(f"{key}: {value}")
```

## Java

### 基本计数循环
```java
// 从0到9循环
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

### 遍历数组
```java
String[] fruits = {"apple", "banana", "cherry"};
for (int i = 0; i < fruits.length; i++) {
    System.out.println(fruits[i]);
}

// 使用增强型for循环（Java 5+）
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

## C/C++

### 基本计数循环
```c
// 从0到9循环
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```

### 遍历数组
```c
int numbers[] = {1, 2, 3, 4, 5};
int length = sizeof(numbers) / sizeof(numbers[0]);
for (int i = 0; i < length; i++) {
    printf("%d\n", numbers[i]);
}
```

## Ruby

### 基本计数循环
```ruby
# 从1到10循环
for i in 1..10
  puts i
end

# 使用each方法
(0...10).each do |i|
  puts i
end
```

### 遍历数组
```ruby
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits
  puts fruit
end

# 使用each方法
fruits.each do |fruit|
  puts fruit
end
```

## Go

### 基本计数循环
```go
// 从0到9循环
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

### 遍历数组/切片
```go
fruits := []string{"apple", "banana", "cherry"}
for i, fruit := range fruits {
    fmt.Printf("%d: %s\n", i, fruit)
}

// 只遍历值
for _, fruit := range fruits {
    fmt.Println(fruit)
}
```

### 遍历映射（map）
```go
person := map[string]int{"age": 30, "height": 180}
for key, value := range person {
    fmt.Printf("%s: %d\n", key, value)
}
```

## 常见使用场景

### 1. 累加求和
```javascript
// JavaScript
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);  // 5050
```

### 2. 查找最大值
```python
# Python
numbers = [5, 2, 9, 1, 7]
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print(max_num)  # 9
```

### 3. 过滤数组
```javascript
// JavaScript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(evenNumbers);  // [2, 4, 6, 8, 10]
```

### 4. 嵌套循环
```java
// Java - 打印乘法表
for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.printf("%d×%d=%d\t", j, i, i*j);
    }
    System.out.println();
}
```