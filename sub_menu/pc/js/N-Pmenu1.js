const cPlus = document.querySelector("#commuPlus");


const upload = document.getElementById("uploadDiv");
const uploadbtn = document.querySelector("#N_upload");
const reset = document.querySelector("#N_reset");

const Pbox = document.querySelector("#boxS");

cPlus.addEventListener("click",function(event) {
    event.preventDefault();

    upload.setAttribute("class","notice");
    upload.style.visibility = "visible";
    cPlus.setAttribute("class","hidden");
    Pbox.setAttribute("class","hidden");
});


// 업로드 버튼 눌렀을때
uploadbtn.addEventListener("click", (event) => {
    event.preventDefault();

    const uploadImg = document.querySelector("#img_file").value;
    const textH = document.querySelector("#bigText").value;
    const textP = document.querySelector("#smallText").value;

    if (uploadImg == "" || textH == "" || textP == "") {
        alert(`빈 칸이 있는지 확인해주세요!!`);
        return false;
    } else {
            const uploadFiles = [];
            const files = document.querySelector('#img_file').files;
            console.log('files: ', files);
            const docFrag = new DocumentFragment();
            
            upload.setAttribute("class","hidden");
            upload.style.visibility = "hidden";
            cPlus.setAttribute("class","plus");
        
        
            [...files].forEach(file => {
                // 파일 갯수 검사
                if ([...files].length < 7) {
                    uploadFiles.push(file);
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const preview = createElement(e, file);
                        console.log('preview: ', preview);
                        console.log('imagePreview: ', Pbox);
                        Pbox.insertBefore(preview, Pbox.childNodes[0]);

                        const removeBttns = document.querySelectorAll(".del");
                        for (let i = 0; i < removeBttns.length; i++) {
                            console.log('boxs: ', removeBttns);
                            removeBttns[i].addEventListener("click", function () {
                                const dataContainer = this.closest(".box");
                                if (dataContainer) {
                                    dataContainer.parentNode.removeChild(dataContainer);
                                }
                            });
                        };
                    };
                    reader.readAsDataURL(file);
                };
            });
        // };
        function createElement(e, file) {
            const textH1 = document.querySelector("#bigText").value;
            const textP1 = document.querySelector("#smallText").value;
        
            const boxImg1 = document.createElement('img');
            const boxbtn = document.createElement("span");
            const btnText = document.createTextNode("X");
            const box1 = document.createElement("div");
            const boxH1 = document.createElement("h1");
            const boxP1 = document.createElement("p");
            boxImg1.setAttribute('src', e.target.result);
            boxImg1.setAttribute('data-file', file.name);
            boxImg1.setAttribute("class","img");
            box1.setAttribute("class","box");
            boxbtn.setAttribute("class","del");
            Pbox.setAttribute("class","boxS");
        
            boxP1.innerText = `${textP1}`;
            boxH1.innerText = `${textH1}`;
        
        
            // box버튼에 X텍스트 넣기
            boxbtn.appendChild(btnText);
            // div에 img태그 추가
            box1.appendChild(boxImg1);
            // div에 h1태그 추가
            box1.appendChild(boxH1);
            // div에 p태그 추가
            box1.appendChild(boxP1);
            // biv에 x버튼 추가
            box1.appendChild(boxbtn);
        
            document.querySelector("#img_file").value = "";
            document.querySelector("#bigText").value = "";
            document.querySelector("#smallText").value = "";
        
            return box1;
        };
    };
    // 첫번째 생성한건 X버튼이 적용이안됌
    // const removeBttns = document.querySelectorAll(".del");
    // for(let i = 0; i < removeBttns.length; i++){
    //     console.log("boxs: ", removeBttns);
    //     removeBttns[i].addEventListener("click", () => {
    //         if(this.parentNode.parentNode){
    //         this.parentNode.parentNode.removeChild(this.parentNode);
    //         };
    //     }); 
    // };
    return true;
});

// 취소 버튼을 눌렀을떄
reset.addEventListener("click", () => {
    if (confirm("취소하시겠습니까?") == true){
        document.box_text.reset();
        window.location.href = "./N-Pcommu.html";
    }
    else{
        return;
    }
});