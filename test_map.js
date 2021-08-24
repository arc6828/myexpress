let fruits = ["apple", "banana", "orange"];

console.log(fruits);

let new_fruits = fruits.map(function (item) {
    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "contents": [{
                "type": "box",
                "layout": "baseline",
                "contents": [{
                        "type": "icon",
                        "url": "https://upload.wikimedia.org/wikipedia/th/thumb/8/82/Arsenal_FC.png/200px-Arsenal_FC.png",
                        "size": "sm"
                    }, {
                        "type": "text",
                        "text": item.,
                        "size": "sm",
                        "color": "#555555"
                    }
                ],
                "flex": 3
            }, {
                "type": "text",
                "text": item.",
                "size": "sm",
                "color": "#111111",
                "align": "end"
            }, {
                "type": "text",
                "text": "0",
                "size": "sm",
                "color": "#00ff00",
                "align": "end"
            }, {
                "type": "text",
                "text": "0",
                "size": "sm",
                "color": "#aaaaaa",
                "align": "end"
            }, {
                "type": "text",
                "text": "0",
                "size": "sm",
                "color": "#ff0000",
                "align": "end"
            }, {
                "type": "text",
                "text": "0",
                "size": "sm",
                "color": "#111111",
                "align": "end"
            }
        ]
    }
});

console.log(new_fruits);