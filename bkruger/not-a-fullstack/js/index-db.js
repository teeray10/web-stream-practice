
openDB = (version) => {
    let request = indexedDB.open("testDB", version);

    request.onerror = (event) => {
        console.log(event.target.result);
    }
    return request;
}

createObjStore = (objStoreName) => {
    let request = openDB(14);

    request.onupgradeneeded = function(event) {
        let db = event.target.result;
        db.createObjectStore(objStoreName, { autoIncrement: true });
    };
    request.onsuccess = function(event) {
        console.log(event.target.result);
    };
}

writeToObjStore = (objStoreName, obj) => {
    let request = openDB(14);

    request.onsuccess = function(event) {
        let db = event.target.result;
        let transaction = db.transaction([objStoreName], "readwrite");
        let objectStore = transaction.objectStore(objStoreName);

        let request1 = objectStore.add(obj);
        request1.onsuccess = function(event) {
            console.log("ADDED:");
            console.log(event.target.result);
        }
    }
    
}

readFromObjStore = (objStoreName, id) => {
    let request = openDB(14);

    request.onsuccess = function(event) {
        let db = event.target.result;

        db.transaction(objStoreName).objectStore(objStoreName).get(id).onsuccess = (event) => {
            console.log("========================")
            console.log(event.target.result);
            console.log("========================")
        };        
    }
}

writeToDB = () => {
    
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