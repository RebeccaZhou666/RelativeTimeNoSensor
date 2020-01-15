// let t = 0;
let num = 0;
let fromSerial = 0; 
let fromSerial2 = 0;
let previous = 0 ;
let numshow = 0;
// let lastBPM;
// let BPM;
// let heartHistory = [];


let first = false;
// let inputFirst = false;
let inputFirst2 = false;



// function countingScreen(){
// 	if(!first) {
// 		// background('#ffafb0');
// 		if(!inputFirst){
//       background(255)
// 			// image(bgImg,0,0,width,height);
// 			// button = select('#submit');
// 	  // 		button.position(width/2-100, height/2+300);
// 			first = true;
// 			inputFirst = true;
// 		}else{
// 			// image(bgImg,0,0,width,height);
//       background(255)
// 			// button.style('visibility', 'visible');
// 			first = true;
// 			t = 0;
// 		}
// 	}


//  	// num = map(fromSerial,0,1023,0,240);
//  	// num = 0.8*num + 0.2*previous;

//   if(fromSerial <= 600 && fromSerial >= 400){
//     num = map(fromSerial,400,600,0,300);
//   }else if(fromSerial < 600){
//     num = 0
//   }else{
//     num = 300
//   }
//   num = 0.8*num + 0.2*previous;

//   if(t > width*1/6){
//     heartHistory.push(num);
//   }
  
//   	// stroke(255,0,0);
  	
//   	// strokeWeight(1);
//    //  stroke(255);w
//    //  line(t+500,200,t+500,600);
//    //  ellipse(t+500,previous+300,2,2);
//    //  strokeWeight(1);
//    //  stroke(255,0,0);
//    //  ellipse(t+501,num+300,2,2);
//    //  strokeWeight(0.5);
//    //  line(t+500+1,200,t+501,600);
//     strokeWeight(2);
//     stroke('#393e46');
//     line(t+width*2/5-100,previous+height*2/5,t+width*2/5-100+2,num+height*2/5);
// 	// circle(t+500, num+500, 1);
// 	t +=2;


// 	if(t+width*3/5+100 > width) {
//      // image(bgImg,0,0,width,height);
//      if(lastBPM != 0){
//       pageStatus = 3;
//       BPM = lastBPM; // this person's final BPM;
//       first = false;
//      }else{
//       background(255);
//       t = 0;
//      }
//   }

//     // console.log(fromSerial)
//   	// rect(500, 400, 300, 300)

//   	// console.log(fromSerial,fromSerial2)
//   	noStroke();
//   	fill(255)
//   	rect(width*3/5+300,height*2/5,600,300);
  	
//   	// image(htImg,1010,500,20,20);
//     var heartColor = map(t,0,width*2/5, 255,0);
//     fill(heartColor)
//     drawHeart(width*3/5+350, height*2/5+180,30);
//     textSize(30);
//     fill(0)
//     if(fromSerial2 == 0){
//       if(lastBPM == 0)
//         text('Not Detected Yet', width*3/5+380,height*2/5+200);
//       else
//         text(lastBPM, width*3/5+380,height*2/5+200);
//     }else{
//       text(fromSerial2, width*3/5+380,height*2/5+200);
//       lastBPM = fromSerial2;
//     }
//     // console.log(lastBPM)
//     // text(fromSerial2, 1050,520);
//     noFill();
//     previous = num;

//     // button.mousePressed(creator);	
    
// }

// function drawHeart(x, y, size) {
//   beginShape();
//   vertex(x, y);
//   bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
//   bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
//   endShape(CLOSE);
// }


let previewRot = 0;
let previewLastRot = 0;
let previewSpeed = 0;
let previewAngle = 0;


