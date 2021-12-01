/**
It's time to practice working with the input event! In the index.html file, you'll find an <h1> and
an <input type="text"> element. Please do not change anything in index.html! In app.js,
write code that meets these requirements:
         • The h1 should start with the text "Enter Your Username" (I've done that for you, already in
          the markup)
          Whenever an input event is fired on the <input> element, update the <h1> so that it
          displays "Welcome, plus the current value from the text input. Take a look at the gif
          below to see how it should work.
          If the <input> goes back to being empty, update the <h1> so that it once again says
          "Enter Your Username"
 */

const inputUsername = document.querySelector("#username");
const h1 = document.querySelector("h1");

inputUsername.addEventListener("input", () => {
  h1.innerText = `Welcome, ${inputUsername.value}`;

  if (!inputUsername.value) h1.innerText = "Enter Your Username";
});
