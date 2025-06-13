const fetchUserPost = async () => {
    try {
        const params = new URLSearchParams(window.location.search)
    console.log(params)
    const userId = params.get("id")
    console.log(userId)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = await response.json()
    console.log(userPosts)
    displayUsersPost(userPosts)
    } catch (error) {
        console.error("error fetching data", error);
    }
}

const displayUsersPost = (userPosts) => {
    const postContainer = document.getElementById("postContainer")
    userPosts.forEach((post) => {
        const userPostCard = `
        <div class="d-flex text-center mt-5 mb-5 col-md-12">
        <div class="card w-100" >
  
  <div class="card-body">
    <h5 class="card-title">${post.id}</h5>
    <div>
    <p class="card-text"> ${post.title} </p>
    <p class="card-text"> ${post.body} </p>
    </div>
   
  </div>
</div>
</div>
`
        postContainer.innerHTML += userPostCard;
    })
        
    
};

fetchUserPost()