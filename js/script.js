function previous_step() {
  var canvas = document.getElementById("board");

  var ctx = canvas.getContext("2d");
  document.getElementById("label1").innerHTML = "";
  document.getElementById("label2").innerHTML = "";
  document.getElementById("current-step").innerHTML = "";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//

function onestep(ctx, startx, starty, fontx, fonty, j, resultx, resulty, i) {
  document.getElementById("l4").style.backgroundColor = "#222222";
  ctx.strokeStyle = "#222222";
  ctx.fillStyle = "#222222";
  ctx.fillRect(startx - 71, starty + 79, 75, 75);
  //   ctx.clearRect(startx, starty + 80, 70, 70);
  ctx.strokeStyle = "rgb(255,208,0)";
  ctx.strokeRect(startx, starty + 80, 70, 70);
  ctx.fillStyle = "rgb(255,208,0)";
  ctx.font = "28px Sen ";
  ctx.fillText(element, fontx, fonty + 80);
  ctx.clearRect(startx - 70, starty, 70, 70);
  if (j != 0) {
    ctx.fillStyle = "#eee";
    ctx.font = "28px Sen";
    ctx.fillText(arr[j - 1], fontx - 70, fonty);
  }

  ctx.fillStyle = "rgb(255,208,0)";
  ctx.fillRect(startx, starty, 70, 70);
  ctx.strokeStyle = "#eee";
  ctx.strokeRect(startx, starty, 70, 70);
  ctx.fillStyle = "#eee";
  ctx.font = "28px Sen ";
  ctx.fillText(arr[j], fontx, fonty);

  //here
  document.getElementById("label1").innerHTML =
    "Checking your element " + element + " against " + arr[j];

  document.getElementById("l5").style.backgroundColor = "#00b92b23";

  if (arr[j] == element) {
    document.getElementById("label2").innerHTML =
      "Element found at position : " + j;
    document.getElementById("l6").style.backgroundColor = "#222222";
    document.getElementById("l5").style.backgroundColor = "#222222";
    document.getElementById("l7").style.backgroundColor = "#00b92b23";
    document.getElementById("current-step").innerHTML = document.getElementById(
      "l7"
    ).textContent;
    document.getElementById("label2").style.color = "#28a745";
    i = arr.length + 1;
    clearInterval(interval);
  } else if (j != length - 1) {
    document.getElementById("label2").innerHTML =
      "Checking (if element(" +
      element +
      "== " +
      arr[j] +
      ")     Condition Flase";
    document.getElementById("l7").style.backgroundColor = "#222222";
    document.getElementById("l5").style.backgroundColor = "#222222";
    document.getElementById("l4").style.backgroundColor = "#00b92b23";
    document.getElementById("current-step").innerHTML = document.getElementById(
      "l4"
    ).textContent;
    document.getElementById("label2").style.color = "#ff0730";
  } else {
    document.getElementById("label2").innerHTML =
      element + " not found in the array. ";
    document.getElementById("l5").style.backgroundColor = "#222222";
    document.getElementById("l6").style.backgroundColor = "#222222";
    document.getElementById("l7").style.backgroundColor = "#00b92b23";
    document.getElementById("current-step").innerHTML = document.getElementById(
      "l7"
    ).textContent;
    document.getElementById("label2").style.color = "#ff0730";
  }
}
var element = 0;
var startx = 100;
var starty = 50;
var fontx = 105;
var fonty = 100;
var resultx = 105;
var resulty = 100;
var i = 0;
var j = 0;
var prev = 0;
var resultx = 105;
var resulty = 100;
function next_step() {
  if (i < arr.length) {
    startx = 100;
    starty = 50;
    fontx = 105;
    fonty = 100;
    window.devicePixelRatio = 1;
    var canvas = document.getElementById("board");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    var ctx = canvas.getContext("2d");
    for (var k = 0; k < length; k++) {
      ctx.strokeStyle = "rgb(255,208,0)";
      ctx.fillStyle = "rgb(255,208,0)";
      ctx.strokeRect(startx, starty, 70, 70);
      ctx.font = "20px Sen";
      ctx.fillText(k, fontx + 20, fonty - 70);
      ctx.font = "28px Sen";
      ctx.fillText(arr[k], fontx, fonty);
      fontx = fontx + 70;
      startx = startx + 70;
    }
    startx = 100 + i * 70;
    // alert(i);
    //alert(startx);

    starty = 50;
    fontx = 105 + i * 70;
    fonty = 100;

    document.getElementById("l4").style.backgroundColor = "#222222";
    ctx.strokeStyle = "#222222";
    ctx.fillStyle = "#222222";
    ctx.fillRect(startx - 71, starty + 79, 75, 75);
    //   ctx.clearRect(startx, starty + 80, 70, 70);
    ctx.strokeStyle = "rgb(255,208,0)";
    ctx.strokeRect(startx, starty + 80, 70, 70);
    ctx.fillStyle = "rgb(255,208,0)";
    ctx.font = "28px Sen ";
    ctx.fillText(element, fontx, fonty + 80);

    ctx.clearRect(startx - 70, starty, 70, 70);
    if (j != 0) {
      ctx.fillStyle = "#eee";
      ctx.font = "28px Sen";
      ctx.fillText(arr[j - 1], fontx - 70, fonty);
    }

    ctx.fillStyle = "rgb(255,208,0)";
    ctx.fillRect(startx, starty, 70, 70);
    ctx.strokeStyle = "#eee";
    ctx.strokeRect(startx, starty, 70, 70);
    ctx.fillStyle = "#eee";
    ctx.font = "28px Sen ";
    ctx.fillText(arr[j], fontx, fonty);

    document.getElementById("label1").innerHTML =
      "Checking your element " + element + " against " + arr[j];

    document.getElementById("l5").style.backgroundColor = "#00b92b23";

    if (arr[j] == element) {
      document.getElementById("label2").innerHTML =
        "Element found at position : " + j;
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById(
        "current-step"
      ).innerHTML = document.getElementById("l7").textContent;
      document.getElementById("label2").style.color = "#28a745";
      clearInterval(interval);
    } else if (j != length - 1) {
      document.getElementById("label2").innerHTML =
        "Checking (if element(" +
        element +
        "== " +
        arr[j] +
        ")     Condition Flase";
      document.getElementById("l7").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l4").style.backgroundColor = "#00b92b23";
      document.getElementById(
        "current-step"
      ).innerHTML = document.getElementById("l4").textContent;
      document.getElementById("label2").style.color = "#ff0730";
    } else {
      document.getElementById("label2").innerHTML =
        element + " not found in the array. ";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById(
        "current-step"
      ).innerHTML = document.getElementById("l7").textContent;
      document.getElementById("label2").style.color = "#ff0730";
    }
    fontx = fontx + 70;
    startx = startx + 70;
    j = j + 1;
    i = i + 1;
  }
}
//  onestep(ctx, startx, starty, fontx, fonty, j, resultx, resulty, i);
function execute() {
  length = parseInt(document.getElementById("length").value);
  var str = document.getElementById("array").value;
  arr = str.split(",");
  element = document.getElementById("enter").value;
  window.devicePixelRatio = 1;
  var canvas = document.getElementById("board");
  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.getBoundingClientRect().height;
  var ctx = canvas.getContext("2d");
  //  ctx.fillStyle = "grey";
  //ctx.fillRect(100, 50, 70, 70);
  //ctx.fillStyle = "black";

  var startx = 100;
  var starty = 50;
  var fontx = 105;
  var fonty = 100;
  for (var i = 0; i < length; i++) {
    ctx.strokeStyle = "rgb(255,208,0)";
    ctx.fillStyle = "rgb(255,208,0)";
    ctx.strokeRect(startx, starty, 70, 70);
    ctx.font = "20px Sen";
    ctx.fillText(i, fontx + 20, fonty - 70);
    ctx.font = "28px Sen";
    ctx.fillText(arr[i], fontx, fonty);
    fontx = fontx + 70;
    startx = startx + 70;
  }

  var startx = 100;
  var starty = 50;
  var fontx = 105;
  var fonty = 100;
  var resultx = 105;
  var resulty = 100;
  i = 0;
  j = 0;
}

// script for UI functionality

// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("launch");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  popup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  popup.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// buttons functionality
// start() function to start predefined simulation
function start() {
  popup.style.display = "none";
  simulatorArea.scrollIntoView(true);
  // hiding the start button
  var start = document.getElementById("start");
  start.className = start.className.replace(/\bshow\b/g, "hide");
  // making prev and next buttons visible
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  prev.className = prev.className.replace(/\bhide\b/g, "show");
  next.className = next.className.replace(/\bhide\b/g, "show");
  // hiding user input tab (if displayed at that moment)
  var input = document.getElementById("input");
  input.className = input.className.replace(/\bshow\b/g, "hide");

  //mycode here
  var array = [12, 23, 67, 45, 69, 89, 41, 60, 78];

  length = 9;
  //var str = document.getElementById("array").value;
  arr = array;
  window.devicePixelRatio = 1;
  var canvas = document.getElementById("board");
  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.getBoundingClientRect().height;
  var ctx = canvas.getContext("2d");
  //  ctx.fillStyle = "grey";
  //ctx.fillRect(100, 50, 70, 70);
  //ctx.fillStyle = "black";

  var startx = 100;
  var starty = 50;
  var fontx = 105;
  var fonty = 100;
  for (var i = 0; i < length; i++) {
    ctx.strokeStyle = "rgb(255,208,0)";
    ctx.fillStyle = "rgb(255,208,0)";
    ctx.strokeRect(startx, starty, 70, 70);
    ctx.font = "20px Sen";
    ctx.fillText(i, fontx + 20, fonty - 70);
    ctx.font = "28px Sen";
    ctx.fillText(arr[i], fontx, fonty);
    fontx = fontx + 70;
    startx = startx + 70;
  }
  //end here
}

// reset() function to reset the simulator
function reset() {
  window.location.reload();
  return false;
}

// input() function to show input tab and take user input
function input() {
  // displaying confirm box
  var choice = confirm(
    "Have you Learnt the concept and want to do it yourself?"
  );
  //  alert(choice);
  if (choice == true) {
    //hiding prev and next
    document.getElementById("prev").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("user_prev").hidden = false;
    document.getElementById("user_next").hidden = false;
    previous_step();

    //displaying the input tab
    var input = document.getElementById("input");

    input.className = input.className.replace(/\bhide\b/g, "show");

    // hiding the start button
    var start = document.getElementById("start");
    start.className = start.className.replace(/\bshow\b/g, "hide");
    popup.style.display = "none";
    input.scrollIntoView(true);
    // making prev and next buttons visible
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    prev.className = prev.className.replace(/\bshow\b/g, "hide");
    next.className = next.className.replace(/\bshow\b/g, "hide");

    //clearing the previous contents
    // var check = document.getElementById("check");
    // var currentStep = document.getElementById("current-step");
    // check.innerHTML = "";
    // currentStep.innerHTML = "";
    // var canvas = document.getElementById("board");
    // var ctx = canvas.getContext('2d');
    // ctx.clearRect(0,0,canvas.width,canvas.height);
  } else {
    reset();
  }
}

var count_step = 0;

// prev() function to get one step back
function prev() {
  if (count_step > 0) {
    count_step--;
    next();
    count_step--;
  }
}

// next() function to move one step next
var array = [12, 23, 67, 45, 69, 89, 41, 60, 78];
function next() {
  if (count_step == 0) {
    var startx = 100;
    var starty = 50;
    var fontx = 105;
    var fonty = 100;
    var time = 6000;
    var j = 0;
    var resultx = 105;
    var resulty = 100;
    var arr = array;
    document.getElementById("l5");
    document.getElementById(
      "current-step"
    ).innerHTML = `At first step we are initializing various values .<br/> Element which we are trying to find is 45. <br/>Now we start by checking first  elemennt at POS I=0 .<br/> As we can see the value is not equal to what we are trying to find . Hence we move to position I = 1.  `;
    window.devicePixelRatio = 1;
    var canvas = document.getElementById("board");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 9; i++) {
      ctx.strokeStyle = "rgb(255,208,0)";
      ctx.fillStyle = "rgb(255,208,0)";
      ctx.strokeRect(startx, starty, 70, 70);
      ctx.font = "20px Sen";
      ctx.fillText(i, fontx + 20, fonty - 70);
      ctx.font = "28px Sen";
      ctx.fillText(arr[i], fontx, fonty);
      fontx = fontx + 70;
      startx = startx + 70;
    }

    var startx = 100;
    var starty = 50;
    var fontx = 105;
    var fonty = 100;

    document.getElementById("l4").style.backgroundColor = "#222222";

    ctx.strokeStyle = "#222222";
    ctx.fillStyle = "#222222";
    ctx.fillRect(startx - 71, starty + 79, 75, 75);
    //   ctx.clearRect(startx, starty + 80, 70, 70);
    ctx.strokeStyle = "rgb(255,208,0)";
    ctx.strokeRect(startx, starty + 80, 70, 70);
    ctx.fillStyle = "rgb(255,208,0)";
    ctx.font = "28px Sen ";

    ctx.fillText("45", fontx, fonty + 80);

    ctx.clearRect(startx - 70, starty, 70, 70);

    if (j != 0) {
      ctx.fillStyle = "#eee";
      ctx.font = "28px Sen";
      ctx.fillText(arr[j - 1], fontx - 70, fonty);
    }

    ctx.fillStyle = "rgb(255,208,0)";
    ctx.fillRect(startx, starty, 70, 70);
    ctx.strokeStyle = "#eee";
    ctx.strokeRect(startx, starty, 70, 70);
    ctx.fillStyle = "#eee";
    ctx.font = "28px Sen ";
    ctx.fillText(arr[j], fontx, fonty);

    //here
    document.getElementById("label1").innerHTML =
      "Checking your element " + "45" + " against " + arr[j];

    document.getElementById("l5").style.backgroundColor = "#00b92b23";

    if (arr[j] == 45) {
      document.getElementById("label2").innerHTML =
        "Element found at position at : " + j;
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#28a745";
      clearInterval(interval);
    } else if (j != length - 1) {
      document.getElementById("label2").innerHTML =
        "Checking (if element(" +
        "45" +
        "== " +
        arr[j] +
        ")     Condition Flase";
      document.getElementById("l7").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    } else {
      document.getElementById("label2").innerHTML =
        "45" + " not found in the array. ";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    }
    count_step++;
  } else if (count_step == 1) {
    var startx = 100;
    var starty = 50;
    var fontx = 105;
    var fonty = 100;
    var time = 6000;
    var j = 1;
    var resultx = 105;
    var resulty = 100;
    var arr = array;

    window.devicePixelRatio = 1;
    var canvas = document.getElementById("board");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 9; i++) {
      ctx.strokeStyle = "rgb(255,208,0)";
      ctx.fillStyle = "rgb(255,208,0)";
      ctx.strokeRect(startx, starty, 70, 70);
      ctx.font = "20px Sen";
      ctx.fillText(i, fontx + 20, fonty - 70);
      ctx.font = "28px Sen";
      ctx.fillText(arr[i], fontx, fonty);
      fontx = fontx + 70;
      startx = startx + 70;
    }

    var startx = 170;
    var starty = 50;
    var fontx = 175;
    var fonty = 100;

    document.getElementById("l4").style.backgroundColor = "#222222";
    document.getElementById(
      "current-step"
    ).innerHTML = `Now our current position is 1 and the element which is at position 1 is 23.</br>
      Again we will check the current element which is 23 with the element which we are trying to find .<br/>
      Clearly 23 is not equal to 45 , hence we will increase the counter to 2 and move to next step.
         `;
    ctx.strokeStyle = "#222222";
    ctx.fillStyle = "#222222";
    ctx.fillRect(startx - 71, starty + 79, 75, 75);
    //   ctx.clearRect(startx, starty + 80, 70, 70);
    ctx.strokeStyle = "rgb(255,208,0)";
    ctx.strokeRect(startx, starty + 80, 70, 70);
    ctx.fillStyle = "rgb(255,208,0)";
    ctx.font = "28px Sen ";

    ctx.fillText("45", fontx, fonty + 80);

    ctx.clearRect(startx - 70, starty, 70, 70);

    if (j != 0) {
      ctx.fillStyle = "#eee";
      ctx.font = "28px Sen";
      ctx.fillText(arr[j - 1], fontx - 70, fonty);
    }

    ctx.fillStyle = "rgb(255,208,0)";
    ctx.fillRect(startx, starty, 70, 70);
    ctx.strokeStyle = "#eee";
    ctx.strokeRect(startx, starty, 70, 70);
    ctx.fillStyle = "#eee";
    ctx.font = "28px Sen ";
    ctx.fillText(arr[j], fontx, fonty);

    //here
    document.getElementById("label1").innerHTML =
      "Checking your element " + "45" + " against " + arr[j];

    document.getElementById("l5").style.backgroundColor = "#00b92b23";

    if (arr[j] == 45) {
      document.getElementById("label2").innerHTML =
        "Element found at position at : " + j;
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#28a745";
      clearInterval(interval);
    } else if (j != length - 1) {
      document.getElementById("label2").innerHTML =
        "Checking (if element(" +
        "45" +
        "== " +
        arr[j] +
        ")     Condition Flase";
      document.getElementById("l7").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    } else {
      document.getElementById("label2").innerHTML =
        "45" + " not found in the array. ";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    }
    count_step++;
  } else if (count_step == 2) {
    var startx = 100;
    var starty = 50;
    var fontx = 105;
    var fonty = 100;
    var time = 6000;
    var j = 2;
    var resultx = 105;
    var resulty = 100;
    var arr = array;

    window.devicePixelRatio = 1;
    var canvas = document.getElementById("board");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 9; i++) {
      ctx.strokeStyle = "rgb(255,208,0)";
      ctx.fillStyle = "rgb(255,208,0)";
      ctx.strokeRect(startx, starty, 70, 70);
      ctx.font = "20px Sen";
      ctx.fillText(i, fontx + 20, fonty - 70);
      ctx.font = "28px Sen";
      ctx.fillText(arr[i], fontx, fonty);
      fontx = fontx + 70;
      startx = startx + 70;
    }

    var startx = 240;
    var starty = 50;
    var fontx = 245;
    var fonty = 100;

    document.getElementById("l4").style.backgroundColor = "#222222";
    document.getElementById(
      "current-step"
    ).innerHTML = `Now our current position is 2 and the element which is at position 2 is 67.</br>
      Again we will check the current element which is 67 with the element which we are trying to find .<br/>
      Clearly 67 is not equal to 45 , hence we will increase the counter to 3 and move to next step.
         `;

    ctx.strokeStyle = "#222222";
    ctx.fillStyle = "#222222";
    ctx.fillRect(startx - 71, starty + 79, 75, 75);
    //   ctx.clearRect(startx, starty + 80, 70, 70);
    ctx.strokeStyle = "rgb(255,208,0)";
    ctx.strokeRect(startx, starty + 80, 70, 70);
    ctx.fillStyle = "rgb(255,208,0)";
    ctx.font = "28px Sen ";

    ctx.fillText("45", fontx, fonty + 80);

    ctx.clearRect(startx - 70, starty, 70, 70);

    if (j != 0) {
      ctx.fillStyle = "#eee";
      ctx.font = "28px Sen";
      ctx.fillText(arr[j - 1], fontx - 70, fonty);
    }

    ctx.fillStyle = "rgb(255,208,0)";
    ctx.fillRect(startx, starty, 70, 70);
    ctx.strokeStyle = "#eee";
    ctx.strokeRect(startx, starty, 70, 70);
    ctx.fillStyle = "#eee";
    ctx.font = "28px Sen ";
    ctx.fillText(arr[j], fontx, fonty);

    //here
    document.getElementById("label1").innerHTML =
      "Checking your element " + "45" + " against " + arr[j];

    document.getElementById("l5").style.backgroundColor = "#00b92b23";

    if (arr[j] == 45) {
      document.getElementById("label2").innerHTML =
        "Element found at position at : " + j;
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#28a745";
      clearInterval(interval);
    } else if (j != length - 1) {
      document.getElementById("label2").innerHTML =
        "Checking (if element(" +
        "45" +
        "== " +
        arr[j] +
        ")     Condition Flase";
      document.getElementById("l7").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    } else {
      document.getElementById("label2").innerHTML =
        "45" + " not found in the array. ";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    }
    count_step++;
  } else if (count_step == 3) {
    var startx = 100;
    var starty = 50;
    var fontx = 105;
    var fonty = 100;
    var time = 6000;
    var j = 3;
    var resultx = 105;
    var resulty = 100;
    var arr = array;

    window.devicePixelRatio = 1;
    var canvas = document.getElementById("board");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 9; i++) {
      ctx.strokeStyle = "rgb(255,208,0)";
      ctx.fillStyle = "rgb(255,208,0)";
      ctx.strokeRect(startx, starty, 70, 70);
      ctx.font = "20px Sen";
      ctx.fillText(i, fontx + 20, fonty - 70);
      ctx.font = "28px Sen";
      ctx.fillText(arr[i], fontx, fonty);
      fontx = fontx + 70;
      startx = startx + 70;
    }

    var startx = 310;
    var starty = 50;
    var fontx = 315;
    var fonty = 100;

    document.getElementById("l4").style.backgroundColor = "#222222";

    ctx.strokeStyle = "#222222";
    ctx.fillStyle = "#222222";
    ctx.fillRect(startx - 71, starty + 79, 75, 75);
    //   ctx.clearRect(startx, starty + 80, 70, 70);
    ctx.strokeStyle = "rgb(255,208,0)";
    ctx.strokeRect(startx, starty + 80, 70, 70);
    ctx.fillStyle = "rgb(255,208,0)";
    ctx.font = "28px Sen ";

    ctx.fillText("45", fontx, fonty + 80);

    ctx.clearRect(startx - 70, starty, 70, 70);

    if (j != 0) {
      ctx.fillStyle = "#eee";
      ctx.font = "28px Sen";
      ctx.fillText(arr[j - 1], fontx - 70, fonty);
    }

    ctx.fillStyle = "rgb(255,208,0)";
    ctx.fillRect(startx, starty, 70, 70);
    ctx.strokeStyle = "#eee";
    ctx.strokeRect(startx, starty, 70, 70);
    ctx.fillStyle = "#eee";
    ctx.font = "28px Sen ";
    ctx.fillText(arr[j], fontx, fonty);

    //here
    document.getElementById("label1").innerHTML =
      "Checking your element " + "45" + " against " + arr[j];
    document.getElementById(
      "current-step"
    ).innerHTML = `Now our current position is 3 and the element which is at position 3 is 45.</br>
      This time element which we are trying to find becomes equal to the one at 3rd position .
      Hence our search is complete and we have found our element at position 3.
         `;

    document.getElementById("l5").style.backgroundColor = "#00b92b23";

    if (arr[j] == 45) {
      document.getElementById("label2").innerHTML =
        "Element found at position at : " + j;
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#28a745";
      //clearInterval(interval);
    } else if (j != length - 1) {
      document.getElementById("label2").innerHTML =
        "Checking (if element(" +
        "45" +
        "== " +
        arr[j] +
        ")     Condition Flase";
      document.getElementById("l7").style.backgroundColor = "#222222";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    } else {
      document.getElementById("label2").innerHTML =
        "45" + " not found in the array. ";
      document.getElementById("l5").style.backgroundColor = "#222222";
      document.getElementById("l6").style.backgroundColor = "#222222";
      document.getElementById("l7").style.backgroundColor = "#00b92b23";
      document.getElementById("label2").style.color = "#ff0730";
    }
    count_step++;
    // input();
  } else if (count_step == 4) {
    input();
  }
}

