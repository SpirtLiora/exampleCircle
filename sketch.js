function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	fill(mouseX, mouseY, 200);
	ellipse(mouseX, mouseY, 300, 300);
}
