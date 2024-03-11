let input = document.querySelector(".input");
let list = document.querySelector(".list");
let btn = document.querySelector(".btn");
var checkIcon, string, trash;
btn.addEventListener("click", (event) => {
  console.log("clicked");
  getList();
});

getList = () => {
          // var checkIcon = document.createElement("i");
          var string = document.createElement("div");
          var trash = document.createElement("i");
          var textSpan = document.createElement("span");
          textSpan.innerHTML = input.value;
        
          string.className = "string";
          // checkIcon.className = "fas fa-check-square";
          // checkIcon.style.backgroundColor = "black";
          trash.className = "fas fa-trash";
          trash.style.marginRight = "10px";
          textSpan.style.marginLeft = "10px";
          string.style.background = "linear-gradient(to bottom, #5cdb95, #8ee4af)";
          string.append(textSpan);
          // string.append(checkIcon);
          string.append(trash);
          input.value = "";
          list.insertAdjacentElement("beforeend", string);
          trash.onclick=()=>{
              string.remove();
          };
};




