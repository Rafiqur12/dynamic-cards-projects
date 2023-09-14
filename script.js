const posts =[
    {
        title : "this is title 1",
        body : "this is body1",
    },
    {
        title : "this is title 2",
        body : "this is body2",
    },
    {
        title : "this is title3",
        body : "this is body3",
    },
    {
        title : "this is title 4",
        body : "this is body4",
    },
    {
        title : "this is title 5",
        body : "this is body5",
    },
    {
        title : "this is title 6",
        body : "this is body6",
    },
    {
        title : "this is title 1",
        body : "this is body1",
    },
    {
        title : "this is title 1",
        body : "this is body1",
    },
];

// {/* <div class="post">
//         <h4 class="post-title">Post title 1</h4>
//         <p class="post-body">Post description</p>
//     </div> */}


const postsElement = document.querySelector('.posts');
const loadAllData = () => {
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
    
};
loadAllData();