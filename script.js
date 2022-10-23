// window.alert("Hello");

// let score = 0
// for(var i=0; i < questions.length; i++) {

// }

// let questions = [{

// prompt: "How does a for loop start?"
// answer: "b"
// }
// ]
// document.getElementById
document.getElementsByClassName("box")[0].style.display = "block";
function next(id) {
  document.getElementsByClassName("box")[id - 1].style.display = "none";
  document.getElementsByClassName("box")[id].style.display = "block";
}

function results() {
  let result = 0;
  if (document.getElementById(rightAnswer1).checked) {
    result++;
  }
  if (document.getElementById(rightAnswer2).checked) {
    result++;
  }
  if (document.getElementById(rightAnswer3).checked) {
    result++;
  }
  if (document.getElementById(rightAnswer4).checked) {
    result++;
  }
  if (document.getElementById(rightAnswer5).checked) {
    result++;
  }
  window.alert("FINAL SCORE:" + score);
}
