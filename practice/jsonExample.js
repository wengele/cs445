const jsonString = `{
    "window": {
    "title": "Sample Widget",
    "width": 500,
    "height": 500
    },
    "image": {
    "src": "images/logo.png",
    "coords": [250, 150, 350, 400],
    "alignment": "center"
    },
    "messages": [
    { "text": "Save", "offset": [10, 40] },
    { "text": "Help", "offset": [0, 50] },
    { "text": "Quit", "offset": [30, 10] }
    ],
    "debug": "true"
    }`;

const obj = JSON.parse(jsonString);

let titl = obj.window.title;


let len = obj.messages.length;
console.log(len)
//console.log(titl);
//let lastMsg = obj.messages[len - 3].offset[1];
//console.log(lastMsg);
console.log(obj.messages.at(1).offset[1]);


// let postPromise = fetch("https://sakai.cs.miu.edu/access/content/group/bff17d88-d196-4490-b79c-fd416fea8b25/Lectures/Lesson09-fetch.pdf");
// postPromise.then(response => console.log(response.ok, response.status));

// response.text()
// response.json()

// postPromise.then(response => response.json())
//     .then(result => console.log(result));