function previewScreen(){
   background(255);
  
  if(pageStatus == 3){
    if(!first){
      if(!inputFirst2){
      soundIndex = floor(random(soundArray.length));
      previewSpeed = BPM/120;
      // first = true;
      // t = 0;
      // inputName = createInput('Your Name');
      name.style('visibility', 'visible');
      date.style('visibility', 'visible');
      month.style('visibility', 'visible');
      year.style('visibility', 'visible');
      submit.style('visibility', 'visible');
      console.log('show')
      
      inputFirst2 = true;
      first = true;
    
    }}
    // else{
    //   // soundIndex = floor(random(soundArray.length));
    //   // previewSpeed = BPM/120;
    //   // first = true;

    //   name.style('visibility', 'visible');
    //   date.style('visibility', 'visible');
    //   month.style('visibility', 'visible');
    //   year.style('visibility', 'visible');
    //   submit.style('visibility', 'visible');
    //   // console.log('show2')
    //   // first = true;
    //   // t = 0;
    // }
  
  
  submit.mousePressed(creator); 
  drawLastHeart();
  // drawHeartLine();
  drawPreviewTiktok();  
  }
}





function drawLastHeart(){
  push();
    translate(width/2,height/2-100);
    image(clockImg, -200,-200,400,400);
    // translate(0,0);
    // fill(this.color)
    strokeWeight(3);
    stroke('#393e46')
    fill('#393e46')
    ellipse(0,0,10,10);
    noStroke();
    fill('#393e46')
    rotate(previewRot)
    rect(-2,-4,1/2*400-50,8,4,4);
  pop();
}


function drawPreviewTiktok(){
  
    previewAngle += previewSpeed/20;
     previewRot = map(floor(previewAngle),0,60,0,TWO_PI);

    if(previewRot != previewLastRot){
      soundArray[soundIndex].play();
      previewLastRot = previewRot;
    }

}

// function drawHeartLine(){

//   strokeWeight(2);
//   stroke('#393e46');
//   for(let k = 0; k < t; k++){
//     line(2*k+width*2/5,  0.5*heartHistory[k]+height*4/8+100,  2*k+width*2/5+1,  0.5*heartHistory[k+1]+height*4/8+100);
//   }
  
//   // circle(t+500, num+500, 1);
//   t ++;
//   console.log(t)

//   if(t >= heartHistory.length || t >= 300) {
//      // image(bgImg,0,0,width,height);
//       console.log("restart")
//       background(255);
//       t = 0;
//   }

// }

function creator(){
  //choose pos for crystal
  let gridx = floor(random(COLUMNS))
  let gridy = floor(random(ROWS))
  
  while(grid[gridx][gridy] == 1){
     gridy = floor(random(COLUMNS))
     gridx = floor(random(ROWS))
  }
  grid[gridx][gridy] = 1;

  // let soundIndex = floor(random(soundArray.length));
  // console.log(soundIndex)

  const posX = STARTX + (gridx * GRIDBOX);
  const posY = STARTY + (gridy * GRIDBOX);
  
  // let rSpeed = fromSerial/60; 
  // let rScale = fromSerial/60;

  let rSpeed = previewSpeed; 
  // let rScale = fromSerial2/60/2;
  let name_input = name.value();
  console.log(name_input);
  let date_input = date.value();
  let month_input = month.value();
  let year_input = year.value();

  ALL_CLOCKS.push(new Clock({x: posX, y: posY},rSpeed,soundIndex,name_input,date_input,month_input,year_input))
  // console.log(crystal)
  name.value('');
  date.value('');
  month.value('');
  year.value('');



  submit.style('visibility', 'hidden');
  name.style('visibility', 'hidden');
  date.style('visibility', 'hidden');
  month.style('visibility', 'hidden');
  year.style('visibility', 'hidden');

  pageStatus = 1;


  reset();

}

function reset(){
  previewSpeed = 0;
  previewRot = 0;
  previewAngle = 0;
  previewLastRot = 0;
  soundIndex = 0;
  first = false;
  BPM = 0;
  inputFirst2 = false;
    // lastBPM= 0;
  // heartHistory = [];
  // t= 0;

}




