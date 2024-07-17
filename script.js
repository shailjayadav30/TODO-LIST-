var inputbox = document.querySelector(".inputtext");
var addbtn = document.querySelector(".btn");
var items = document.querySelector(".items");
var textmsg = document.querySelector(".textmsg");
function additems() {
    var value = inputbox.value;
    textmsg.innerHTML = "";
    if (value === "") {
        var msg = document.createElement("p");
        msg.textContent = "Enter a task";
        textmsg.appendChild(msg);
        setTimeout(function () {
            textmsg.innerHTML = "";
        }, 2000);
        return;
    }
    var newitem = document.createElement("li");
    newitem.innerHTML = value;
    items.appendChild(newitem);
    var span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newitem.appendChild(span);
    inputbox.value = "";
}
function completetask(event) {
    var target = event.target;
    if (target.tagName === "LI") {
        var listItem = target;
        listItem.classList.toggle("checked");
        listItem.style.textDecoration =
            listItem.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    }
    else if (target.tagName === "SPAN") {
        var listItem = target.parentElement;
        listItem.remove();
    }
}
items.addEventListener("click", completetask);
