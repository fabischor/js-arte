function setup() {
    createCanvas(600, 600);
      background("green");
  }
  
  function draw() {
    
    fill("pink");
    stroke("blue");
    
    //console.log(mouseIsPressed)
    if (mouseIsPressed) {
        rect(mouseX, mouseY, 50, 70);
    }
  
  }
