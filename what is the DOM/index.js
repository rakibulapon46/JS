// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       Javascript can access the DON to dynamically
//       change the content, structure, and style of a web page.

// console.log(document);
// document.title = "Website";
// document.body.style.backgroundColor = 'hsl(0, 0%, 15%)';
// document.body.style.color = "white";
// console.dir(document);

const username = "Rakibul Apon";

const welcomeMsg = document.getElementById("myH1");
welcomeMsg.textContent += username === "" ? `guest` : username