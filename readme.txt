Which web event did you hook into to update the display name? 
 -buttonElement.addEventListener("click", () => {
    const name = inputElement.value;
    nameElement.innerText = name;
Where in your HTML did you link to your JavaScript file? Are there better places? What's the best place? 
    -Right after the the body. I believe this is the best place.
Why is it best practice to store your CSS/JS in external files rather than in your HTML file?
    -When the coding becomes longer and more complex, it's much easier to manage
    and keep organized in a separate file.