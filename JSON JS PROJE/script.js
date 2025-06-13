const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    const users = await response.json()
    console.log(users);
    displayUsers(users);
  } catch (error) {
    console.log("error fetching users: ", error)
  }
};

const displayUsers = (users) => {
    const usersContainer = document.getElementById("user-cards")
    users.forEach((user) => {
        const userCard = `
        <div class="d-flex text-center mb-4 align-items-stretch col-md-12">
        <div class="card w-100">
  
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">${user.name}</h5>
    <div>
    <p class="card-text"><i class="fa-solid fa-user"></i>${user.username}</p>
    <p class="card-text"><i class="fa-solid fa-city"></i>${user.address.city}</p>
    <p class="card-text"><i class="fa-solid fa-building"></i>${user.company.name}</p>
    <p class="card-text"><i class="fa-solid fa-envelope"></i>${user.email}</p>
    <p class="card-text"><i class="fa-solid fa-phone"></i>${user.phone}</p>
    <p class="card-text">  <i class="fa-solid fa-earth-americas"></i> <a href="http://${user.website}" target="_blank" >${user.website}</a></p>
    </div>
    <p class="card-text"></p>
    <a href="post.html?id=${users.id}" class="btn btn-outline mt-auto">view profile</a>
  </div>
</div>
</div>
        `;
    
    usersContainer.innerHTML += userCard;
    })
};

const SearchForm = document.getElementById("searchForm")

  /*document.addEventListener("DOMContentLoaded", () => {
  const SearchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (userId >= 1 && searchInput) {
    SearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userId = Number (searchInput.value);
      console.log(userId);
    
       if (userId >= 10 && userId >= 1) {
        windows.location.href = `details.html?id-${userId}`
        
      
          console.log("Geçerli kullanıcı ID:", userId); 
   
           }else {
               alert("Lütfen 10 veya daha küçük bir kullanıcı ID giriniz.");
              } 

    });
   } 
  
  else {
    

     console.warm("form veya input bulunamadı");
        
  }
});

fetchUsers(); */

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    /*searchInput.value = "";*/
    searchInput.setAttribute("autocomplete", "off");
  searchInput.value = "";
  };

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userId = Number(searchInput.value);

      if (userId >= 1 && userId <= 10) {
        window.location.href = `post.html?id=${userId}`;
        console.log("Geçerli kullanıcı ID:", userId);
      } else {
        alert("Lütfen 10 veya daha küçük bir kullanıcı ID giriniz.");
      }
    });
  } else {
    console.warn("Form veya input bulunamadı.");
  }
});

fetchUsers();

window.onload = () => {
  document.getElementById("searchInput").value = ""
}