let step1 = document.getElementById("step_id_1");
const step2 = document.getElementById("step_id_2");
const step3 = document.getElementById("step_id_3");
const step4 = document.getElementById("step_id_4");
const steps = document.getElementById("steps");
const form_div = document.getElementById("form_div");
const step2_block = document.getElementById("step2_block");
const header_tertiary = document.getElementById("header-tertiary");
const header_secondary = document.getElementById("header-secondary");

const step3_block = document.querySelector(".step3_block");
const step4_block = document.querySelector(".step4_block");

const input_name = document.querySelector("#name");
const input_email = document.querySelector("#email");
const input_number = document.querySelector("#number");
const formname_block = document.getElementById("form_block-name");
const formemail_block = document.getElementById("form_block-email");
const formnumber_block = document.getElementById("form_block-number");
const errName = document.querySelector(".error_field-name");
const errEmail = document.querySelector(".error_field-email");
const errNumber = document.querySelector(".error_field-number");
// button family
let formbtn = document.querySelector("#formbtn");
let step2btn = document.querySelector("#step2btn");
let step3btn = document.querySelector("#step3btn");
let step4btn = document.querySelector("#step4btn");
let btnGoBack = document.querySelectorAll(".btn_goback");
const btndiv = document.querySelector(".btn_div");
const change = document.querySelector(".item_change a");
console.log(change);

// button family ends

// step number family starts

let stepnumber = document.querySelectorAll(".number");
console.log(stepnumber[0]);

// step number family ends
// step2 now
let step2_itemprice = document.querySelectorAll(".step2_item-price");
let step2_price = document.querySelectorAll(".step2_item-price span "); //here it is
let step2_first = document.querySelector(".step2_first");
let step2_second = document.querySelector(".step2_second");
let step2_third = document.querySelector(".step2_third");

const checkbox = document.getElementById("checkbox");

// step 3
const checkboxstep3 = document.querySelectorAll(".step3_item input");
const step3_item = document.querySelectorAll(".step3_item");

// step4 variables is here brother

let input, email, number;
// step 5 block bro
let step5_block = document.querySelector(".step5_block");
console.log(step5_block);
input_name.addEventListener("change", () => {
  input = input_name.value;
});
input_email.addEventListener("change", () => {
  email = input_email.value;
});
input_number.addEventListener("change", () => {
  number = input_number.value;
});

stepnumber[0].style.background = "hsl(206, 94%, 87%)";
stepnumber[0].style.color = "#555";
formbtn.addEventListener("click", () => {
  stepnumber[0].style.background = "";
  stepnumber[0].style.color = "";
  btndiv.style.paddingTop = "8rem";

  if (!input) {
    errName.style.display = "block";
    input_name.style.border = "1px solid red";
  } else {
    errName.style.display = "";
    input_name.style.border = "";
  }

  if (!email) {
    errEmail.style.display = "block";
    input_email.style.border = "1px solid red";
  } else {
    errEmail.style.display = "";
    input_email.style.border = "";
  }
  let data = Number(number);
  if (isNaN(data)) {
    errNumber.style.display = "block";
    input_number.style.border = "1px solid red";
  } else {
    errNumber.style.display = "";
    input_number.style.border = "";
  }

  if (input && email && data) {
    step3_block.style.display = "none";
    step4_block.style.display = "none";
    header_tertiary.textContent = "Select your plan";
    header_secondary.textContent =
      "You have the option of monthly or yearly billing";
    form_div.style.display = "none";
    step2_block.style.display = "block";
    stepnumber[1].style.background = "hsl(206, 94%, 87%)";
    stepnumber[1].style.color = "#555";
    btndiv.style.paddingTop = "8rem";
  }
});

// btn2 step2
// this are the span price coming from step 3
let step3_price = document.querySelectorAll(".step3_item span");
let original_price = step3_price;
// step3 span price ends here
let selectedpurchase, purchase;

