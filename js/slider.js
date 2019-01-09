var slide1 = document.getElementById("s1"),
  slide2 = document.getElementById("s2"),
  slide3 = document.getElementById("s3"),
  slide4 = document.getElementById("s4"),
  slide5 = document.getElementById("s5"),
  controlLeft = document.getElementById("controlLeft"),
  controlRight = document.getElementById("controlRight");

var control1 = document.getElementById("control1"),
  control2 = document.getElementById("control2"),
  control3 = document.getElementById("control3"),
  control4 = document.getElementById("control4"),
  control5 = document.getElementById("control5");

function pasiv(name) {
  let control = document.getElementById(name);
  control.style.borderWidth = "2px";
  control.style.borderStyle = "solid";
  control.style.borderColor = "rgba(0, 0, 0, 0)";
  control.style.borderRadius = "50%";
  control.style.backgroundColor = "#a4a3a1";
}

function activ(name) {
  let control = document.getElementById(name);
  control.style.borderWidth = "2px";
  control.style.borderStyle = "solid";
  control.style.borderColor = "#a4a3a1";
  control.style.borderRadius = "50%";
  control.style.backgroundColor = "rgba(0, 0, 0, 0)";
}

function control(s1, s2, s3, s4, s5) {
  slide1.style.zIndex = s1;
  slide2.style.zIndex = s2;
  slide3.style.zIndex = s3;
  slide4.style.zIndex = s4;
  slide5.style.zIndex = s5;
}

function slid1() {
  control("-1","-2","-2","-2","-2");
  activ("control1");
  pasiv("control2");
  pasiv("control3");
  pasiv("control4");
  pasiv("control5");
}
function slid2() {
  control("-2","-1","-2","-2","-2");
  activ("control2");
  pasiv("control1");
  pasiv("control3");
  pasiv("control4");
  pasiv("control5");
}
function slid3() {
  control("-2","-2","-1","-2","-2");
  activ("control3");
  pasiv("control2");
  pasiv("control1");
  pasiv("control4");
  pasiv("control5");
}
function slid4() {
  control("-2","-2","-2","-1","-2");
  activ("control4");
  pasiv("control2");
  pasiv("control3");
  pasiv("control1");
  pasiv("control5");
}
function slid5() {
  control("-2","-2","-2","-2","-1");
  activ("control5");
  pasiv("control2");
  pasiv("control3");
  pasiv("control4");
  pasiv("control1");
}

controlRight.onclick = function () {
  if (slide1.style.zIndex == "-1") {
    slid2();
  } else if (slide2.style.zIndex == "-1") {
    slid3();
  } else if (slide3.style.zIndex == "-1") {
    slid4();
  } else if (slide4.style.zIndex == "-1") {
    slid5();
  } else if (slide5.style.zIndex == "-1") {
    slid1();
  }
}

controlLeft.onclick = function () {
  if (slide1.style.zIndex == "-1") {
    slid5();
  } else if (slide2.style.zIndex == "-1") {
    slid1();
  } else if (slide3.style.zIndex == "-1") {
    slid2();
  } else if (slide4.style.zIndex == "-1") {
    slid3();
  } else if (slide5.style.zIndex == "-1") {
    slid4();
  }
}

control1.onclick = function() {slid1();}
control2.onclick = function() {slid2();}
control3.onclick = function() {slid3();}
control4.onclick = function() {slid4();}
control5.onclick = function() {slid5();}
document.addEventListener("DOMContentLoaded", timerId);

function timerId() {
  setInterval(function () {
    if (slide1.style.zIndex == "-1") {
      slid2();
    } else if (slide2.style.zIndex == "-1") {
      slid3();
    } else if (slide3.style.zIndex == "-1") {
      slid4();
    } else if (slide4.style.zIndex == "-1") {
      slid5();
    } else if (slide5.style.zIndex == "-1") {
      slid1();
    }
  }, 5000);
}
