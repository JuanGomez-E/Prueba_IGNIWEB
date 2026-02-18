
/**
 Grafico
 */

let chart;

async function obtenerCriptos() {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    const data = await response.json();

    const tbody = document.querySelector("#cryptoTable tbody");
    tbody.innerHTML = "";

    data.forEach(coin => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${coin.name}</td>
            <td>$${coin.current_price.toLocaleString()}</td>
            <td class="${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}">
                ${coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>$${coin.market_cap.toLocaleString()}</td>
        `;

        row.onclick = () => cargarGrafico(coin.id, coin.name);
        tbody.appendChild(row);
    });
}

async function cargarGrafico(id, nombre) {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
    const data = await response.json();

    const precios = data.prices.map(p => p[1]);
    const fechas = data.prices.map(p => {
        const date = new Date(p[0]);
        return `${date.getDate()}/${date.getMonth()+1}`;
    });

    const ctx = document.getElementById('priceChart').getContext('2d');

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: `Precio 7 días - ${nombre}`,
                data: precios,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59,130,246,0.2)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: "white" }
                }
            },
            scales: {
                x: { ticks: { color: "white" } },
                y: { ticks: { color: "white" } }
            }
        }
    });
}

obtenerCriptos();
setInterval(obtenerCriptos, 60000);
