function sayHello() {
    console.log("Hello after 2 seconds");
}

function callSayHelloLater() {
    setTimeout(sayHello, 2000);
}

callSayHelloLater(); 




console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");

Output:
// A
// C
// B



function loadData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 1000);
    });
}


loadData().then(data => console.log(data));



function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User"), 1000);
    });
}

function getPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${user}'s posts`), 1000);
    });
}

getUser()
    .then(user => {
        return getPosts(user);
    })
    .then(posts => {
        console.log(posts);
    });




async function fetchUserAndPosts() {
    const user = await getUser();
    const posts = await getPosts(user);
    console.log(posts);
}

fetchUserAndPosts();