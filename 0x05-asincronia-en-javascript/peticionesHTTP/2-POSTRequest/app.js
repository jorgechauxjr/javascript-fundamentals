const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}

/* Creo copia de la respuesta en listOfPosts para mantener los datos recibidos limpios
   y no modificar la variable responseData */

async function fetchPosts() {
    const responseData = await sendHTTPRequest(
        "GET",
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(responseData);

    const listOfPosts = responseData;


    for (const post of listOfPosts) {
        const postContainer = document.createElement("article");
        postContainer.id = post.id;
        postContainer.classList.add("post-item");

        const title = document.createElement("h2");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const button = document.createElement("button");
        button.textContent = "DELETE Content";

        postContainer.append(title);
        postContainer.append(body);
        postContainer.append(button);

        listElement.append(postContainer);
    }
}

fetchButton.addEventListener("click", fetchPosts);

async function createPost(title, content) {
    const userId = Math.floor(Math.random()*100);
    const myData = {
        title: title,
        body: content,
        userId: userId,
    };

    sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", myData);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector("#title").value;
    const content = event.currentTarget.querySelector("#content").value;
    // console.log(title, content);
    createPost(title, content);
});
// inspector navegador pestaña network -- response