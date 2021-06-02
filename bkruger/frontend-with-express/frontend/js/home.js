customElements.define('home-element', class Home extends HTMLElement {
    constructor(){
        super();

        let container = document.createElement('div');
        container.setAttribute('class', 'container');
        
        let mainContent = document.createElement('div');
        mainContent.setAttribute('class', 'main');

        let idInput = document.createElement('input');
        idInput.setAttribute('type', 'text');
        idInput.setAttribute('id', 'postId');
        mainContent.appendChild(idInput);

        let btn = document.createElement('input');
        btn.setAttribute('type', 'submit');
        btn.setAttribute('value', 'GET');
        btn.setAttribute('onclick', 'getArticle()');
        mainContent.appendChild(btn);

        let btn1 = document.createElement('input');
        btn1.setAttribute('type', 'submit');
        btn1.setAttribute('value', 'POST');
        btn1.setAttribute('onclick', 'saveArticle()');
        mainContent.appendChild(btn1);

        let btn2 = document.createElement('input');
        btn2.setAttribute('type', 'submit');
        btn2.setAttribute('value', 'test');
        btn2.setAttribute('onclick', 'test()');
        mainContent.appendChild(btn2);
        
        container.appendChild(mainContent);        
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(container);
    }
});

getArticle = (postId) => {
    // let id = document.getElementById("postId").value;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4)
            console.log(xhr.responseText);
    };
    xhr.open("GET", "http://localhost:3000/article/9", true);
    xhr.send();
}

test = () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4)
            console.log(xhr.responseText);
    };
    xhr.open("GET", "http://localhost:3000/test", true);
    xhr.send();
}

saveArticle = () => {
// (title, tldr,
    // content, author, topics)  {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200)
            // console.log(xhr.readyState);
            // console.log(xhr.status);
            console.log(xhr.responseText);
    };
    xhr.open("POST", "http://localhost:3000/article", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({title: "MyTitle"}));

    // title: "Bitcoin, the World's Reserve Currency?",
	// tldr: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere.",
			// "Integer eget luctus ex. Nam fermentum quis quam vel sagittis.", 
			// "Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem.",
			// "Etiam eu lacus vitae felis dignissim tincidunt nec nec sem."],
	// date: new Date().getTime(),
	// content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex posuere, dignissim turpis eget, feugiat nulla. In hac habitasse platea dictumst. Etiam tincidunt vitae nisl congue commodo. Integer tincidunt dolor nisi, ac sollicitudin metus rutrum et. Ut arcu magna, ultricies ut libero ut, posuere condimentum lorem. Integer eget luctus ex. Nam fermentum quis quam vel sagittis. Aliquam semper, sem sit amet luctus pretium, eros justo porttitor dolor, at rutrum quam tellus nec sem. Etiam eu lacus vitae felis dignissim tincidunt nec nec sem. Vivamus vitae varius ligula. Proin in malesuada ex. In mi mi, dictum at orci in, mattis imperdiet risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lorem nibh, laoreet interdum magna pretium, laoreet faucibus mauris. Nam suscipit quam ut velit dapibus mollis. In a nunc consequat nulla sollicitudin luctus vitae a justo. Morbi id turpis dapibus, aliquam ligula in, dictum lacus. Praesent id mattis mi. Donec facilisis tristique mi eget pulvinar. Phasellus viverra vehicula ligula, nec imperdiet massa sagittis in. Sed eu leo tempor tortor elementum rutrum at at augue. Suspendisse potenti. Ut quis libero ullamcorper, consequat mauris non, egestas velit. Phasellus vitae pretium mi, non feugiat eros. Vestibulum hendrerit turpis gravida accumsan ullamcorper. Aliquam erat volutpat. Maecenas ornare velit id nisl vehicula, et auctor tellus dictum. Maecenas rhoncus orci ac dolor rhoncus tincidunt. Sed venenatis ac sapien at aliquet. Sed non nunc varius, eleifend lectus sit amet, euismod nibh. Quisque suscipit, orci eu molestie ullamcorper, nulla mi elementum lectus, a faucibus tortor massa eu turpis. Fusce sollicitudin, massa eu feugiat bibendum, magna dui dictum ante, vitae dictum eros tortor sit amet nulla. Pellentesque consequat sit amet nunc id pellentesque. Praesent in libero vel justo facilisis tincidunt a vitae mi. Cras fermentum urna a orci tincidunt, vitae sollicitudin nulla euismod. Pellentesque ac leo ullamcorper, suscipit elit sed, scelerisque odio. Sed sodales dolor quis ornare pretium. Donec ut viverra nisi, in laoreet ex. Praesent ultrices augue sit amet nunc vehicula, et rutrum metus sagittis. Sed aliquam mattis dolor, a cursus risus posuere vel. Suspendisse condimentum tellus dui, quis vehicula lacus tempus in. Vestibulum ac orci nec purus faucibus imperdiet. Suspendisse fringilla facilisis mauris non congue. In a ante quis velit ultricies varius a in justo. Donec tincidunt auctor egestas. Donec et felis nec nisi pharetra viverra eu ac metus. Cras euismod nibh eget nibh mollis efficitur sed pulvinar leo. Aenean vel eros tristique, molestie urna sit amet, mollis urna.",
	// author: "Peter Schiff",
	// likes: 110,
	// dislikes: 12,
	// topics: ["Philosophical", "big picture", "bitcoin"],
}