const countdownelement = document.getElementById("countdown");
const resetvalueelement = document.querySelector(".resetvalue");

let startcount = 0;
let timer;

const starttimer = () => {
  timer = setInterval(() => {
    countdownelement.innerHTML = startcount++;
  }, 1000);
};

const stoptimer = () => {
  clearInterval(timer);
};

document.querySelector(".start").addEventListener("click", starttimer);
document.querySelector(".stop").addEventListener("click", stoptimer);

const resettimer = () => {
  startcount = 0;
  countdownelement.innerHTML = startcount;
  clearInterval(timer);
};
document.querySelector(".reset").addEventListener("click", resettimer);

const showstopvalue = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `The stop time is ${startcount}`;
  resetvalueelement.appendChild(newPara);
};

document.querySelector(".stop").addEventListener("click", () => {
  stoptimer();
  showstopvalue();
});

const gettime = () => {
  alert(`Current time is: ${startcount}`);
};
document.querySelector(".get").addEventListener("click", gettime);

const cleartime = () => {
  resetvalueelement.innerHTML = '';
};
document.querySelector(".clear").addEventListener("click", cleartime);
