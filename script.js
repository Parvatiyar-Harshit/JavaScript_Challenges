//challenge 1 my age in days
function ageindays(){
	var years = prompt("Enter Age in Years");
	var days = 365*years;
	var h1 = document.createElement('H1');
	var t = document.createTextNode("Your Age in Days is "+days);
	h1.appendChild(t);
	h1.setAttribute('id','res1');
	document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
	document.getElementById('res1').remove();
}
