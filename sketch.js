const CLOCK_SIZE = 120;

const MARGIN = 	CLOCK_SIZE / 2
// const MARGIN
let COLUMNS = 0;
let ROWS = 0;
const PADDING = CLOCK_SIZE * 0.2
const GRIDBOX = CLOCK_SIZE + PADDING
let STARTX = 0;
let STARTY = 0;
// const START = (CLOCK_SIZE / 2) + MARGIN

let soundArray = []
let grid = []

let counting = 0;

let ALL_CLOCKS = []

let hoverX = 0;
let hoverY = 0;
let hover = false;

// serial comms
// let serial;          // variable to hold an instance of the serialport library
// let portName = "/dev/tty.usbmodem142101"; // fill in your serial port name here
let showup = 0;
let firstTime = false

let pageStatus = 1;
let BPM;

let name;
let date;
let month;
let year;
let submit;


function preload() {
  tiktok2 = loadSound("sound/tiktok2.wav");
  tiktok3 = loadSound("sound/tiktok3.wav");
  tiktok4 = loadSound("sound/tiktok4.wav");
  tiktok5 = loadSound("sound/tiktok5.mp3");
  clockImg = loadImage('assets/clock.png');
  myFont = loadFont('assets/RobotoCondensed-Light.ttf')

}


function setup(){
  let cvs = createCanvas(windowWidth, windowHeight);
   cvs.position(0,0);

   COLUMNS = floor((windowWidth-MARGIN*2)/GRIDBOX);
   ROWS = floor((windowHeight-MARGIN*2)/GRIDBOX);
   STARTX = (windowWidth - GRIDBOX*COLUMNS)/2;
   STARTY = (windowHeight - GRIDBOX*ROWS)/2;

  frameRate(30);
  textSize(12)
  // const totalX = START + GRIDBOX * COLUMNS
  // const totalY = START + GRIDBOX * ROWS


  name = select('#name');
  date = select('#D');
  month = select('#M');
  year = select('#Y');
  submit = select('#submit');

  // createCanvas(totalX,totalY)

  // serial = new p5.SerialPort(); // make a new instance of  serialport librar  
  // serial.on('list', printList); // callback function for serialport list event
  // serial.on('data', serialEvent); // callback for new data coming in
  // serial.list(); // list the serial ports
  // serial.open("/dev/tty.usbmodem142101"); // open a port

  soundArray.push(tiktok2,tiktok3,tiktok4,tiktok5);

  for (let x = 0; x < COLUMNS; x++){
    grid[x] = [];
    for (let y = 0; y < ROWS; y++){
      grid[x][y] = 0;
    }
  }



}

function draw(){

	if(pageStatus == 1){
		background(255);

		for (let x = 0; x < COLUMNS; x++){
		    for (let y = 0; y < ROWS; y++){
		      if(grid[x][y] == 0){
		        strokeWeight(5)
		        stroke('#393e46')
		        point(STARTX + (x * GRIDBOX),STARTY + (y * GRIDBOX))
		      }
		    }
	  	}

	  	ALL_CLOCKS.forEach(clock =>{
	  		clock.update()
	  		clock.render()
	  		clock.colorDetect()
	  		clock.showName()
	  	})

	  	// mouse hover effect
	  	if(hover){
		  	for(let i = 0; i < ALL_CLOCKS.length; i++){
		  		if(ALL_CLOCKS[i].hover == true){
		  			ALL_CLOCKS[i].color = '#393e46';
		  			ALL_CLOCKS[i].showName();
		  			ALL_CLOCKS[i].tiktok()
		  		}else{
		  			ALL_CLOCKS[i].color = '#f6f6f6';
		  		}
			  		
		  	}
		  	hover = false;
	  	}else{
	  		var soundPlayTotal = 0;
	  		for(let i = 0; i < ALL_CLOCKS.length; i++){
	  			ALL_CLOCKS[i].color = '#393e46';
	  			if(soundPlayTotal <= 8) ALL_CLOCKS[i].tiktok() // control max sound numbers
	  			soundPlayTotal ++;

	  		}
	  	}
  }

  if(pageStatus == 2){
  	// countingScreen();
  }
  if(pageStatus == 3){
    previewScreen();
  }

  	
}

function keyPressed() {
  if (keyCode === 32) {
    pageStatus = 3;
    BPM = floor(random(60)+60);
  } 
}

// function mousePressed(){
//   pageStatus = 3;
  
//   console.log(BPM);
// }

// function mousePressed(){
//   if(pageStatus !=2 && pageStatus !=3)
//   pageStatus = 2;
// }

// function mousePressed(){
//   //choose pos for crystal
//   let gridx = floor(random(COLUMNS))
//   let gridy = floor(random(ROWS))
  
//   while(grid[gridx][gridy] == 1){
//      gridy = floor(random(COLUMNS))
//      gridx = floor(random(ROWS))
//   }
//   grid[gridx][gridy] = 1;

//   let soundIndex = floor(random(soundArray.length));
//   // console.log(soundIndex)

//   const posX = START + (gridx * GRIDBOX);
//   const posY = START + (gridy * GRIDBOX);
  
//   let rSpeed = random(2)+1; 

//   let name = 'CAREN';
//   var DD = 23;
//   var MM = 1;
//   var YY = 1992;
//   // let rScale = random(1)+1;

//   // let rSpeed = fromSerial2/60/2; 
//   // let rScale = fromSerial2/60/2;
//   // const clock = makeClock({x: posX, y: posY},rSpeed,soundIndex)
//   ALL_CLOCKS.push(new Clock({x: posX, y: posY},rSpeed,soundIndex,name, DD, MM, YY))
//   // console.log(clock)

// }

