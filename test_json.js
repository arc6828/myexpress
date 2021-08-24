//Fetch or AXOIS
const fetch = require('node-fetch');

async function sendData(data) {
    let url = 'https://www.example.com/test'   // ผู้รับปลายทาง
    let content = data;
    if (typeof data == "object") {
        content = JSON.stringify(data)
    }
    const response = await fetch(url, {
        method: 'POST', // วิธีที่ส่ง *GET, POST, PUT, DELETE, etc.
        body: content,  // เนื้อหาข้อมูลต้องเป็น string เท่านั้น
    });
    return response.json();
}


function ex1() {
    let fruits1 = "apple,banana,kiwi,orange";
    let fruits2 = ["apple", "banana", "kiwi", "orange"];
    let fruits3 = {
        "apple": "apple",
        "banana": "banana",
        "kiwi": "kiwi",
        "orange": "orange"
    };
    console.log(fruits1[0]);
    console.log(fruits2[0]);
    console.log(fruits3.apple);
    // console.log(typeof fruits1 == "object");
    // console.log(typeof fruits2 == "object");
    // console.log(typeof fruits3 == "object");

    //sendData(fruits1)
}
function ex2() {
    let obj = { "name": "Kate", "pet": { "dog": "Corgi", "cat": "Persian" } };
    console.log(obj);

    let strJSON = JSON.stringify(obj);
    console.log(strJSON);
}
function ex3() {
    let strJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';
    console.log(strJSON);

    let obj = JSON.parse(strJSON);
    console.log(obj);
}
function ex5(){
    let data = {
        "title": "This is String",
        "price": 210,
        "details": {
            "features": "Strong and Light weight",
            "rating": "excellence"
        },
        "comments": ["Yes", "No", "Ok", "Happy"],
        "active": true
    }
    console.log(data.title);
    console.log(data.price);
    console.log(data.details.features);
    console.log(data.details.rating);
    console.log(data.comments[0]);
    console.log(data.comments[3]);
    console.log(data.active);
}

ex1();
// ex2();
// ex3();