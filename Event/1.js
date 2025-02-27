const data = [
    { name: "shreyas", city: "varanasi", email: "semail@gmail.com" },
    { name: "shreyas1", city: "varanasi1", email: "semail1@gmail.com" },
    { name: "shreyas2", city: "varanasi2", email: "semail2@gmail.com" },
    { name: "shreyas3", city: "varanasi3", email: "semail3@gmail.com" },
];

const root = document.getElementById("parent"); // Fixed selector

data.forEach((ele) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
        <h4>${ele.name}</h4>
        <h6>${ele.email}</h6>
        <p class="text">${ele.city}</p>
    `;

    // Change background color on card click
    newCard.addEventListener("click", () => {
        newCard.style.backgroundColor = getRandomColor();
    });

    // Add event listener to text element
    const textElement = newCard.querySelector(".text");
    textElement.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents event bubbling
        textElement.style.backgroundColor = getRandomColor();
    });

    root.appendChild(newCard);
});

const handlechange = () => {
    console.log("Button clicked");
    document.body.style.backgroundColor = getRandomColor();
};

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
};
