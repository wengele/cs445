let promiseobj = new Promise(function (resolve, reject) {
    console.log("22");


    if (Math.random() > 0.5) {
        resolve('sucess');
    } else {

        reject('error');
    }

    console.log("inside rpomise2")
})

promiseobj
    .then(data => console.log(data))
    .catch(error => console.error(error))
//console.log(promiseobj);