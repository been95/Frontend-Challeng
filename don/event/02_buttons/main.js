"use strict";
class Menu{
    constructor(element){
        this.element = element;
        element.onclick = this.onClick.bind(this);
    }

    save() {
        alert("저장하기");
    }
    load() {
        alert("불러오기");
    }
    search(){
        alert("검색하기");
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

new Menu(menu);