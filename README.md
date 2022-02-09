# 제로베이스 Front-end 최종과제
`공부기간: 21. 11. 01 ~ 진행 중`

## 1. 로그인 화면 구현 
![login](img/login.gif)

### 1. HTML  
- form 태그를 사용하는 로그인 창 만들기
- ID / PW 태그를 div로 감싸 block 형태로 만들기
- PW ~ Btn 사이 warning message 삽입하기
- button 태그 기본 속성 disabled
    ```html
        <form> <!-- 축약 version --->
            <fieldset>
                <div class="input-box id-box">
                    <label for="userId"> Text </label>
                    <input type="text" id="userId">
                </div>
                <div class="input-box pw-box">
                    <label for="userPw"> Text </label>
                    <input type="password" id="userPw">
                </div>
                <!-- label 태그의 for 속성으로 가능 요소(input)를 참조한다 -->
            </fieldset>
        </form>
    ```
---

<br>  

    ### 2. CSS  
- ID / PW label 너비 맞추기
    ``` css
        label {
            display: block; /* label 태그의 display 속성 변경 후 */
            width: 25%; /* 너비 변경*/
        }
    ```
- input tag의 너비 상위 요소 너비의 나머지 부분 전체 사용하기
    ``` css
        input {
            flex: 1 /* 수평 배치 된 flex 박스에서 상위 요소의 나머지 너비 전체 사용 */
        }
    ```
---

<br>  

#### 3. Javascript
- addEventListener('onclick') to login button for alerting message
    ``` javascript 
        const btnLogin = document.querySelector(".btn-login");

        btnLogin.onclick = () => {
            // if ~ else if ~ else 조건문
            // input for userId의 value 값은 template lietral을 활용하여 값 추출
        }
    ```
- setAttribute, removeAttribute for expressing on the viewport along with the length of password.
    ```javascript
        const pw = document.getElementById("userPw")

        pw.onkeydown = () => {
            // if ~ else if ~ else 조건문
            // setAttribute("attribute", "value")
            // removeAttribute("attribute", "value")
        }
    ```
