
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Crypto Dashboard</title>

{{-- Charts --}}
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
{{-- Style --}}
<link rel="stylesheet" href="css/app.css">

<style>

</style>
</head>

<body>

    
<h1>📊 Crypto Dashboard</h1>

<table id="cryptoTable">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Precio (USD)</th>
            <th>24h %</th>
            <th>Market Cap</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

{{-- Charts --}}
<div class="chart-container">
    <canvas id="priceChart"></canvas>
</div>

{{-- Scripts --}}
<script src="js/index.js"></script>

</body>
</html>
