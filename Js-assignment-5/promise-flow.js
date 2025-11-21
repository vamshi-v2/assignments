function fakeAjax(url, cb) {
    var fakeResponses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text",
    }
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000 + 1000)
    console.log("Requesting: " + url);

    setTimeout(function () {
        cb(fakeResponses[url]);
    }, randomDelay);
}
let arr = {};
function getFile(file) {
    return new Promise(function (resolve) {
        fakeAjax(file, resolve)
    });
}

const p1 = getFile("file1");
const p2 = getFile("file2");
const p3 = getFile("file3");

p1.then((text) => {
console.log(text);
    p2.then((text)=>{
    console.log(text);
        p3.then((text)=>{
        console.log(text);
            }).catch((err)=>{
                console.log(err);
        });
        }
    )
});
