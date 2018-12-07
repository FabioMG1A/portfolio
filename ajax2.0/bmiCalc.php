<?php

	$gewicht = $_REQUEST["gewicht"];
	$lengte = $_REQUEST["lengte"];

	$lengte = $lengte / 100;

	$bmi = $gewicht / ($lengte * 2);

	$bmi = $gewicht / ($lengte * $lengte);
	$bmi = round($bmi,1);
	echo "uw gewicht is: $gewicht. <br> uw lengte is: $lengte. <br> uw BMI is: $bmi. <br>";
	switch ($bmi){
    case($bmi<18.5):
        echo "u bent ondergewicht!";
        break;
    case(($bmi>18.5)&&($bmi<=25)):
        echo "u bent normaal/gezond";
        break;
    case(($bmi>25)&&($bmi<=27)):
        echo "u bent licht overgewicht";
        break;
    case(($bmi>27)&&($bmi<=30)):
        echo "u bent matig overgewicht";
        break;
    case(($bmi>30)&&($bmi<=40)):
        echo "u bent overgewicht";
        break;
    case($bmi>40):
        echo "Ga naar de dokter!";
        break;
}
?>
