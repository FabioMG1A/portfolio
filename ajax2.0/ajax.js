function bmiCalc() {
  var gewicht = document.getElementById("gewicht").value;
  var lengte = document.getElementById("lengte").value;

  var xhttp;

  if ((gewicht.length == 0) || (lengte.length == 0)) {
    document.getElementById("bmiSpan").innerHTML = "";
    return;
  }

  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("bmiSpan").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "bmiCalc.php?gewicht=" + gewicht + "&lengte=" + lengte, true);
  xhttp.send();
}
