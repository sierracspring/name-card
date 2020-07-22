const nameElement = document.getElementById("name");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");

buttonElement.addEventListener("click", () => {
  const name = inputElement.value;
  nameElement.innerText = name;
});
