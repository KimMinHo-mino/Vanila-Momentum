const images = ["0.jpg","1.jpg","2.jpg"];
const basePath = window.location.pathname.split("/")[1] ? `/${window.location.pathname.split("/")[1]}` : "";

const imagesLength = images.length;

const chosenImage = images[Math.floor(Math.random() * imagesLength)];
/*
const bgImage = document.createElement("img");
//JS를 통해서 생성한 img HTML Element
*/

const bgImage =  `url(${chosenImage})`;
//JS에 존재하도록 생성완료.

document.body.style.backgroundImage = bgImage;
//html의 body의 맨 뒤에 들어갈 수 밖에 없음.
//appendChild는 선택한 요소의 맨뒤에 위에서 만든 요소를 추가
