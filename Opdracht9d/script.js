window.addEventListener("load", function() {
  var myName = document.getElementById('myName');
  var letters = ["F", "a", "b", "i", "o", " ", "V","/", "D", " ", "B", "r", "o", "e", "k"];
  var colors =   ['blue', 'red', 'beige', 'pink', 'purple', 'orange'];

  var active = 0;
  var muziek = new Audio();
  muziek.src = "Marvin Gaye - Lets get it on.mp3";
  muziek.play();

  function animatie() {
    myName.innerHTML ="";
        for ( i = 0; i < letters.length; i++) {
          var text = document.createElement("span");
          text.innerHTML = letters[i];
          text.style.color = 'rgb('+ rndGetal()+',' +rndGetal()+',' + rndGetal()+')';
          myName.appendChild(text);

        }
  };
  setInterval(animatie,100);
  setInterval(function(){
  document.querySelector('div').style.background = colors[active];
  active++;
  if (active == colors.length) active = 0;
}, 1000);

})



function rndGetal() {
return Math.floor((Math.random() * 255) + 1);
}
