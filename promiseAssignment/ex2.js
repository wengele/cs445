Array.prototype.removeDuplicatedAsync = function () {
    let newarray = this;
    return new Promise(function (resolve, reject) {
        resolve([...new Set(newarray)]);

    }).then(console.log);
}


console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatedAsync();
console.log(`end`);