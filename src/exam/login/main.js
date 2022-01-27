// 코드 구현
const userId = document.getElementById("userid");
const userPw = document.getElementById("userpw");
const btnLogin = document.querySelector(".btn-login");
const warning = document.getElementById("warning");

btnLogin.onclick = () => {
    userId.value.length !== 0 ? alert(`${userId.value}님 어서오세요`) : alert("아이디를 입력해주세요")
};

// 이 부분 다시
userPw.onchange = () => {
    if (userPw.value.length < 8 || userPw.value.length > 20) {
        warning.style.color = '#ff000'
    } else {
        warning.style.color = '#fff';
        btnLogin.target.disalbe = false;
    }
}