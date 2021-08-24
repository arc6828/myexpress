const getArray = (arrayNumber) => {
    // let arrayNumber = [1,2,3,4,5,6,7,8,9];

    let evens = arrayNumber.filter(function(item,index){ return item%2 == 0 });
    let odds = arrayNumber.filter(function(item,index){ return item%2 == 1 });

    return [evens, odds]
}

let a = [1,1,1,1,1,1,1,1,1,1,1]
let randoms = a.map(function(item,index){ return Math.round(Math.random() * 100) });
console.log(randoms);
let data = getArray(randoms);
console.log(data);