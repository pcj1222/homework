/** https://developer.mozilla.org/ko/docs/Web/API/Element/classList **/
/** 위 링크를 참고하여 움짤처럼 동작하도록 TODO를(TODO만) 채우세요 **/

function renderHtml(component) {
    const screen = document.querySelector("#screen");
    screen.innerHTML = component;
}

function button(props) {
    // TODO
    return `<button id="${props.id}">${props.children}</button>`
}

function $(selector) {
    // TODO
    const $this = selector;

    return {    
        on: function(event, func){
            const $btn = document.querySelector(selector);
            return $btn.addEventListener( event, func );
        },
        hasClass: function(className){
            return $this.classList.contains(className);
        },
        removeClass: function(className){
            return $this.classList.remove(className);
        },
        addClass: function(className){
            return $this.classList.add(className);
        }
    }
}


/******* 이 아래 사용자 코드는 수정하는 부분이 아닙니다. *******/
const toggleButton = button( {id: "btn", children: "토글"} );
renderHtml(toggleButton);

$("#btn").on("click", function() {
    /** 배우지 않은 this가 처음 등장했으나 이 문제를 푸는데 있어서 이게 무엇인지는 중요치 않음 **/
    /** 지금까지 배운 내용만으로도 추론 가능함 **/
    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
    } else {
        $(this).addClass("on");
    }
});
/******* 이 위 사용자 코드는 수정하는 부분이 아닙니다. *******/