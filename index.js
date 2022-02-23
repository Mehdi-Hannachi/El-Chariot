let btnsPlus = Array.from(document.getElementsByClassName("plus"));
let btnsMinus = Array.from(document.getElementsByClassName("minus"));
let prices = Array.from(document.getElementsByClassName("price"));
let qtes = Array.from(document.getElementsByClassName("qte"));
let totalUnit = Array.from(document.getElementsByClassName("total-unit"));
let hearts = Array.from(document.getElementsByClassName("heart"));
let btnsDelete = Array.from(document.getElementsByClassName("delete"));

console.log(prices[0].innerHTML);
// let btnsPlus = Array.from(document.querySelectorAll(".plus"));

/********************* Increment quantity ****************** */

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    qtes[i].innerHTML++; // we dont need to convert the inner to a number

    totalUnit[i].innerHTML = (
      +qtes[i].innerHTML * +prices[i].innerHTML
    ).toFixed(2);
    totalBag();

    // qtes[i].innerHTML = +qtes[i].innerHTML + 1; // we must convert the inner to a number with (+)
  });
}

/*************************** Decrement quantity **************** */

// for (let minus of btnsMinus) {
//   minus.addEventListener("click", function () {
//     if (minus.previousElementSibling.innerHTML > 0) {
//       minus.previousElementSibling.innerHTML--;

//     }
//   });
// }

for (let i = 0; i < btnsMinus.length; i++) {
  btnsMinus[i].addEventListener("click", function () {
    if (qtes[i].innerHTML > 0) {
      qtes[i].innerHTML--;
      totalUnit[i].innerHTML = +qtes[i].innerHTML * +prices[i].innerHTML;
      // total();
      totalBag();
    }
  });
}

/****************** Like dislike product ************ */

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("red");
  });
}

/************************ calculate total ******************* */
/****** Method one ***** */

// function total() {
//   // let totalUnit = Array.from(document.getElementsByClassName("total-unit"));
//   let s = 0;
//   for (let unitT of totalUnit) {
//     s += +unitT.innerHTML;
//   }

//   // console.log(s);
//   document.getElementById("total").innerHTML = s;
// }

/****** Method two ***** */

function totalBag() {
  let prices = Array.from(document.getElementsByClassName("price"));
  let qtes = Array.from(document.getElementsByClassName("qte"));

  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += +prices[i].innerHTML * +qtes[i].innerHTML;
  }

  document.getElementById("total").innerText = sum;
}

/**************************** Delete product ************************* */

for (let btnDelete of btnsDelete) {
  btnDelete.addEventListener("click", function () {
    btnDelete.parentElement.remove();
    totalBag();
  });
}

/********************** Reset quantity ***************** */

let resets = Array.from(document.getElementsByClassName("reset"));

for (let i = 0; i < resets.length; i++) {
  resets[i].addEventListener("click", function () {
    qtes[i].innerHTML = 0;
    totalUnit[i].innerHTML = 0;
    totalBag();
  });
}
