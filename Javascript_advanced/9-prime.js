
function countPrimeNumbers(){
    const primeNumbers = []
    for(let i = 2; i <= 100; i++ ){
        let isPrime = true
        for(let j = 2; j<=100;j++){
            if (i === j) continue
            if (i % j === 0){
                isPrime = false
                break
            }
        }
        if (isPrime) primeNumbers.push(i)
    }
    return primeNumbers
}
const start = performance.now()
countPrimeNumbers()
const end = performance.now()
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`)
