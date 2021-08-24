// let a = 9;
// let b = 10;
// let c = a + b;
// let myname = "Chavalit Koweerawong";
// console.log(a,b,c, myname);

//บวกเลขสองตัวแล้ว return ผลลัพธ์
// function addNumber(a,b){
//     return a+b;
// }

// let result = addNumber(10,20);


// let a = [];
// console.log(a);

// a.push(5);
// console.log(a);

// a.push(10);
// console.log(a);
// /* THIS LINE IS COMMENT */
// a.push(15);
// console.log(a);
// //a = 6;
// a.pop();
// console.log(a);
// a.pop();
// console.log(a);
// a.pop();
// console.log(a);
// let lastname = "Koweerawong";
// let s1 = "chavalit ${lastname}";    //STRING ในอุดมคติ
// let s2 = 'chavalit ${lastname}';    //STRING + Case sensitive
// let s3 = `chavalit ${lastname}`;    //STRING ที่สามารถฝังตัวแปรได้
// //grave accent
// console.log(s1);
// console.log(s2);
// console.log(s3);
// //ALT + SHIFT => เปลี่ยนภาษา


// let a = ["apple", "banana", "orange", "kiwi"];
// console.log(a);
// console.log(a[0]);
// console.log(a[3]);
// let b = {
//     "ap": "apple",
//     "ba": "banana",
//     "or": "orange", 
//     "ki": "kiwi"
// };
// console.log(b);
// console.log(b["ap"]);
// console.log(b["ki"]);


let a = [1,2,3,4];
let b = [];
//SQUARE NUMBER 
for(let item of a){
    let square = item * item;
    b.push(square);
}
let c = a.map(function(item){  
    return item * item; 
});
let d = a.map((item) => item * item);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

let e = a.filter(function(item){
    return item > 2 ; //TRUE OR FALSE
});
console.log(a);
console.log(e);
