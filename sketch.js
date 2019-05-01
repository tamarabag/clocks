let clocky = [];
let countClocks = 1;
let x1, x2, x3, x4;
let y1, y2, y3, y4;
let r;

let more = document.getElementById("more").addEventListener("click", () => {
  if (countClocks < 4) {
    countClocks++;
  }
  console.log(countClocks);
});

if (countClocks === 4) {
  document.getElementById("more").style.backgroundColor =
    "rgba(100, 100, 100, 0.7)";
}

let less = document.getElementById("less").addEventListener("click", () => {
  if (countClocks > 1) {
    countClocks--;
  }
  console.log(countClocks);
});

function definePosition() {
  //   CAN'T MAKE IT WORK WITH SWITCH

  // switch (countClocks) {
  //   case 1:
  //     x1 = windowWidth / 2;
  //     y1 = 600 / 2 - 25;
  //     r = min(windowWidth, 400 - 200);
  //   case 2:
  //     x1 = windowWidth / 4;
  //     y1 = 550 / 2 - 25;
  //     x2 = (windowWidth / 4) * 3;
  //     y2 = y1;
  //     r = min(windowWidth, 400 - 200) / 2;
  //   case 3:
  //     x1 = windowWidth / 4 + 25;
  //     y1 = 500 / 4 + 25;
  //     x2 = (windowWidth / 4) * 3 - 25;
  //     y2 = y1;
  //     x3 = x1;
  //     y3 = (500 / 4) * 3 + 60;
  //     r = min(windowWidth, 400 - 200) / 2;
  //   case 4:
  //     x1 = windowWidth / 4 + 25;
  //     y1 = 500 / 4 + 25;
  //     x2 = (windowWidth / 4) * 3 - 25;
  //     y2 = y1;
  //     x3 = x1;
  //     y3 = (500 / 4) * 3 + 60;
  //     x4 = x2;
  //     y4 = y3;
  //     r = min(windowWidth, 400 - 200) / 2;
  // }

  r = min(windowWidth, 400 - 200);

  if (countClocks === 1) {
    x1 = windowWidth / 2;
    y1 = height / 2 - 25;
  } else if (countClocks === 2) {
    x1 = windowWidth / 4;
    y1 = height / 2 - 25;
    x2 = (windowWidth / 4) * 3;
    y2 = y1;
  } else {
    x1 = windowWidth / 4 + 25;
    y1 = 500 / 4 + 25;
    x2 = (windowWidth / 4) * 3 - 25;
    y2 = y1;
    x3 = x1;
    y3 = (500 / 4) * 3 + 60;
    x4 = x2;
    y4 = y3;
    r = r / 2;
  }
}

function setup() {
  var canvas = createCanvas(windowWidth, 600);
  canvas.parent("sketch-holder");
}

function getHourInTimezone(hour, offset) {
  const hoursPerDay = 24;
  const result = (hour + offset) % hoursPerDay;
  if (result < 0) {
    return result + hoursPerDay;
  }
  return result;
}

function draw() {
  background(240);
  //infoOfTheDay();

  definePosition();
  if (countClocks === 4) {
    document.getElementById("more").style.backgroundColor =
      "rgba(100, 100, 100, 0.6)";
    document.getElementById("more").style.cursor = "default";
    // document.getElementById("more").classList.toggle("qtButton-not");
  } else if (countClocks < 4) {
    document.getElementById("more").style.backgroundColor =
      "rgba(100, 100, 100)";
    document.getElementById("more").style.cursor = "pointer";
  } else if (countClocks === 1) {
    document.getElementById("less").style.backgroundColor =
      "rgba(100, 100, 100, 0.6)";
    document.getElementById("less").style.cursor = "default";
    // document.getElementById("more").classList.toggle("qtButton-not");
  } else if (countClocks > 1) {
    document.getElementById("less").style.backgroundColor =
      "rgba(100, 100, 100)";
    document.getElementById("less").style.cursor = "pointer";
  }

  clocky[0] = new Clocky(x1, y1, r, 0, "Berlin", color(200, 30, 4));
  clocky[1] = new Clocky(x2, y2, r, -5, "Buenos Aires", color(100, 200, 50));

  clocky[2] = new Clocky(x3, y3, r, 7, "Tokyo", color(4, 30, 100));
  clocky[3] = new Clocky(x4, y4, r, 10, "Auckland", color(232, 217, 55));

  for (let i = 0; i < countClocks; i++) {
    clocky[i].drawIt();
  }
}
