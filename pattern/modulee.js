

function foo() {
    console.log('kiki');
}

foo();

//setTimeout(foo, 5000);



(function () {
    console.log("ad");
})()


let fooo = (function () {
    let count = 0;
    function counter() {
        count++;
    }
    return {
        mycount: counter,
        reset: function () {
            count = 0;
        },
        getcount: function () {
            return count;
        }
    }

}


)()

fooo.mycount();
fooo.mycount();
fooo.mycount();

console.log(fooo.getcount());
let item = [];

function neww(item) {
    const index = item.findIndex(items => item.id === item.id)
    if (index > -1) {
        item[index] = item;
    } else {
        item.push(item);
    }
}