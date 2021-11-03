"use strict";
var input = document.querySelector(".input");
input.addEventListener("keypress", addTag);
var tagArr = [];
function addTag(e) {
    var target = e.target;
    if (e.key === "Enter") {
        //   기존 태그와 중복된다면 그냥 return
        if (tagArr.includes(target.value)) {
            target.value = "";
            return;
        }
        var span_1 = document.createElement("span");
        span_1.setAttribute("class", "tag");
        span_1.innerText = target.value;
        document.body.insertBefore(span_1, input);
        tagArr.push(target.value);
        target.value = "";
        span_1.addEventListener("click", function () {
            span_1.remove();
        });
    }
}
