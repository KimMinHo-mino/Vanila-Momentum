// LoginForm id를 먼저 찾고, 그 loginForm 안에서 input과 button을 찾음.
// 슈도 - 셀렉터

/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//같은 내용의 String을 여러번 사용하면 대문자 상수로 재사용하는 것이 좋음.

//코드의 재사용을 위해 함수로 만들어주기


function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



function onLoginSubmit(event) {
    event.preventDefault();
    // 어떤 event의 기본 행동이든 막는 것. form을 submit하면 새로고침 하는 것 방지.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}


/*
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}
*/
//여기서의 event는 MouseEvent인데, 여기서 유저가 클릭한 위치의 정보도 알 수 있다.


//link.addEventListener("click", handleLinkClick)
// 브라우저가 이벤트리스너를 통해 호출할 때는 이벤트에 대한 정보를 담아서 호출한다. onLoginSubmit(info) info를 담아서 호출한다는 의미.


// default가 hidden인 상황이어서 히든을 없애줘야 하는 상태

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

//savedUsername인 이유. 함수 안에서 저장한 변수는 전역변수가 아니기 때문.


// JS로 입력 글자수 제한하는 법. form 태그 내부의 것 이용안하고.
/*
function handleLoginBtnClick() {
    const username = loginInput.value;
    if (username === ""){
        alert("Please Write your name");
    }
    else if(username.length > 15){
        alert("Your name is too long.")
    }
}
*/

/*
loginButton.addEventListener("click",handleLoginBtnClick);
*/

// code flow
/*
코드 안에서 paintGreetings 함수는 두번 호출된다. 
페이지와 스크립트가 로드되면서, localstorage에
 username이 없냐 있냐에 따라서 제어문이 달라지는데,
처음호출되는 함수는 없는 경우이므로 submit리스너에서,
document를 통해 접근해서 알아오고,
아래의 함수는 있는 경우이므로 localstorage에서
가져오게 된다. 따라서 인자가 다르다.
*/