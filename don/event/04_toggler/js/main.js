"use strict";
document.addEventListener("click", function (event){
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let element = document.getElementById(id);
    element.hidden = !element.hidden;
});