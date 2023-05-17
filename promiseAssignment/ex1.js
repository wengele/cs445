
function isPrime(num) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const isPrime = num => {
                for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                    if (num % i === 0) {
                        return false;
                    }
                }
                return num > 1;
            };
            if (isPrime(num)) {
                resolve(`prime:true`);
            } else {
                reject(`prime:false`);
            }
        }, 5000);
    })
}

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');