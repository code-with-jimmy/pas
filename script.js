let passLength_value = document.getElementById("passLength-value");
let range = document.getElementById("range");
let generator = document.getElementById("Generator");
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let checkbox4 = document.getElementById("checkbox4");
let task = document.getElementById("task");
let copy = document.getElementById("copy");


// step 1

range.addEventListener("input", () => {
  passLength_value.textContent = range.value;
})


// step 2

let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let abc = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let symbol = "!£$%^&*()_-+={}[]#@~|\<>/?:;";

generator.addEventListener("click", () => {
  let all = ""; 
  let empathy = "";
  if(checkbox1.checked) all += ABC;
  if(checkbox2.checked) all += abc;
  if(checkbox3.checked) all += num;
  if(checkbox4.checked) all += symbol;
  if(all === ""){
    alert("Please select the 1 box and again generator...");
    return;
  }
  let rangeValue = range.value;
  for(let i = 0; i < rangeValue; i++){
    let random = Math.floor(Math.random() * all.length)
    empathy += all[random];
    task.value = empathy;
  }
  save()
  
})



// step 3


copy.addEventListener("click", () => {
  if(task.value === ""){
    alert("Please before generator password and again copy...");
    return
  }
  navigator.clipboard.writeText(task.value);
  copy.textContent = "copied!";
  setTimeout(() => {
    copy.textContent = "copy";
  }, 1500)
})



// step 4


task.addEventListener("click", () => {
  if(task.value === ""){
    return;
  }
  let check = confirm("if you want to delete password?");
  if(check){
  task.value = "";
  localStorage.removeItem("saved");
  return;
  }
})


// localStorage


let save = () => {
  localStorage.setItem("saved", JSON.stringify(task.value));
}

let data = JSON.parse(localStorage.getItem("saved"));

if(data !== null){
  task.value = data;
}



