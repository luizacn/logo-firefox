const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox1.jpeg") {
        myImage.setAttribute("src", "images/firefox2.jpeg");
    } else {
        myImage.setAttribute("src", "images/firefox1.jpeg")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
}