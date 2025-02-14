const url = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9d241cbaabmsh9ebd7baa214c8f9p1a5232jsn3971c9e80785',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
};

let bestCoins = [];
let newCoins = [];

async function getData() {
    try{
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        // console.log(result);

        const { bestCoins: fetchedBestCoins, newestCoins: fetchedNewCoins } = result.data;

        bestCoins = fetchedBestCoins;
        newCoins = fetchedNewCoins;
        
        showData();
    } catch (error) {
        console.error("Error fetching cryptocurrency stats:", error);
    }
}

// let bestCoinsContainer, newCoinsContainer, logoutButton , inputField, userNameField;
function showData() {
    if (sessionStorage.getItem("islogin") !== "true") {
        location.href = "./../login/login.html";
    }

    userNameField = document.getElementById("username");
    bestCoinsContainer = document.getElementsByClassName("best-coins")[0];
    newCoinsContainer = document.getElementsByClassName("new-coins")[0];
    logoutButton = document.getElementsByTagName("button")[0];
    inputField = document.getElementsByTagName("input")[0];

    const username = sessionStorage.getItem("username");
    userNameField.textContent = `Welcome, ${username}`;

    displayCoins(bestCoins, bestCoinsContainer);
    displayCoins(newCoins, newCoinsContainer);

    logoutButton.addEventListener("click", Logout);
    inputField.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            search(inputField.value.trim());
        }
    });
}

function displayCoins(coins, container) {
    container.innerHTML = "";
    coins.forEach((coin) => appendCoinCard(coin, container));
}
function appendCoinCard(coin, container) {
    const card = document.createElement("div");
    card.className = "coin-card"
    card.innerHTML = `
        <a href="${coin.coinrankingUrl}" target="_blank">
        <img src="${coin.iconUrl}" alt="${coin.name}">
        </a>
        <div>
            <p class="coin-info">UUID: ${coin.uuid}</p>
            <p class="coin-info">Name: ${coin.name}</p>
            <p class="coin-info">Symbol: ${coin.symbol}</p>
        </div>
    `;

    container.append(card);
}
function Logout() {
    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Logged out",
                text: "You have successfully logged out.",
                icon: "success",
                timer: 2000
            }).then(() => {
                sessionStorage.setItem("islogin", "false");
                location.href = "./../login/login.html";
            });
        }
    });
}
function search(query) {
    inputField.value = ""; 
    const searchResults = [...bestCoins, ...newCoins].filter(
        (coin) =>
            coin.uuid === query ||
            coin.name.toLowerCase() === query.toLowerCase() ||
            coin.symbol.toLowerCase() === query.toLowerCase()
    );

    if (searchResults.length > 0) {
        const coin = searchResults[0];
        const coinData = {
            image: coin.iconUrl,
            id: coin.uuid,
            name: coin.name,
            symbol: coin.symbol,
            link: coin.coinrankingUrl
        };
        sessionStorage.setItem("items", JSON.stringify(coinData));
        location.href = "item.html";
    } else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Your search was not found",
            showConfirmButton: false,
            timer: 1000
        });
    }
}

getData();

