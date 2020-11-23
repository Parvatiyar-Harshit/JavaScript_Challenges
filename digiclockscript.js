function whattime(){
	var d  = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var r = h+":"+m+":"+s;
	return r;
}


function starttheclock(){
	var time = document.createElement('H2');
	time.setAttribute('text-color','red');
	var t = document.createTextNode('['+whattime()+']');
	time.appendChild(t);
	document.getElementById('digiclock').appendChild(time);
	setTimeout(function(){document.getElementById('digiclock').removeChild(time);},999);
}
setInterval(function(){starttheclock(); }, 1000);
