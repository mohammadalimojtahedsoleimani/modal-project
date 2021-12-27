const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".btn-close-modal");
const confirmBtn = document.querySelector(".btn-confirm-modal");

showModalBtn.addEventListener("click", btnFunction);
closeBtn.addEventListener("click" , closeFunction);
backdrop.addEventListener("click" , closeFunction);
confirmBtn.addEventListener("click",confirmFunction);


function btnFunction() {
    modal.style.opacity = "1";
    modal.style.transform = "translateY(5vh)";
    backdrop.style.display = "block";
}
function closeFunction(){
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
}
function confirmFunction(){
    alert("sign up was successful");
    closeFunction();
}