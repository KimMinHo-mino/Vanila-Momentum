const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //JSON.stringtify 는 어떤 객체든 string으로 바꿔줌. 오브젝트든 배열이든.
    //반대로 돌리려면 JSON.parse를 이용하면 된다.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDos => toDos.id !== parseInt(li.id));
    //아래의 함수를 하나로 만든 것
    /*
    function sexyFilter(item){
    return item.id !== ;}
    [1, 2, 3, 4].filter(sexyFilter)
    */
    saveToDos();
    console.log(li.id);
    li.remove();
    //어떤 버튼이 클릭되었나를 event인자의 target를 통해서 받아오고
    //받아온 target인자에 parnetElement를 찾아 지우면 한번에 사라지게 될 것이다.
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    
    const span = document.createElement("span");
    //요소들이 연결되어 있지 않은 상태
    span.innerText = newTodoObj.text;
    
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    
    //밸류를 전달받은 인자로 변경
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    toDoInput.value = '';
    paintToDo(newTodoObj);
    saveToDos();
}

/*
아래를 parsedToDos.forEach(sayHello) 라고 썼다면?

function sayHello(item) {
    console.log("this is the turn of", item);
}
*/

//array관련 내장메서드에서 어떤 객체가 실행되고 있는지
//event가 발생할 때 event 정보를 자동으로 넘겨주듯
//item을 자동으로 넘겨준다.

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = (localStorage.getItem(TODOS_KEY));

if(savedToDos !== null){
    const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
    //parsedToDos.forEach((item) => console.log("this is the turn of", item));
    //JS에 있는 array관련한 내장 메서드인데 파이썬의 for 루프를 하나로 만들어주는 느낌이다.
    //화살표함수는 바로 실행하게 해줌 (item)은 하나씩 넘어오는 객체
    toDos = parsedToDos; //이전에 저장된 todo가져오기.
    parsedToDos.forEach(paintToDo); 
}


//for each와 비슷하게 array의 요소들에게
//sexFilter함수가 true이면 새로만드는 배열에 포함하고
//False이면 새로 만드는 배열에 포함하지 않음.
