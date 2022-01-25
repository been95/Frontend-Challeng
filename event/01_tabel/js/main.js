"use strict";

let selectedTd;

function highlight(td) {
    if (selectedTd) {
        //이미 강조되어있는 칸이 있다면 원상태로 바꿔준다.
        selectedTd.classList.remove("highlight");
    }
    selectedTd = td;
    selectedTd.classList.add("highlight"); // 새로운 td를 강조해준다.
}


//td 엘리먼트가 아닌 내부 (strong)엘리먼트를 클릭하면 evnt.target이 작동안됨
//table.onclick = function (event) {
   // let target = event.target; 

   // if (target.tagName != "TD") return;

   // highlight(target); 
//};
    table.onclick = function (event) {
        let td = event.target.closest("td");//이벤트가 발생할 요소부터 시작해 위로 올라가서 가장 가까운 <td>를 찾아냄
        if (!td) return;//event.target이<td>안에 있지 않으면 즉시 null을 반환하므로 아무작업이 일어나지 않는다.
        if (!table.contains(td)) return;//중첩 테이블이 있는 경우 event.target은 현재 테이블 바깥에 있는 <td>가 될 수도 있습니다.
        highlight(td);//진짜 <td>를 강조해줌
    };