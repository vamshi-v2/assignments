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
let res = {};
let arr = [];
let idx = 0;
function getFile(file) {
    arr.push(file);
    fakeAjax(file, function (text) {
        res[file] = text;
            while(idx<arr.length && res[arr[idx]]!==undefined){
                console.log(res[arr[idx]]);
                idx++;
            }
        });
}
getFile('file1');
getFile('file2');
getFile('file3');