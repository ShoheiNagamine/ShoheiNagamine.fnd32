'user strict'

const images = document.getElementsByClassName("img1");


let number = 0;

function changeImade() {
  images[number].classList.remove("active");
  number = (number + 1) % images.length;
  images[number].classList.add("active");
}

setInterval(changeImade, 4000);



const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
canvas.style.backgroundColor = "white";



canvasContext.beginPath();

//迷路
//.fillRect(X座標, Y座標, 幅, 高さ);
canvasContext.rect(0, 50, 50, 50);
canvasContext.rect(50, 50, 50, 50);
canvasContext.rect(100, 50, 50, 50);
canvasContext.rect(150, 50, 50, 50);
canvasContext.rect(200, 50, 50, 50);
canvasContext.rect(300, 50, 50, 50);
canvasContext.rect(350, 50, 50, 50);
canvasContext.rect(400, 50, 50, 50);
canvasContext.rect(450, 50, 50, 50);
canvasContext.rect(500, 50, 50, 50);

canvasContext.rect(0, 100, 50, 50);
canvasContext.rect(500, 100, 50, 50);

canvasContext.rect(0, 150, 50, 50);
canvasContext.rect(100, 150, 50, 50);
canvasContext.rect(200, 150, 50, 50);
canvasContext.rect(250, 150, 50, 50);
canvasContext.rect(300, 150, 50, 50);
canvasContext.rect(350, 150, 50, 50);
canvasContext.rect(400, 150, 50, 50);
canvasContext.rect(500, 150, 50, 50);

canvasContext.rect(0, 200, 50, 50);
canvasContext.rect(50, 200, 50, 50);
canvasContext.rect(100, 200, 50, 50);
canvasContext.rect(200, 200, 50, 50);
canvasContext.rect(300, 200, 50, 50);
canvasContext.rect(500, 200, 50, 50);

canvasContext.rect(0, 250, 50, 50);
canvasContext.rect(50, 250, 50, 50);
canvasContext.rect(200, 250, 50, 50);
canvasContext.rect(400, 250, 50, 50);
canvasContext.rect(500, 250, 50, 50);

canvasContext.rect(0, 300, 50, 50);
canvasContext.rect(50, 300, 50, 50);
canvasContext.rect(150, 300, 50, 50);
canvasContext.rect(200, 300, 50, 50);
canvasContext.rect(300, 300, 50, 50);
canvasContext.rect(400, 300, 50, 50);
canvasContext.rect(500, 300, 50, 50);

canvasContext.rect(0, 350, 50, 50);
canvasContext.rect(200, 350, 50, 50);
canvasContext.rect(300, 350, 50, 50);
canvasContext.rect(350, 350, 50, 50);
canvasContext.rect(400, 350, 50, 50);
canvasContext.rect(500, 350, 50, 50);

canvasContext.rect(0, 400, 50, 50);
canvasContext.rect(100, 400, 50, 50);
canvasContext.rect(150, 400, 50, 50);
canvasContext.rect(200, 400, 50, 50);
canvasContext.rect(300, 400, 50, 50);
canvasContext.rect(350, 400, 50, 50);
canvasContext.rect(500, 400, 50, 50);

canvasContext.rect(0, 450, 50, 50);
canvasContext.rect(300, 450, 50, 50);

canvasContext.rect(450, 450, 50, 50);
canvasContext.rect(500, 450, 50, 50);

canvasContext.rect(0, 500, 50, 50);
canvasContext.rect(50, 500, 50, 50);
canvasContext.rect(100, 500, 50, 50);
canvasContext.rect(150, 500, 50, 50);
canvasContext.rect(200, 500, 50, 50);
canvasContext.rect(300, 500, 50, 50);
canvasContext.rect(350, 500, 50, 50);
canvasContext.rect(400, 500, 50, 50);
canvasContext.rect(450, 500, 50, 50);
canvasContext.rect(500, 500, 50, 50);

canvasContext.fillStyle = "black";
canvasContext.fill();

//スタート位置
canvasContext.beginPath();
canvasContext.arc(275, 26, 24, 0,Math.PI * 2);
canvasContext.fillStyle = "red";
canvasContext.fill();

const button = document.getElementsByClassName("button")[0];
button.addEventListener("click", draw);

//ゴール　ffllllffrrfrrffffff
//ゴール　ffrrfffrffrffllllff
function draw() {
  //入力内容の取得
  const textInput = document.getElementsByClassName("textInput")[0];
  const texts = textInput.value;
  
  //文字を配列にする
  const result = [];
  for (const t of texts) {
    result.push(t);
  }

  let x = 275;
  let y = 26;

  for (let i = 0; i < result.length; i++ ) {
    if (result[i] === "f") {
      canvasContext.beginPath();
      canvasContext.arc(x, y += 50, 24, 0,Math.PI * 2);
      canvasContext.fillStyle = "red";
      canvasContext.fill();
    } else if (result[i] === "r") {
      canvasContext.beginPath();
      canvasContext.arc(x -= 50, y, 24, 0,Math.PI * 2);
      canvasContext.fillStyle = "red";
      canvasContext.fill();
    } else if (result[i] === "l") {
      canvasContext.beginPath();
      canvasContext.arc(x += 50, y, 24, 0,Math.PI * 2);
      canvasContext.fillStyle = "red";
      canvasContext.fill();
    }
  }
}
