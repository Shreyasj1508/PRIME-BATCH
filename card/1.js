let arr = [  // Use `let` instead of `const` to allow modification
    { name: "vaibhav", city: "bijnor", email: "xyz@gmail.com" },
    { name: "aryan", city: "odissa", email: "aryan@gmail.com" },
    { name: "adi", city: "lucknow", email: "adi@gmail.com" },
    { name: "shreyas", city: "lucknow", email: "shreyas@gmail.com" },
];

const root = document.getElementById("root");
const cityFilter = document.getElementById("cityFilter");

const showcard = () => {
    root.innerHTML = ""; // Clear previous cards

    const selectedCity = cityFilter.value; // Get the selected city

    arr.forEach((ele, index) => {  // Add `index` to track position in array
        if (selectedCity === "all" || ele.city === selectedCity) {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h4>${ele.name}</h4>
                <p>${ele.city}</p>
                <button onclick="deleteCard(${index})">Delete</button>
            `;

            root.appendChild(card);
        }
    });
};

const deleteCard = (index) => {
    arr.splice(index, 1);  // Remove the selected person from the array
    showcard();  
};


showcard();
