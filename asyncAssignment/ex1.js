
async function isPrimeAsync(num) {

        return new Promise((resolve, reject) => {
    
            setTimeout(function() {
    
                for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    
                    if (num % i === 0) reject({ prime: false });
    
                resolve({ prime: num > 1 });
    
            }, 500);
    
        });
    
    };
    
    console.log('start');
    
    (async () => {
    
      try {
    
        const result = await isPrimeAsync(7);
    
        console.log(result);
    
      } catch (e) {
    
        console.log(e);
    
      } finally {
    
        console.log('end');
    
      }
    
    })();
    
    
    
    
    // Output:
    
    // start
    
    //end
    
    // { prime: true}