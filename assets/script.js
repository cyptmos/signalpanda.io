const coins = ["chainlink", "ethereum", "solana", "ripple"];
const table = document.getElementById("table");

async function updatePrice(coinList) {
	coinList.forEach(async (coin) => {
		const res = await fetch(
			`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
		);
		const data = await res.json();

		let profitpercentage = Math.floor(Math.random() * 10);
		let profit =
			Math.round(
				data[Object.keys(data)[0]].usd * 10 * (profitpercentage / 1000) * 100
			) / 100;

		table.insertAdjacentHTML(
			"beforeend",
			`
    <div class="table-row">
    <div class="table-title">
        <img src="./assets/crypto/${coin}.png" alt="ethereum" />
        <div class="currentprice">
            <p>${coin}</p>
            <span id="price-eth">PRICE: $${Number(
							data[Object.keys(data)[0]].usd
						)}</span>
        </div>
    </div>
    <div class="bot-performance">
        <p>24h Performance:</p>
        <span>${profitpercentage}%</span>
    </div>
    <div class="profit-performance">
        <p>24h Profit:</p>
        <span>$${profit}</span>
    </div>
    <div class="uptime">
        <p>Bot Uptime</p>
        <span>${coin.length} days</span>
    </div>
    </div>
    `
		);
	});
}

updatePrice(coins);