// script for visualisation using game
//initializing all variables globally
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
var optionE = document.getElementById("option-e");
var optionF = document.getElementById("option-f");
var optionG = document.getElementById("option-g");
var optionH = document.getElementById("option-h");

//places to target
var park = document.getElementById("park");
var temple = document.getElementById("temple");
var school = document.getElementById("school");
var hospital = document.getElementById("hospital");
var bus = document.getElementById("bus");
var railway = document.getElementById("railway");
var shopping = document.getElementById("shopping");
var other = document.getElementById("other");

var label = document.getElementById("status");

//getting the playground
var playground = document.getElementById("gameboard");
var simulatorArea = document.getElementById("simulator-area");

//get the cop
var cop = document.getElementById("cop");

// Get the modal
var gamePopup = document.getElementById("gamePopup");

// Get the button that opens the modal
var gameBtn = document.getElementById("gameLaunch");

// Get the <span> element that closes the modal
var gameClose = document.getElementsByClassName("gameClose")[0];

// When the user clicks the button, open the modal
gameBtn.onclick = function () {
  cop.style.visibility = "hidden";
  gamePopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
gameClose.onclick = function () {
  gamePopup.style.display = "none";
  cop.style.visibility = "visible";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == gamePopup) {
    popup.style.display = "none";
    cop.style.visibility = "visible";
  }
};

