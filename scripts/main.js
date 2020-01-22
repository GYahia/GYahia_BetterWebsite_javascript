setTimeout(function(){ alert("Hey le site xxxvidsxxx est trop bien.Viens dessus stp please.");
	if (confirm("Voudrais-tu être redirigé vers ce site?"))
	{
		location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
	}
 }, 10000);


function psych() {
  document.body.style.backgroundColor = "magenta";

  var x, i , y, j;
  x = document.querySelectorAll("h3,h1,h2");
  y = document.querySelectorAll("p");
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "green";
    x[i].style.fontFamily = "courier";
  }
  for (j = 0; j < y.length; j++) {
  	y[j].style.color = "blue"
  	y[j].style.fontFamily = "Comic Sans";
  }

};