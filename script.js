const posts =[
    {
        title : "this is title 1",
        boddy : "this is body1"
    },
    {
        title : "this is title 2",
        boddy : "this is body2"
    },
    {
        title : "this is title3",
        boddy : "this is body3"
    },
    {
        title : "this is title 4",
        boddy : "this is body4"
    },
    {
        title : "this is title 5",
        boddy : "this is body5"
    },
    {
        title : "this is title 6",
        boddy : "this is body6"
    },
    {
        title : "this is title 1",
        boddy : "this is body1"
    },
    {
        title : "this is title 1",
        boddy : "this is body1"
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
        <h4 class="post-title">${posts.title}</h4>
        <p class="post-body">${posts.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
    
};
loadAllData();