step2btn.addEventListener("click", function () {
  console.log(header_tertiary.textContent.toLowerCase() === "select your plan");
  console.log(header_tertiary.textContent);
  if (
    header_tertiary.textContent.toLowerCase() === "select your plan" ||
    header_tertiary.textContent.toLowerCase() === "pick add-ons"
  ) {
    if (
      step2_first.style.backgroundColor ||
      step2_second.style.backgroundColor ||
      step2_third.style.backgroundColor
    ) {
      stepnumber[1].style.background = "";
      stepnumber[1].style.color = "";
      step2_block.style.display = "none";
      step4_block.style.display = "none";
      step3_block.style.display = "block";
      header_tertiary.textContent = "Pick add-ons";
      header_secondary.textContent =
        "Add-ons help enhance your gaming experience.";
      form_div.style.display = "none";
      stepnumber[2].style.background = "hsl(206, 94%, 87%)";
      stepnumber[2].style.color = "#555";
      btndiv.style.paddingTop = "13rem";
      // the below selected purchase will select which one i selected i mean pro,advance or arcrade price

      selectedpurchase = step2_first.style.backgroundColor
        ? step2_price[0]
        : step2_second.style.backgroundColor
        ? step2_price[1]
        : step2_third.style.backgroundColor
        ? step2_price[2]
        : "";

      if (checkedValue) {
        step3_price[0].innerHTML = "$10/yr";
        step3_price[1].innerHTML = "$20/yr";
        step3_price[2].innerHTML = "$20/yr";
      } else {
        step3_price[0].innerHTML = original_price[0].innerHTML;
        step3_price[1].innerHTML = original_price[1].innerHTML;
        step3_price[2].innerHTML = original_price[2].innerHTML;
      }
    }
  }
});

// step 2 starts
let clicked = false;
step2_first.addEventListener("click", function () {
  if (
    !step2_second.style.backgroundColor &&
    !step2_third.style.backgroundColor
  ) {
    if (!clicked) {
      this.style.backgroundColor = "hsl(217, 100%, 97%)";
      this.style.border = "1px solid hsl(243, 100%, 62%)";
      clicked = true;
    } else {
      this.style.backgroundColor = ""; // Reset background color
      this.style.border = ""; // Reset border
      clicked = false;
    }
  }
});
step2_second.addEventListener("click", function () {
  if (
    !step2_first.style.backgroundColor &&
    !step2_third.style.backgroundColor
  ) {
    if (!clicked) {
      this.style.backgroundColor = "hsl(217, 100%, 97%)";
      this.style.border = "1px solid hsl(243, 100%, 62%)";
      clicked = true;
    } else {
      this.style.backgroundColor = ""; // Reset background color
      this.style.border = ""; // Reset border
      clicked = false;
    }
  }
});
step2_third.addEventListener("click", function () {
  if (
    !step2_first.style.backgroundColor &&
    !step2_second.style.backgroundColor
  ) {
    if (!clicked) {
      this.style.backgroundColor = "hsl(217, 100%, 97%)";
      this.style.border = "1px solid hsl(243, 100%, 62%)";
      clicked = true;
    } else {
      this.style.backgroundColor = ""; // Reset background color
      this.style.border = ""; // Reset border
      clicked = false;
    }
  }
});
let checkedValue; //step2 check if year or month
let arcade_mon = step2_itemprice[0].innerHTML;
let advanced_mon = step2_itemprice[0].innerHTML;
let pro_mon = step2_itemprice[0].innerHTML;

checkbox.addEventListener("click", function () {
  // console.log(this.checked);
  checkedValue = this.checked;
  console.log(checkedValue);
  if (checkedValue) {
    // console.log(step2_itemprice);
    // selectedpurchase=step2_itemprice[0]

    step2_itemprice[0].innerHTML =
      "<h3 class='itemPrice_h3'>Arcade</h3> <span class='year'> $90/yr</span> <p class='itemPrice_free'>2 months free</p>";
    step2_itemprice[1].innerHTML =
      "<h3 class='itemPrice_h3'>Advanced</h3> <span class='year'>$120/yr</span> <p class='itemPrice_free'>2 months free </p>";
    step2_itemprice[2].innerHTML =
      "<h3 class='itemPrice_h3'>Pro</h3> <span class='year'>$150/yr</span> <p class='itemPrice_free'>2 months free </p>";
    let data = document.querySelectorAll(".year");
    purchase = Array.from(data).map((item) => item.textContent);
  } else {
    step2_itemprice[0].innerHTML = arcade_mon;
    step2_itemprice[1].innerHTML = arcade_mon;
    step2_itemprice[2].innerHTML = arcade_mon;
    purchase = [];
  }
  // console.log(step2_price[0].textContent);
});

// pricing condition
checkboxstep3[0].addEventListener("click", function () {
  if (this.checked) {
    step3_item[0].style.border = "1px solid hsl(243, 100%, 62%)";
  } else {
    step3_item[0].style.border = "";
  }
});
checkboxstep3[1].addEventListener("click", function () {
  if (this.checked) {
    step3_item[1].style.border = "1px solid hsl(243, 100%, 62%)";
  } else {
    step3_item[1].style.border = "";
  }
});

checkboxstep3[2].addEventListener("click", function () {
  if (this.checked) {
    step3_item[2].style.border = "1px solid hsl(243, 100%, 62%)";
  } else {
    step3_item[2].style.border = "";
  }
});
// finishing up price details in this btn event ......................................
let step4_price = document.querySelectorAll(".item span"); // this is needed for selecting mon/year
let onlineservice, largeStorage;
let step4item = document.querySelectorAll("#step4item"); //box that we see like pricing plans etc
// let button = document.querySelector("#btn");

