let imgBox = document.querySelector("#imgBox");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");
function generateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
}
let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    qrImg.style.margin = "20px";
    generateQR();
    btn.style.marginTop = "10px";
    para.style.fontSize = "15px";

});
let para = document.querySelector("p");
para.addEventListener("click",function(){
    para.style.textDecoration = "underline";
    para.style.fontSize = "10px";
    qrText.style.scale = "1.01";
    qrText.style.border = "2px solid green";
})
qrText.addEventListener("click",function(){
    para.style.color = "green"
    para.style.textDecoration = "underline green";
    para.style.fontSize = "10px";
    
})

let reset = document.querySelector("#resetbtn");
reset.addEventListener("click",function(){
    qrText.value = "";
    qrImg.src = "";
    btn.style.marginTop = "-10px";

})