const showModalBtn = document.querySelector(".btn-show-modal");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

showModalBtn.addEventListener("click",btnFunction);

const btnFunction = () =>{
    modal.style.opacity = "1";
}