//let btn1 = document.querySelector("#btn1");
//btn1.onclick = () => {
   // let a = 35;
    //a++;
  //  console.log(a);
//}
// let div = document.querySelector("div");
// div.onmouseover = () => {
//    console.log("you are in side div");
//}

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
   if (currMode === "light"){
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }else{
    currMode = "light";
     body.classList.add("light");
      body.classList.remove("dark");
   }
   console.log(currMode);
});


var a = document.getElementsByName("text")[0];
var b = document.getElementById("head");
 function message(){
   b.innerHTML = "helloc " + a.value;
 }