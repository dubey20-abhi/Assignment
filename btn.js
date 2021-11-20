let btn_red = document.getElementById("btn_clr_red");
let btn_neavy = document.querySelector("#btn_clr_neavy");
let btn_yellow = document.querySelector("#btn_clr_yellow");

let btn_10px = document.querySelector("#btn_fnt_10px");
let btn_20px = document.querySelector("#btn_fnt_20px");
let btn_30px = document.querySelector("#btn_fnt_30px");

let btn_f1 = document.querySelector("#btn_fs_1");
let btn_f2 = document.querySelector("#btn_fs_2");
let btn_f3 = document.querySelector("#btn_fs_3");

btn_red.addEventListener("click", function(){document.querySelector("p").style.color = "red";});
btn_neavy.addEventListener("click", function(){document.querySelector("p").style.color = "navy";});
btn_yellow.addEventListener("click", function(){document.querySelector("p").style.color = "yellow";});

btn_10px.addEventListener("click", function(){document.querySelector("p").style.fontSize = "10px";});
btn_20px.addEventListener("click", function(){document.querySelector("p").style.fontSize = "20px";});
btn_30px.addEventListener("click", function(){document.querySelector("p").style.fontSize = "30px";});

btn_f1.addEventListener("click", function(){document.querySelector("p").style.fontFamily = "monospace";});
btn_f2.addEventListener("click", function(){document.querySelector("p").style.fontFamily = "fantasy";});
btn_f3.addEventListener("click", function(){document.querySelector("p").style.fontFamily = "cursive";});

