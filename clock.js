
class Clock{
  constructor(pos,rSpeed,sound,name,D,M,Y){
  this.pos = pos;
  this.rSpeed = rSpeed;
  this.sound = sound;
  this.angle = 0;
  this.rot = 0;
  this.lastRot = 0;
  this.bg = loadImage('assets/clock.png');
  this.color = '#393e46';

  this.hover = false;
  this.name = name.toUpperCase();
  this.D = D;
  this.M = M;
  this.Y = Y;

  }

  update(){
    this.angle += this.rSpeed/20;
    this.rot = map(floor(this.angle),0,60,0,TWO_PI);
    // this.angle = floor(this.angle)
    // console.log(this.angle)
  }

  colorDetect(){
    if(sq(mouseX-this.pos.x) + sq(mouseY-this.pos.y) < sq(CLOCK_SIZE/2)){
      hover = true;
      this.hover = true;
      hoverX = this.pos.x;
      hoverY = this.pos.y;
      this.showName();
    }else{
      this.hover = false;
    }
  }

  showName(){
    if(this.hover){
      push();
      textFont(myFont);
      textSize(11)
      translate(this.pos.x- textWidth(this.name)/2, this.pos.y-22);
      noStroke();
      strokeWeight(0.5);
      fill('#393e46')
      text(this.name,0,0);
      textAlign(CENTER);
      var birthday = this.D.concat('.',this.M,'.',this.Y)
      translate(textWidth(this.name)/2, 9);
      // console.log(this.D)
      textSize(8)
      text(birthday,0,0);
      pop()
    }
  }

  tiktok(){
    if(this.rot != this.lastRot){
      soundArray[this.sound].play();
      this.lastRot = this.rot;
    }
  }

  render(){
    push();
    translate(this.pos.x, this.pos.y);
    image(this.bg, -1/2*CLOCK_SIZE,-1/2*CLOCK_SIZE,CLOCK_SIZE, CLOCK_SIZE);
    // translate(0,0);
    // fill(this.color)
    strokeWeight(3);
    stroke(this.color)
    ellipse(0,0,5,5);
    noStroke();
    fill(this.color)
    rotate(this.rot)
    rect(0,0-2,1/2*CLOCK_SIZE-15,4,2,2);
    pop();
  }
}
