const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");


submit.addEventListener("click", () => {
    const userid = document.forms[0].elements[0];
    const userpwd1 = document.forms[0].elements[1];
    const userpwd2 = document.forms[0].elements[2];
    const useremail = document.forms[0].elements[3];

    if (checkId() && checkPw() && comparePw() && checkemail()) {
        alert("회원가입 완료되었습니다.");
        window.location.href = "../../M-Phomp.html";
    } 


    function checkId(){
        if(userid.value.length < 8){
            alert("아이디를 8자이상 입력해주세요");
            userid.select();
            return false; 
        }
        return true;
    }
    
    function checkPw(){
        if(userpwd1.value.length < 8){
            alert("비밀번호는 8자리 이상이어야 합니다.");
            userpwd1.value = "";
            userpwd1.focus();
            return false;
        }
        return true;
    }
    
    function comparePw(){
        if(userpwd1.value !== userpwd2.value){
            alert("비번이 다릅니다. 다시 입력하세요.");
            userpwd2.value = "";
            userpwd2.focus();
            return false;
        }
        return true;
    }
    function checkemail(){
        if(useremail.value == ''){
            alert("이메일을 입력해주세요");
            useremail.focus();
            return false; 
        }
        return true;
    }
});

reset.addEventListener("click", () => {
    if (confirm("회원가입을 취소하시겠습니까?") == true) {
        // alert("회원가입이 취소되었습니다.");
        window.location.href = "../../M-Phomp.html";
    } else {
        return;
    };
});