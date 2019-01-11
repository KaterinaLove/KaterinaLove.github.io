var slide1 = document.getElementById("s1"),
  slide2 = document.getElementById("s2"),
  slide3 = document.getElementById("s3"),
  slide4 = document.getElementById("s4"),
  slide5 = document.getElementById("s5"),
  controlLeft = document.getElementById("controlLeft"),
  controlRight = document.getElementById("controlRight");
//кружочек пасивнай
function pasiv(name) {
  let control = document.getElementById(name);
  control.style.borderWidth = "2px";
  control.style.borderStyle = "solid";
  control.style.borderColor = "rgba(0, 0, 0, 0)";
  control.style.borderRadius = "50%";
  control.style.backgroundColor = "#a4a3a1";
}
//кружочек активный
function activ(name) {
  let control = document.getElementById(name);
  control.style.borderWidth = "2px";
  control.style.borderStyle = "solid";
  control.style.borderColor = "#a4a3a1";
  control.style.borderRadius = "50%";
  control.style.backgroundColor = "rgba(0, 0, 0, 0)";
}
//выбор слайда
// Можно поменять на прозрачность и сделать плавные переходы
function control(s1, s2, s3, s4, s5) {
  slide1.style.opacity = s1;
  slide2.style.opacity = s2;
  slide3.style.opacity = s3;
  slide4.style.opacity = s4;
  slide5.style.opacity = s5;
}

function slid1() {
  control("1","0","0","0","0");
  activ("control1");
  pasiv("control2");
  pasiv("control3");
  pasiv("control4");
  pasiv("control5");
}
function slid2() {
  control("0","1","0","0","0");
  activ("control2");
  pasiv("control1");
  pasiv("control3");
  pasiv("control4");
  pasiv("control5");
}
function slid3() {
  control("0","0","1","0","0");
  activ("control3");
  pasiv("control2");
  pasiv("control1");
  pasiv("control4");
  pasiv("control5");
}
function slid4() {
  control("0","0","0","1","0");
  activ("control4");
  pasiv("control2");
  pasiv("control3");
  pasiv("control1");
  pasiv("control5");
}
function slid5() {
  control("0","0","0","0","1");
  activ("control5");
  pasiv("control2");
  pasiv("control3");
  pasiv("control4");
  pasiv("control1");
}
//Старт функции перваначальная позиция
slid1();
//При нажатии на правую стрелочку
function slideRight() {
  if (slide1.style.opacity == "1") {
    slid2();
  } else if (slide2.style.opacity == "1") {
    slid3();
  } else if (slide3.style.opacity == "1") {
    slid4();
  } else if (slide4.style.opacity == "1") {
    slid5();
  } else if (slide5.style.opacity == "1") {
    slid1();
  }
}
//При нажатии левой стрелочки
function slideLeft() {
  if (slide1.style.opacity == "1") {
    slid5();
  } else if (slide2.style.opacity == "1") {
    slid1();
  } else if (slide3.style.opacity == "1") {
    slid2();
  } else if (slide4.style.opacity == "1") {
    slid3();
  } else if (slide5.style.opacity == "1") {
    slid4();
  }
}
//При нажатии на ссылки
controlLeft.onclick = function () {slideLeft();}
controlRight.onclick = function() {slideRight();}
control1.onclick = function() {slid1();}
control2.onclick = function() {slid2();}
control3.onclick = function() {slid3();}
control4.onclick = function() {slid4();}
control5.onclick = function() {slid5();}
//слайдер 6секунд
function timerId() {
  setInterval(function (){
    slideRight();
  }, 6000);
}
//Слайдер запускаеться после загрузки всей страницы
window.onload = function() {timerId()};