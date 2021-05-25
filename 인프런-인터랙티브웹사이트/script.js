let x = 0;
let y = 0;
let cursor_item;
let mx = 0;
let my = 0;
let speed = 0.05;
let h1;

window.onload = function(){ //화면이 다 로드 됐을떄
  h1 = document.getElementsByTagName("h1")[0];
  cursor_item = document.getElementsByClassName("cursor_item")[0];
  window.addEventListener("click",mouseFunc, false);

  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
    cursor_item.style.transform = "translate(" + x + "px, " + y + "px)";

      //console.log(e.clientX, e.clientY);
  }
  //loop();
}

/*function loop(){
  mx += (x - mx) * speed;  //거리가 멀수록 속도가 큼 -> 가속이 붙음
  my += (y - my) * speed;

  h1.innerHTML = "x: " + x + "<br>" + "mx: " + mx;

  cursor_item.style.transform = "translate(" + mx + "px, " + my + "px)";
  window.requestAnimationFrame(loop);
}*/
