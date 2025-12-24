def quicksort(seq, key=None, reverse=False):
    n = len(seq)
    if n <= 1:
        return list(seq)
    k = key if key is not None else (lambda x: x)
    p = seq[n // 2]
    kp = k(p)
    left = [x for x in seq if k(x) < kp]
    mid = [x for x in seq if k(x) == kp]
    right = [x for x in seq if k(x) > kp]
    res = quicksort(left, key=key) + mid + quicksort(right, key=key)
    return res[::-1] if reverse else res


def quicksort_inplace(a, key=None, reverse=False):
    if not a:
        return a
    k = key if key is not None else (lambda x: x)

    def lt(x, y):
        return k(x) < k(y) if not reverse else k(x) > k(y)

    def gt(x, y):
        return k(x) > k(y) if not reverse else k(x) < k(y)

    def partition(l, r):
        pivot = a[(l + r) // 2]
        i, j = l - 1, r + 1
        while True:
            i += 1
            while lt(a[i], pivot):
                i += 1
            j -= 1
            while gt(a[j], pivot):
                j -= 1
            if i >= j:
                return j
            a[i], a[j] = a[j], a[i]

    def _qs(l, r):
        if l >= r:
            return
        p = partition(l, r)
        _qs(l, p)
        _qs(p + 1, r)

    _qs(0, len(a) - 1)
    return a


def _run_examples():
    data = [5, 3, 8, 4, 2, 7, 1, 9, 0, 6]
    print(quicksort(data))
    arr = data.copy()
    quicksort_inplace(arr)
    print(arr)


if __name__ == "__main__":
    def _run_tests():
        cases = [
            [],
            [1],
            [3, 3, 3],
            [1, 2, 3],
            [3, 2, 1],
            [5, -1, 2, 0, -3],
        ]
        for c in cases:
            assert quicksort(c) == sorted(c)
            t = c.copy()
            quicksort_inplace(t)
            assert t == sorted(c)

        pairs = [("a", 3), ("b", 1), ("c", 2)]
        assert quicksort(pairs, key=lambda x: x[1]) == sorted(pairs, key=lambda x: x[1])
        assert quicksort([3, 1, 2], reverse=True) == [3, 2, 1]
        r = [3, 1, 2]
        quicksort_inplace(r, reverse=True)
        assert r == [3, 2, 1]

    _run_examples()
    _run_tests()

    import os
    if os.environ.get("QS_BENCH"):
        import random
        import time
        n = 50000
        data = [random.randint(-n, n) for _ in range(n)]
        t0 = time.time()
        quicksort(data)
        t1 = time.time()
        arr = [random.randint(-n, n) for _ in range(n)]
        t2 = time.time()
        quicksort_inplace(arr)
        t3 = time.time()
        print("non_inplace:", round(t1 - t0, 3), "s")
        print("inplace:", round(t3 - t2, 3), "s")
