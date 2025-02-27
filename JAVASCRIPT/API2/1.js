const getData = (text) => {
    fetch(`https://dummyjson.com/recipes/search?q=${text}`)
        .then((res) => res.json())
        .then((data) => {
            showCards(data.recipes);
        })
        .catch((err) => console.error("Error fetching data:", err)); // Handling errors
};

const showCards = (dataArr) => {
    const root = document.getElementById("cards-container");
    root.innerHTML = ""; // Clear previous results

    dataArr.forEach((ele) => {
        const newDiv = document.createElement("div");
        newDiv.className = "card";
        newDiv.innerHTML = `
            <h4>${ele.name}</h4>
            <img src="${ele.image}" height="250px" >
            <p>${ele.cuisine}</p>
        `;
        root.appendChild(newDiv);
    });
};

const handleSearch = (e) => {
    getData(e.target.value);
};
