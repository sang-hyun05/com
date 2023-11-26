const all = document.getElementById("all");
const cpus = document.getElementById("cpus");
const gpus = document.getElementById("gpus");

const cpu = document.querySelectorAll("#cpu");
const gpu = document.querySelectorAll("#gpu");

all.addEventListener("click", () => {
    for (let i = 0; i < cpu.length; i++) {
        cpu[i].setAttribute("class", "boxs");
    };
    for (let i = 0; i < gpu.length; i++) {
        gpu[i].setAttribute("class", "boxs");
    };
});

cpus.addEventListener("click", () => {
    for (let i = 0; i < cpu.length; i++) {
        cpu[i].setAttribute("class", "boxs");
    };
    for (let i = 0; i < gpu.length; i++) {
        gpu[i].setAttribute("class", "boxs hidden");
    };
});

gpus.addEventListener("click", () => {
    for (let i = 0; i < cpu.length; i++) {
        cpu[i].setAttribute("class", "boxs hidden");
    };
    for (let i = 0; i < gpu.length; i++) {
        gpu[i].setAttribute("class", "boxs");
    };
});


// 장바구니로 보내는 js 코드 작성 부분
const pick = document.querySelectorAll("#pick");

for(let i = 0; i < pick.length; i++) {
    pick[i].addEventListener("click", () => {
    const img = document.querySelectorAll(".imgs")[i].src;
    console.log('img :', img);
        
    });
};