Array.prototype.removeDuplicatedAsync = async function () {
    console.log(await [... new Set(this)]);

}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatedAsync();
console.log(`end`);