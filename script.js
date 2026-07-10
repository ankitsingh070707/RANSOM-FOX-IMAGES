let foxurl = "https://randomfox.ca/floof/";
let foximg = document.getElementById("fox_img");
let searchbtn = document.getElementById("search_img");

searchbtn.addEventListener("click" , () => {
    getimg()
})

const getimg = async() => {
    let foxpromice = await fetch(foxurl);
    let data = await foxpromice.json();
    foximg.setAttribute("src" , data.image);
}