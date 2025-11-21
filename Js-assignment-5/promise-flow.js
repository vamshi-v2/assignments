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

getFile('file1').then((file) => {
    console.log(file);
    return getFile("file2");
}).then(function (file) {
    console.log(file);
    return getFile("file3")
}).then(function (file) {
    console.log(file)
})