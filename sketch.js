let estrelas = [];

function setup() {
  
  slider = createSlider(0, 2, 0);
  slider.position(150, 450);
  slider.style("width", "200px");
  
  createCanvas(500, 500);
  
  for (let i = 0; i < (width + height) / 2; i++) {
    estrelas[i] = new Estrela();
  }
  
}

function draw() {
  
  translate(width / 2, height / 2);
  background(0);

  for (let i = 0; i < estrelas.length; i++) {
    estrelas[i].mostrar();
    estrelas[i].atualizar();
  }
  
  noFill();
  strokeWeight(10);
  stroke(50);
  line(-150, -250, -75, -100);
  line(150, -250, 75, -100);
  line(-150, 250, -75, 100);
  line(150, 250, 75, 100);
  line(-250, 0, -125, 0);
  line(250, 0, 125, 0);
  stroke(100);
  circle(0, 0, 250);
  
  noStroke();
  fill(100);
  quad(-250, 250, -150, 150, 150, 150, 250, 250);
  fill(50);
  triangle(250, 250, 150, 150, 250, 50);
  triangle(-250, 250, -150, 150, -250, 50);
  textFont("Georgia");
  textSize(15);
  strokeWeight(5);
  stroke(25);
  fill(20, 200, 70);
  text("Repouso", -125, 235);
  fill(200, 200, 70);
  text("Passeio", -20, 235);
  fill(220, 20, 50);
  text("Hiper-Salto", 60, 235);
  
  stroke(0);
  fill(40, 150, 200);
  rect(-150, 160, 300, 35);
  strokeWeight(1);
  textSize(20);
  fill(0);
  text("Velocidade: " + floor(estrelas[0].accel) * 100 + " km/s", -100, 185);
  
}

function Estrela() {
  
  this.x = random(-width / 2, width / 2);
  this.y = random(-height / 2, height / 2);
  this.z = random(width);
  this.zanterior = this.z;
  this.accel = 0;

  this.mostrar = function () {
    
    fill(255);
    stroke(255);

    let movimento_x = map(this.x / this.z, 0, 1, 0, width);
    let movimento_y = map(this.y / this.z, 0, 1, 0, height);
    let diametro = map(this.z, 0, width, 10, 0);

    circle(movimento_x, movimento_y, diametro);
  };

  this.atualizar = function () {
    
    if (slider.value() === 2) {
      this.accel += 0.05;
      this.accel = constrain(this.accel, 1, 20);
    } else if (slider.value() === 1) {
      this.accel = 1;
    } else {
      this.accel = 0;
    }
    
    this.z -= slider.value() * this.accel;
    if (this.z <= 0) {
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
      this.z = width;
    }
  }
}
