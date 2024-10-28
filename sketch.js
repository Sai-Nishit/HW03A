function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 

  let gridSize = 100; 

  for (let x = gridSize / 2; x < width; x += gridSize) {
    for (let y = gridSize / 2; y < height; y += gridSize) {
      let size = (x + y) % 200 === 0 ? gridSize * 0.8 : gridSize * 0.4; 
      let offsetX = random(-5, 5); 
      let offsetY = random(-5, 5); 

      fill(0);
      ellipse(x + offsetX, y + offsetY, size); /
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw(); 
}