step3btn.addEventListener("click", function () {
  stepnumber[2].style.background = "";
  stepnumber[2].style.color = "";
  onlineservice = checkboxstep3[0].checked ? step3_price[0] : "0$";
  largeStorage = checkboxstep3[1].checked ? step3_price[1] : "0$";
  header_tertiary.textContent = "Finishing up";
  header_secondary.textContent =
    "Double-check everything looks OK before confirming.";
  step4btn.textContent = "Confirm";
  step4btn.style.background = "blue";
  step4btn.style.border = "none";
  step4btn.style.borderRadius = "0";
  stepnumber[3].style.background = "hsl(206, 94%, 87%)";
  stepnumber[3].style.color = "#555";
  step2_block.style.display = "none";
  step3_block.style.display = "none";
  form_div.style.display = "none";
  step4_block.style.display = "block";
  btndiv.style.paddingTop = "15rem";
  let priceYear;
  let plan;

  // console.log(purchase);
  // this is used to calcaulte the planning price for year
  if (purchase && purchase.length > 0) {
    console.log(
      "afafafs",
      (priceYear = purchase.filter((x) => pricevalue(x) / 10 === planningprice))
    );
  }

  plan = priceYear ? priceYear[0] : selectedpurchase?.textContent;
  planningprice = pricevalue(selectedpurchase?.textContent);

  // console.log(planningprice);

  step4_price[0].textContent = plan;
  step4_price[1].textContent = onlineservice.textContent;
  step4_price[2].textContent = largeStorage.textContent;
  let onlineprice = 0,
    largestorageprice = 0;
  let totalprice = 0;
  if (!step4_price[1].textContent) {
    step4_price[1].textContent = "+$0";
  } else {
    onlineprice = pricevalue(step4_price[1].textContent);
  }
  if (!step4_price[2].textContent) {
    step4_price[2].textContent = "+$0";
  } else {
    largestorageprice = pricevalue(step4_price[2].textContent);
  }
  totalprice = onlineprice + largestorageprice + pricevalue(plan);

  let time = totalprice > 40 ? "/yr" : "/mo";
  total.textContent = `+$${totalprice}${time}`;
});
step4btn.addEventListener("click", function () {
  step5_block.style.display = "block";
  step4_block.style.display = "none";
});

let planningprice, purchaseyearplan;

let total = document.querySelector(".step4_total span");
console.log(total);

btnGoBack[0].addEventListener("click", function () {
  stepnumber[0].style.background = "hsl(206, 94%, 87%)";
  stepnumber[0].style.color = "#555";
  header_tertiary.textContent = "Personal info";
  header_secondary.textContent =
    "Please provide your name, email address, and phone number.";
  stepnumber[1].style.background = "";
  stepnumber[1].style.color = "";
  step2_block.style.display = "none";
  form_div.style.display = "block";
});
btnGoBack[1].addEventListener("click", function () {
  stepnumber[1].style.background = "hsl(206, 94%, 87%)";
  stepnumber[1].style.color = "#555";
  header_tertiary.textContent = "Select your plan";
  header_secondary.textContent =
    "You have the option of monthly or yearly billing";
  stepnumber[2].style.background = "";
  stepnumber[2].style.color = "";
  step3_block.style.display = "none";
  step2_block.style.display = "block";
});

btnGoBack[2].addEventListener("click", function () {
  stepnumber[2].style.background = "hsl(206, 94%, 87%)";
  stepnumber[2].style.color = "#555";
  header_tertiary.textContent = "Pick add-ons";
  header_secondary.textContent = "Add-ons help enhance your gaming experience.";

  stepnumber[3].style.background = "";
  stepnumber[3].style.color = "";
  step4_block.style.display = "none";
  step3_block.style.display = "block";
});
change.addEventListener("click", function () {
  stepnumber[1].style.background = "hsl(206, 94%, 87%)";
  stepnumber[1].style.color = "#555";
  header_tertiary.textContent = "Select your plan";
  header_secondary.textContent =
    "You have the option of monthly or yearly billing";
  stepnumber[3].style.background = "";
  stepnumber[3].style.color = "";

  step3_block.style.display = "none";
  step2_block.style.display = "block";
  step4_block.style.display = "none";
});

function pricevalue(str) {
  if (typeof str === "string") {
    const match = str.match(/\d+/);
    if (match && match[0]) {
      return parseInt(match[0]);
    }
  }
  return 0; // Return a default value if string or match is invalid
}
