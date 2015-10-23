var snakeArray;
var cellWidth = 10;
var dir;
var food;
var score;

//var untuk menu
var menu;
var reMenu;

//var untuk canvas
var canvas;
var ctx;

var mainBgm;
var overBgm;
var foodBgm;

//var untuk data dan status pada game
var begin;
var loading;
var scoreText;
var files;
var inGame;

var width;
var height;

var controller;
var lineLeft;

//fungsi yang pertama kali digunakan saat halaman game dipanggil
function toGame(){
	

	mainBgm = document.getElementById("mainBgm");
	overBgm = document.getElementById("overBgm");
	foodBgm = document.getElementById("foodBgm");

	begin = document.getElementById("start");
	loading = document.getElementById("loading");

	scoreText = document.getElementById("score");

	files = [mainBgm, overBgm, foodBgm];
	var counter = 0;
/*
	for(var i = 0; i < files.length; i++) {
		var file = files[i];
		file.addEventListener('loadeddata', function() {
			counter++;
			
			var percent = Math.floor((counter/files.length)*100);
			loading.innerHTML = "Loading " + percent + "%";
			
			if(percent == 100) showButton();
		});
	}
*/
	showButton();

	//Membuat canvas		
	canvas = document.getElementById("canvas");

	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx = canvas.getContext("2d");

	

	width = canvas.width;
	height = canvas.height;

	lineLeft = document.getElementsByClassName("line-separator-left")[0];

	menuDisplay();
	
	if(isTouchDevice()){
		GameController.init({
		    left: {
		      type: 'dpad',
		      position: {left: '10%', bottom: '20%'},
		      dpad: {
		        up: { width: '5%', height: '10%',
		        touchStart: function(){
		            dir="up";
		        }},
		        down: { width: '5%', height: '10%',
		        touchStart: function(){
		            dir="down";
		        }},
		        left: { width: '10%', height: '5%',
		        touchStart: function(){
		            dir="left";
		        }},
		        right: { width: '10%', height: '5%',
		        touchStart: function(){
		            dir="right";
		        }}
		      }
		    },
		    right: false
	    });
	}

  		
}


//Menampilkan tombol start pada game
function showButton() {
	begin.style.top = "30%";
	loading.style.visibility = "hidden";
}

//Mendefinisikan beberapa var pada js sesuai dengan div pada html
function menuDisplay(){
	menu = document.getElementById("menu");
	menu.style.position = "absolute";
	reMenu = document.getElementById("reMenu");

	scoreText = document.getElementById("score");
	reMenu.style.zIndex = "-1";

	
}

//Memulai game
function start(){
	/*
	mainBgm.currentTime = 0;
	mainBgm.play();
	*/

	menu.style.zIndex = "-1";
	reMenu.style.zIndex = "-1";
	createSnake();
	createFood();
	inGame = true;
	dir="right";
	score = 0;
	lineLeft.style.zIndex = 1;
	scoreText.innerHTML = "Score " + score;
	if(typeof gameLoop != "undefined")clearInterval(gameLoop);
	gameLoop = setInterval(paintSnake, 60);
}

//Membuat snake
function createSnake(){
	var snakeLength = 6;
	snakeArray = [];
	for (var i=snakeLength-1; i>=0; i--){
		snakeArray.push({x:20+i, y:15});
	}
}

function paintSnake(){

	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width, height);

	var posX = snakeArray[0].x;
	var posY = snakeArray[0].y;

	if (dir == "right"){
		posX++;
	}
	else if (dir == "left") {
		posX--;
	}
	else if (dir == "up"){
		posY--;
	}
	else if (dir == "down"){
		posY++;
	}

	//Check if there is any collision, if any the game is over
	if(posX <= 15 || posX >= width/cellWidth || posY == -1 || posY >= height/cellWidth || collision(posX, posY, snakeArray)){
		//window.alert(posX);
		gameOver();
		return;
	}

	//When the snake eats a food
	if(food.x == posX && food.y == posY){
		var tail = {x:posX, y:posY};
		createFood();
		score+=10;
		scoreText.innerHTML = "Score " + score;
//		foodBgm.play();
	}

	//When the snake is moving
	else{
		var tail = snakeArray.pop();
		tail.x = posX;
		tail.y = posY
			
	}

	snakeArray.unshift(tail);
	
	for(var i=0; i<snakeArray.length; i++){
		var c = snakeArray[i];
		var color = "#73c5ea";
		
		ctx.fillStyle=color;
		ctx.fillRect(c.x*cellWidth, c.y*cellWidth, cellWidth, cellWidth);	
	}

	ctx.fillStyle="#73c5ea";
	ctx.fillRect(food.x*cellWidth, food.y*cellWidth, cellWidth, cellWidth);
}

//Membuat lokasi makanan
function createFood(){
	var foodX = Math.round(Math.random()*(width-cellWidth)/cellWidth);
	if(foodX < 16){
		foodX = 16;
	}
	food = {
		x:foodX,
		y:Math.round(Math.random()*(height-cellWidth)/cellWidth)
	};
}

//Mengecek apakah snake memakan dirinya sendiri
function collision(x, y, array){
	for (var i = 0; i<array.length; i++){
		if(array[i].x == x && array[i].y == y){
			return true;	
		}
	}
	return false;
}

//Kondisi saat game over
function gameOver(){
	clearInterval(gameLoop);

	
	lineLeft.style.zIndex = "-1";

//	mainBgm.pause();
//	overBgm.play();
	inGame = false;
	var tweet = document.getElementById("tweet");
	tweet.href='http://twitter.com/share?url=kodekeras.com scored ' +score+ ' points in the KodeKeras The Game : Anaconda';

	var fb = document.getElementById("fb");
	fb.href='https://www.facebook.com/dialog/feed?app_id=532252693598787&display=popup&caption=I%20Have%20Score '+score+' &link=http://kodekeras.com&redirect_uri=http://kodekeras.com &description=KodeKeras The Game : Anaconda';

	var line = document.getElementById("line");
	line.href='line://msg/text/I Have scored ' + score + ' in KodeKeras The Game : Anaconda http://kodekeras.com/';

	

	var goText = document.getElementById("info2");

	goText.innerHTML = "Your Final Score Is " + score;

	$("#anacondaForm").show();
	$("#ack").empty();

	document.getElementById("scoreData").value = score;

	document.ontouchstart = function(e){ return true; }

	reMenu.style.zIndex = 1;

}

//Membatasi fungsi keyboard pada saat permainan berlangsung
document.onkeydown = function(e) {
	var key = e.keyCode || e.which;
				
	if(key == "37" && dir != "right") dir = "left";
	else if(key == "38" && dir != "down") dir = "up";
	else if(key == "39" && dir != "left") dir = "right";
	else if(key == "40" && dir != "up") dir = "down";
	if (inGame == true){
		if(key) e.preventDefault();
	}
}

function isTouchDevice() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}