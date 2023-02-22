let count = 0
function dynamicFibonacci() {
    interface NumberArray {
        [index: number]: number
    }
    let cache: NumberArray = {}
    return function fibonacci(n: number): number {
        if (n in cache) {
            return cache[n]
        }
        count++
        if (n < 2)
            return n
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
        return cache[n]
    }
}

let target = 3
const memoizedFibo = dynamicFibonacci()
let value = memoizedFibo(target)
console.log(`memoizedFibo(${target}) = ${value} , count: ${count}`)