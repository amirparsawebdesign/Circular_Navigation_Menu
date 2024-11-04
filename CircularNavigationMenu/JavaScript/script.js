let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

menuToggle.addEventListener("click", (event) => {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("active");
      console.log(event);
})

const listItems = document.querySelectorAll("li");

function activeLink(){
      listItems.forEach((item) => item.classList.remove("active"));
      this.classList.add("active"); 
};

listItems.forEach((item) => {
      item.addEventListener("click", activeLink);
});

/* AI Answer for the loop I just wanted.
listItems.forEach((item) => {
      item.addEventListener('click', function() {
            listItems.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
      });
});
*/