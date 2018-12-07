<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ajax 2</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div id="main">
			<h1>BMI CALCULATOR</h1>
			<fieldset>
			<h3>Gewicht (in kilogram):</h3>&nbsp;<input type="number" id="gewicht" placeholder="gewicht in KG" autofocus/>
			<h3>Lengte (in centimeter):</h3>&nbsp;<input type="number" id="lengte" placeholder="lengte in CM"/>
			<br>
			<br>
			<button onclick="bmiCalc()">Calculate</button>
			<p>BMI:&nbsp;<span id="bmiSpan"></span></p>
		</fieldset>
		</div>
		<script src="ajax.js"></script>
	</body>
</html>
