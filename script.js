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
function generateCat(){
	var image = document.createElement('img');
	var div = document.getElementById('flex-cat-gen');
	image.src = 'https://media.tenor.com/images/1a5a73dbaaaf7ec3f0da44fb75e58c76/tenor.gif'
	div.appendChild(image);
}
function rpsGame(yourChoice){
	var humanChoice , botChoice;
	choices = ['rock','paper','scissor'];
	outcomes = ['This is a Draw','You Win','You Lose'];
	humanChoice = choices[yourChoice.id];
	botChoice = choices[Math.floor(Math.random() * 3)];
	results = outcomes[decideWinner(humanChoice,botChoice)];
	/*console.log(humanChoice);
	console.log(botChoice);
	console.log(results);*/
	rpsFrontEnd(humanChoice,results,botChoice);
}
function decideWinner(a ,  b){
	if(a==b){return 0;}
	else if( (a=='rock' && b=='scissor') || (a=='paper' && b=='rock') || (a=='scissor' && b=='paper') ){
		return 1;
	}
	else{
		return 2;
	}
}
function rpsFrontEnd(h,r,b){
	document.getElementById(0).remove();
	document.getElementById(1).remove();
	document.getElementById(2).remove();
	var h_element = document.createElement('img');
	h_element.setAttribute('height',150);
	h_element.setAttribute('width',150);
	var h_div = document.getElementById('l');
	h_element.src = ('static/art/'+h+".jpg");
	h_div.appendChild(h_element);
	var b_element = document.createElement('img');
	b_element.setAttribute('height',150);
	b_element.setAttribute('width',150);
	var b_div = document.getElementById('r');
	b_element.src = ('static/art/'+b+'.jpg');
	b_div.appendChild(b_element);
	var r_element = document.createElement('H2');
	var r_div = document.getElementById('c');
	var r_text = document.createTextNode(r);
	r_element.appendChild(r_text);
	r_div.appendChild(r_element);
}
//challenge 4
var all_buttons = document.getElementsByTagName('button');
var copyAllbuttons = ['btn-primary', 'btn-danger' , 'btn-success' , 'btn-primary' , 'btn-warning' , 'btn-danger' , 'btn-success'];
function buttonColorChange(buttonThingy){
	if(buttonThingy.value == 'red'){
		buttonsRed();
	}
	else if(buttonThingy.value == 'green'){
		buttonsGreen();
	}
	else if(buttonThingy.value == 'reset'){
		buttonsReset();
	}
	else if(buttonThingy.value == 'random'){
		buttonsRandom();
	}
}
function buttonsRed(){
	for(let i = 0 ; i<all_buttons.length ; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-danger');
	}
}
function buttonsGreen(){
	for(let i = 0 ; i<all_buttons.length ; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-success');
	}
}
function buttonsReset(){
	//var cur_buttons = document.getElementsByTagName('button');
	for(let i = 0 ; i<all_buttons.length ; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(copyAllbuttons[i]);
	}
}
function buttonsRandom(){
	for(let i = 0 ; i<all_buttons.length ; i++){
		var r = Math.floor(Math.random() * all_buttons.length);
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(copyAllbuttons[r]);
	}
}
