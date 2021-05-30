
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

function openDB(){
    var request = indexedDB.open("testDB", 1);
    request.onsuccess = (event) => {
        // console.log("event.target.result");
        console.log(event.target.result);
    };
}