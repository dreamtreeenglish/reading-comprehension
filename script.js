function resultOne() { 

  const canada = document.getElementById('q1-a').checked;
  const america = document.getElementById('q1-b').checked;
  const unitedKingdom = document.getElementById('q1-c').checked;
  const result = document.getElementById('result-1');
  
if (canada) {
  document.getElementById('result-1').innerHTML = '<span style="color:green ;">Correct!</span>';
} else {
  document.getElementById('result-1').innerHTML = '<span style="color:red ;">Try again!</span>';
  setTimeout(() => {
    result.innerHTML = '';
  }, 1500);
}
}


function resultTwo() { 

  const twoSiblings = document.getElementById('q2-a').checked;
  const threeSiblings = document.getElementById('q2-b').checked;
  const fourSiblings = document.getElementById('q2-c').checked;
  const resultTwo = document.getElementById('result-2');
  
if (threeSiblings) {
  document.getElementById('result-2').innerHTML = '<span style="color:green ;">Correct!</span>';;
} else {
  document.getElementById('result-2').innerHTML = '<span style="color:red ;">Try again!</span>';
  setTimeout(() => {
    resultTwo.innerHTML = '';
  }, 1500);
}
}

function resultThree() { 

  const yesItIs = document.getElementById('q3-a').checked;
  const noItIsnt = document.getElementById('q3-b').checked;
  const resultThree = document.getElementById('result-3');
  
if (noItIsnt) {
  document.getElementById('result-3').innerHTML = '<span style="color:green ;">Correct!</span>';;
} else {
  document.getElementById('result-3').innerHTML = '<span style="color:red ;">Try again!</span>';
  setTimeout(() => {
    resultThree.innerHTML = '';
  }, 1500);
}
}

function resultFour() { 

  const threeDays = document.getElementById('q4-a').checked;
  const fourDays = document.getElementById('q4-b').checked;
  const fiveDays = document.getElementById('q4-c').checked;
  const resultFour = document.getElementById('result-4');
  
if (threeDays) {
  document.getElementById('result-4').innerHTML = '<span style="color:green ;">Correct!</span>';;
} else {
  document.getElementById('result-4').innerHTML = '<span style="color:red ;">Try again!</span>';
  setTimeout(() => {
    resultFour.innerHTML = '';
  }, 1500);
}
}

function resultFive() { 

  const rugbyPlayer = document.getElementById('q5-a').checked;
  const soccerPlayer = document.getElementById('q5-b').checked;
  const proSwimmer = document.getElementById('q5-c').checked;
  const resultFive = document.getElementById('result-5');
  
if (proSwimmer) {
  document.getElementById('result-5').innerHTML = '<span style="color:green ;">Correct!</span>';;
} else {
  document.getElementById('result-5').innerHTML = '<span style="color:red ;">Try again!</span>';
  setTimeout(() => {
    resultFive.innerHTML = '';
  }, 1500);
}
}

