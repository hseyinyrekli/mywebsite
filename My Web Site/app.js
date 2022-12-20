const arrow = document.querySelector("#arrow");
const callAllPie = document.querySelector(".allPie");
const deleteSkills = document.querySelector("#exit");

eventList();
function eventList() {
  arrow.addEventListener("click", showSkills);
  deleteSkills.addEventListener("click", deleteInfos);
}
function deleteInfos() {
  while (callAllPie.firstElementChild != null) {
    callAllPie.removeChild(callAllPie.firstElementChild);

    if (callAllPie.firstElementChild == null) {
      document.querySelector("#exit").setAttribute("style", "display:none");
      arrow.addEventListener("click", showSkills);
      callAllPie.classList.add("allPie1");
    }
  }
}
//SLIDERS

var models = [
  {
    name: "To-Do List Project",
    image: "/My Web Site/prj1.png",
    link: "#",
  },
  {
    name: "My Website",
    image: "/My Web Site/prj2.png",
    link: "#",
  },
  {
    name: "Film Project",
    image: "/My Web Site/prj3.png",
    link: "#",
  },
];

var index = 0;
var sideIndex = 1;
var slideCount = models.length;

showSlide(index);
showOtherSlide(sideIndex);
document.querySelector("#arrowLeft").addEventListener("click", function () {
  index--;
  sideIndex--;

  showSlide(index);
  showOtherSlide(sideIndex);
});

document.querySelector("#arrowRight").addEventListener("click", function () {
  index++;
  sideIndex++;
  showSlide(index);
  showOtherSlide(sideIndex);
});
function showOtherSlide(a) {
  sideIndex = a;
  if (a < 0) {
    sideIndex = slideCount - 1;
  }
  if (a > 2) {
    sideIndex = slideCount - 3;
  }

  var sideSlide = models[sideIndex];
  document.querySelector(".card-text2").textContent = sideSlide.name;
  document.querySelector(".card-img-top2").setAttribute("src", sideSlide.image);
  document.querySelector(".card-img-top2").setAttribute("href", sideSlide.link);
}
function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slideCount - 1;
  }
  if (i > 2) {
    index = slideCount - 3;
  }

  var currentSlide = models[index];
  document.querySelector(".card-text1").textContent = currentSlide.name;
  document
    .querySelector(".card-img-top1")
    .setAttribute("src", currentSlide.image);
  document
    .querySelector(".card-img-top1")
    .setAttribute("href", currentSlide.link);
}

// function showOtherSlide(i) {
//   index = i;
//   if (i < 0) {
//     index = slideCount - 2;
//   }
//   if (i >= slideCount) {
//     index = slideCount - 1;
//   }
//   var sideSlide = models[index];

//   document.querySelector(".card-text2").textContent = sideSlide.name;
//   document.querySelector(".card-img-top2").setAttribute("src", sideSlide.image);
// }

function showSkills() {
  arrow.removeEventListener("click", showSkills);

  //DISPLAY EXIT BUTTON
  document
    .querySelector("#exit")
    .setAttribute("style", "display: inline-block");

  const pie = document.createElement("div");
  const pie1 = document.createElement("div");
  const pie2 = document.createElement("div");
  const pie3 = document.createElement("div");
  const rightDiv = document.createElement("div");
  const rightDiv1 = document.createElement("div");
  const rightDiv2 = document.createElement("div");
  const rightDiv3 = document.createElement("div");
  const leftDiv = document.createElement("div");
  const leftDiv1 = document.createElement("div");
  const leftDiv2 = document.createElement("div");
  const leftDiv3 = document.createElement("div");
  const percentDiv = document.createElement("div");
  const percentDiv1 = document.createElement("div");
  const percentDiv2 = document.createElement("div");
  const percentDiv3 = document.createElement("div");
  const numberDiv = document.createElement("div");
  const numberDiv1 = document.createElement("div");
  const numberDiv2 = document.createElement("div");
  const numberDiv3 = document.createElement("div");
  const nameDiv = document.createElement("div");
  const nameDiv1 = document.createElement("div");
  const nameDiv2 = document.createElement("div");
  const nameDiv3 = document.createElement("div");
  // ADD CLASSLIST
  callAllPie.classList.add("allPie1");
  pie.classList.add("pie1");
  rightDiv.classList.add("slice-right1");
  leftDiv.classList.add("slice-left1");
  percentDiv.classList.add("percent1");
  numberDiv.classList.add("number1");
  nameDiv.classList.add("name1");
  pie1.classList.add("pie1");
  rightDiv1.classList.add("slice-right1");
  leftDiv1.classList.add("slice-left1");
  percentDiv1.classList.add("percent1");
  numberDiv1.classList.add("number1");
  nameDiv1.classList.add("name1");
  pie2.classList.add("pie1");
  rightDiv2.classList.add("slice-right1");
  leftDiv2.classList.add("slice-left1");
  percentDiv2.classList.add("percent1");
  numberDiv2.classList.add("number1");
  nameDiv2.classList.add("name1");
  pie3.classList.add("pie1");
  rightDiv3.classList.add("slice-right1");
  leftDiv3.classList.add("slice-left1");
  percentDiv3.classList.add("percent1");
  numberDiv3.classList.add("number1");
  nameDiv3.classList.add("name1");
  //ADD INNERTEXT
  nameDiv.innerHTML = "HTML";
  numberDiv.innerHTML = "%99";
  nameDiv1.innerHTML = "CSS";
  numberDiv1.innerHTML = "%99";
  nameDiv2.innerHTML = "BOOTSTRAP";
  numberDiv2.innerHTML = "%80";
  nameDiv3.innerHTML = "JAVASCRIPT";
  numberDiv3.innerHTML = "%75";
  //APPEND0
  pie.appendChild(rightDiv);
  pie.appendChild(leftDiv);
  pie.appendChild(percentDiv);
  percentDiv.appendChild(numberDiv);
  percentDiv.appendChild(nameDiv);
  callAllPie.appendChild(pie);
  //APPEND1
  pie1.appendChild(rightDiv1);
  pie1.appendChild(leftDiv1);
  pie1.appendChild(percentDiv1);
  percentDiv1.appendChild(numberDiv1);
  percentDiv1.appendChild(nameDiv1);
  callAllPie.appendChild(pie1);
  //APPEND2
  pie2.appendChild(rightDiv2);
  pie2.appendChild(leftDiv2);
  pie2.appendChild(percentDiv2);
  percentDiv2.appendChild(numberDiv2);
  percentDiv2.appendChild(nameDiv2);
  callAllPie.appendChild(pie2);
  //APPEND3
  pie3.appendChild(rightDiv3);
  pie3.appendChild(leftDiv3);
  pie3.appendChild(percentDiv3);
  percentDiv3.appendChild(numberDiv3);
  percentDiv3.appendChild(nameDiv3);
  callAllPie.appendChild(pie3);
}
