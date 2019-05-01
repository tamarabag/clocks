function infoOfTheDay() {
  fill(237, 237, 237);
  fill(0);
  noStroke();
  textFont("Georgia");
  textAlign(CENTER, CENTER);
  textSize(33);
  text(
    "¡son las " + hour() + "!",
    (windowWidth - 175) / 2 + 175 / 2,
    20 + 175 / 6
  );

  textSize(18);
  var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
  ];
  text(
    String(day()).padStart(2, "0") +
      " " +
      monthName[month() - 1] +
      " " +
      year(),
    windowWidth / 2,
    clocky[0].y + clocky[0].radius + 50
  );

  textAlign(LEFT, LEFT);
  text("relojes de mundos", (windowWidth - 175) / 2 + 7, 100);
  text("Hora: " + hour(), (windowWidth - 175) / 2 + 7, 130);
  text("Minutos: " + minute(), (windowWidth - 175) / 2 + 7, 150);
  text("Segundos: " + second(), (windowWidth - 175) / 2 + 7, 170);
}
