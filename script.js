let x = 0;
let y = 0;
let cursor_item;
let mx = 0;
let my = 0;
let speed = 0.009;
let h2;
let human;
let bg;

window.onload = function(){ //화면이 다 로드 됐을떄
  h2 = document.getElementsByTagName("h2")[0];
  human = document.getElementsByClassName("human")[0];
  bg = document.getElementsByClassName("bg")[0];
  window.addEventListener("mousemove",mouseFunc, false);

  function mouseFunc(e) {
    x = (e.clientX - window.innerWidth /2 ); //화면크기 절반을 빼줌
    y = (e.clientY - window.innerWidth /2 );
    //console.log(e.clientX, e.clientY);
  }
  loop();
}

function loop(){
  mx += (x - mx) * speed;  //거리가 멀수록 속도가 큼 -> 가속이 붙음
  my += (y - my) * speed;

  h2.innerHTML = "x: " + x + " mx: " + mx;
  human.style.transform = "translate(" + -(mx/6) + "px, " + -(my/6) + "px)";
  bg.style.transform = "translate(" + (mx/2) + "px, " + (my/2) + "px)";

  window.requestAnimationFrame(loop);
}
