// // 코드 구현
const id = document.getElementById("userid");
const pw = document.getElementById("userpw");
const btnLogin = document.querySelector(".btn-login");
const warningMsg = document.getElementById("warningMsg");

// 아이디 alert창
btnLogin.onclick = () => {
    if (id.value.length !== 0 && pw.value.length !== 0) {
        alert(`${id.value}님 어서오세요`);
    } else if (id.value.length === 0 && pw.value.length !== 0) {
        alert("아이디를 입력해주세요");
    } else if (id.value.length !== 0 && pw.value.length === 0) {
        alert("비밀번호를 입력해주세요");
    } else {
        alert("아이디와 비밀번호를 입력해주세요");
    };
};

// 비밀번호 경고문 창
pw.onkeydown = () => {
    if (id.value !== "" && (pw.value.length > 6 && pw.value.length < 19)) {
        warningMsg.innerHTML = ""
        btnLogin.removeAttribute('disabled')
    } else if(id.value !=="" && (pw.value.length < 6 || pw.value.length > 19)) {   
        warningMsg.innerHTML = "<div style='color:red; font-size: 12px'> 비밀번호는 영어, 숫자 포함 8자 ~ 20자입니다 </div>"
        btnLogin.setAttribute('disabled', 'disabled');
    } else if (id.value == "" && pw.value !== "") {
        warningMsg.innerHTML = "<div style='color:red; font-size: 12px'> 아이디를 입력해주세요 </div>"
        btnLogin.setAttribute('disabled', 'disabled');
    }
};


// 아이디 입력란이 입력되고 + 비밀번호가 8자리 이상이어야지 (여기에 경고문)
// 로그인 버튼이 활성화가 되고 (기본값은 disabled) >> setRemove('disalbed')
// 로그인 버튼을 눌렀을 때 아이다 alert창

