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
function getFile(file) {
    return new Promise(function (resolve) {
        fakeAjax(file, resolve)
    });
}

let arr = [getFile("file1"), getFile("file2"),getFile("file3")];
let res=[];
let p= Promise.resolve();
for (let i=0; i<arr.length;i++)
    {
    p=p.then(()=>{
        return arr[i];
    }).then((text)=>{
        console.log(text);
    })
}
p.then(()=>{
    console.log("Completed")
})
