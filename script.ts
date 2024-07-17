const inputbox = document.querySelector(".inputtext") as HTMLInputElement;
const addbtn = document.querySelector(".btn") as HTMLButtonElement;
const items = document.querySelector(".items") as HTMLElement;
const textmsg = document.querySelector(".textmsg") as HTMLElement;

function additems(): void {
  let value: string = inputbox.value;
  textmsg.innerHTML = "";
  if (value === "") {
    let msg: HTMLParagraphElement = document.createElement("p");
    msg.textContent = "Enter a task";
    textmsg.appendChild(msg);
    setTimeout(() => {
      textmsg.innerHTML = "";
    }, 2000);
    return;
  }
  let newitem: HTMLLIElement = document.createElement("li");

  newitem.innerHTML = value;
  items.appendChild(newitem);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  newitem.appendChild(span);
  inputbox.value = "";
}

function completetask(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (target.tagName === "LI") {
    const listItem = target as HTMLLIElement;
    listItem.classList.toggle("checked");
    listItem.style.textDecoration =
      listItem.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  } else if (target.tagName === "SPAN") {
    const listItem = target.parentElement as HTMLLIElement;
    listItem.remove();
  }
}
items.addEventListener("click", completetask);
