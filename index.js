const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postSection = document.getElementById("post-section")

function renderPosts() {
    for(let i = 0; i < posts.length; i++){
        postSection.innerHTML += `
        <section>

            <div class="avatar-header container">
                <img class="avatar-image" src="${posts[i].avatar}" alt="User ${posts[i].name} id image" /> 
                <div>
                    <p class="avatar-name">${posts[i].name}</p>
                    <p class="avatar-location">${posts[i].location}</p>
                </div>
            </div>

            <figure class="container" id="likes-plus">
                <img class="post-image"  src="${posts[i].post}" alt="User ${posts[i].name} post image" />
            </figure>

            <div class="container btn-container">
                <div class="btn">
                    <button><img src="./images/icon-heart.png" alt="Heart icon to give post a like" /></button>
                    <button><img src="./images/icon-comment.png" alt="Comment icon to leave a coment of your likeing" /></button>
                    <button><img src="./images/icon-dm.png" alt="Direct message icon to contact ${posts[i].name}" /></button>
                </div>
                <p class="strg-accent"><span>${posts[i].likes}</span> likes</p>
                <p><span>${posts[i].username}</span> ${posts[i].comment}</p>                           
            </div>            
        </section>
        `
    }
}

renderPosts()

let likesPlus = document.getElementById("likes-plus")
likesPlus.addEventListener("dblclick", function(){
    console.log("double clicked")
})



