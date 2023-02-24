const categoriesItemEl = document.querySelectorAll(".item");
const categoriesItemTitle = document.querySelectorAll("h2");

console.log("Number of categories:", categoriesItemEl.length);
categoriesItemTitle.forEach(title => {
    console.log("Category:", title.textContent);
    console.log("Elements:", title.nextElementSibling.childElementCount);
    
})









