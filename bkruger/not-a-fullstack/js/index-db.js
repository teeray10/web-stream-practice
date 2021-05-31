
// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// openDB = (version) => {
//     let request = indexedDB.open("testDB", version);
//     request.onerror = (event) => {
//         console.log(event.target.result);
//     }

//     return request;
// }

// currently only autoIncrement
createObjStore = (objStoreName) => {
    console.log("createObjStore:");
    // let request = openDB(14);
    let request = indexedDB.open("testDB", 14);
    request.onerror = function(event) {
        console.log(event.target.result);
    }
    request.onupgradeneeded = function(event) {
        let db = event.target.result;
        db.createObjectStore(objStoreName, { autoIncrement: true });
    };
    request.onsuccess = function(event) {
        console.log(event.target.result);
    };
}

writeToObjStore = (objStoreName, obj) => {
    // console.log("writeToObjStore:");
    // let request = openDB(14);
    let request = indexedDB.open("testDB", 14);
    request.onerror = function(event) {
        console.log(event.target.result);
    }
    request.onsuccess = function(event) {
        // console.log(event.target.result);
        let db = event.target.result;

        let transaction = db.transaction([objStoreName], "readwrite");
        let objectStore = transaction.objectStore(objStoreName);

        // transaction.oncomplete = function(event) {
        //     console.log("All done!");
        //   };

        let request1 = objectStore.add(obj);
        request1.onsuccess = function(event) {
            console.log("ADDED:");
            console.log(event.target.result);
        }
    }
    
}

readFromObjStore = (objStoreName, id) => {
    // console.log("readFromObjStore:");
    // let request = openDB(14);
    let request = indexedDB.open("testDB", 14);
    request.onerror = function(event) {
        console.log(event.target.result);
    }
    request.onsuccess = function(event) {
        // console.log(event.target.result);
        let db = event.target.result;

        db.transaction(objStoreName).objectStore(objStoreName).get(id).onsuccess = (event) => {
            console.log("========================")
            console.log(event.target.result);
            console.log("========================")
        };        
    }
}

writeToDB = () => {
    
    // createObjStore("articlesTest1");

    const article = { 
        title: "Bitcoin, the World's Reserve Currency?1", 
        tldr: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere.",
        "Integer eget luctus ex. Nam fermentum quis quam vel sagittis.", 
        "Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem.",
        "Etiam eu lacus vitae felis dignissim tincidunt nec nec sem."], 
        content: 35,
        likes: 1102,
        dislikes: 19,
        views: 1991,
        date: new Date().getTime(),
        author: "Peter Schiff",
        level: "Nocoiner",
        topics: ["Philosophical", "big picture", "bitcoin"]
    };
    
    writeToObjStore("articlesTest2", article);
    
    readFromObjStore("articlesTest2", 1); 
}


















































// var db; 

// function writeToDb(){
//     var request = indexedDB.open("testDB", 11);

//     request.onupgradeneeded = function(event) {
//         const article = { 
//             title: "Bitcoin, the World's Reserve Currency?", 
//             tldr: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere.",
// 			"Integer eget luctus ex. Nam fermentum quis quam vel sagittis.", 
// 			"Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem.",
// 			"Etiam eu lacus vitae felis dignissim tincidunt nec nec sem."], 
//             content: 35, 
//             likes: 1102,
//             dislikes: 19,
//             views: 1991,
//             date: new Date().getTime(),
//             author: "Peter Schiff",
//             level: "Nocoiner",
//             topics: ["Philosophical", "big picture", "bitcoin"]
            
//         };
        
//         let db = event.target.result;

//         let objectStore = db.createObjectStore("articles", { autoIncrement: true });

//         objectStore.transaction.oncomplete = function(event){
//             var articleObjectStore = db.transaction("articles", "readwrite").objectStore("articles");
//             articleObjectStore.add(article);
//         }
//     };

//     request.onerror = function(event) {
//         console.error("Database error: " + event.target.errorCode);
//     };

//     request.onsuccess = (event) => {
//       console.log("in onsuccess:");  
//       console.log(event.target.result);  
//     };
// }

// readFromDb = () => {
//     let request = indexedDB.open("articles", 8);
    
//     request.onsuccess = (event) => {
//         let db = event.target.result;
//         db.transaction("articles").objectStore("articles").get(1).onsuccess = (event) => {
//             console.log("event.target.result:");
//             console.log(event.target.result);
//         }
//     }

//     request.onerror = (event) => {
//         console.log(event.target.error);
//     }
// }