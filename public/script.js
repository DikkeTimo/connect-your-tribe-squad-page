const searchbar = document.querySelector(".searchbar");

searchbar.addEventListener("input", searching);

function searching() {
  let input = this.value;
  input = input.toLowerCase();

  let x = document.getElementsByClassName("members");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "flex";
    }
    console.log(x[i].hidden);
  }
  console.log(this.value);
}
