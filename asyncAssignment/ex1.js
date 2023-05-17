
function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) { return false; }
    }
    return num > 1;
};


console.log('start');

async function checkPrime() {
    try {
        const result = await isPrime(6);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

checkPrime();

console.log('end');