// buttons functionality
function drop() {
  document.getElementById("bomb").classList.remove("activeblink");
  // getting document wrapper
  var docWrapper = document.querySelector(".wrapper");
  // getting popup
  var dropMenu = document.getElementById("dropmenu");
  // getting close buttons for all Modals
  var closemenu = document.getElementsByClassName("close-menu")[0];

  //displaying the popup
  gamePopup.style.display = "none";
  dropMenu.style.display = "block";
  docWrapper.classList.add("blur");

  //closing the popup
  closemenu.onclick = function () {
    dropMenu.style.display = "none";
    popup.style.display = "none";
    docWrapper.classList.remove("blur");
    cop.style.visibility = "visible";
  };

  function optionSelected() {
    dropMenu.style.display = "none";
    popup.style.display = "none";
    docWrapper.classList.remove("blur");
    cop.style.visibility = "visible";
    playground.scrollIntoView();
  }

  //getting inputs
  //selecting option 1
  optionA.onclick = function () {
    setTimeout(function () {
      optionSelected();
      park.classList.add("highlight");
      cop.classList.add("park");
      label.classList.add("statusOne");
    }, 300);
  };

  //selecting option 2
  optionB.onclick = function () {
    setTimeout(function () {
      optionSelected();
      temple.classList.add("highlight");
      cop.classList.add("temple");
      label.classList.add("statusTwo");
    }, 300);
  };

  //selecting option 3
  optionC.onclick = function () {
    setTimeout(function () {
      optionSelected();
      school.classList.add("highlight");
      cop.classList.add("school");
      label.classList.add("statusThree");
    }, 300);
  };

  //selecting option 4
  optionD.onclick = function () {
    setTimeout(function () {
      hospital.classList.add("highlight");
      optionSelected();
      cop.classList.add("hospital");
      label.classList.add("statusFour");
    }, 300);
  };

  //selecting option 5
  optionE.onclick = function () {
    setTimeout(function () {
      bus.classList.add("highlight");
      optionSelected();
      cop.classList.add("bus");
      label.classList.add("statusFive");
    }, 300);
  };

  //selecting option 6
  optionF.onclick = function () {
    setTimeout(function () {
      railway.classList.add("highlight");
      optionSelected();
      cop.classList.add("railway");
      label.classList.add("statusSix");
    }, 300);
  };

  //selecting option 7
  optionG.onclick = function () {
    setTimeout(function () {
      shopping.classList.add("highlight");
      optionSelected();
      cop.classList.add("mall");
      label.classList.add("statusSeven");
    }, 300);
  };

  //selecting option 8
  optionH.onclick = function () {
    setTimeout(function () {
      optionSelected();
      cop.classList.add("notfound");
      label.classList.add("statusEight");
    }, 300);
  };
}

// Improvements to embed both Simulation in single page

function loadSimulation() {
  //hiding visualisation
  gameBtn.style.display = "none";
  gamePopup.style.display = "none";
  playground.style.display = "none";
  //showing simulation
  btn.style.display = "block";
  simulatorArea.style.display = "block";
}

function runVisualisation() {
  //hiding simulation
  btn.style.display = "none";
  popup.style.display = "none";
  simulatorArea.style.display = "none";
  //showing visulation
  gameBtn.style.display = "block";
  playground.style.display = "block";
  playground.scrollIntoView(true);
}
