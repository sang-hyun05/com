const login = document.querySelector("#login");

login.addEventListener("click", () => {
    const Id = document.forms[0].elements[0];
    const Pwd = document.forms[0].elements[1];

    if (Id.value === '') {
        alert("아이디를 써주세요.");
        Id.focus();
        return false;
    } else {
        if (Pwd.value === '') {
            alert("비밀번호를 써주세요.");
            Pwd.focus();
        } else {
            window.location.href = "../../M-Phomp.html";
            return true;
        }
    }
});


const member = document.querySelector("#login_h");

member.addEventListener("click", () => {
    window.location.href = "../M-Pmember.html";
});