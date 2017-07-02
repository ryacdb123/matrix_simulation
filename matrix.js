var no = 600 / 10;
var symbols = new Array(no);
function setup(){
	createCanvas(600, 600);	
	
	for(var i = 0; i < symbols.length; i++){
		symbols[i] = new Array(no);
	}

	for(var i = 0; i < no; i++){
		for(var j = 0; j < no; j++){
			symbols[i][j] = new Symbol(i * 10, j * 10);
		}
	}		
}


function draw(){
	background(0);	

	for(var i = 0; i < no; i++){
		for(var j = 0; j < no; j++){
			symbols[i][j].show();
			symbols[i][j].move();
		}
	}	

}

function Symbol(x, y){
	this.x = x;
	this.y = y;
	this.revealed = false;
	this.value = false;
	this.speed = 5;

	if(random(1, 100) < 50){
		this.value = true;
	} 
	if(random(1, 10) < 4){
		this.revealed = true;
	}

	this.show = function(){
		if(this.revealed){
			if(this.value){
				fill(0, 255, 50);
				text("1", this.x, this.y);
			}
			else{
				//fill(255, 50, 0);
				text("0", this.x, this.y);
			}
			
		}
	}

	this.move = function(){
		if(this.y >= height){
			this.y = 0;
		} else {
			this.y += this.speed;
		}
	}


}