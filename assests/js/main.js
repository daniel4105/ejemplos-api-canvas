// =============================
// REDIMENSIONA EL CANVAS
// =============================
function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
}

// =============================
// DIBUJA TODAS LAS FIGURAS
// =============================
function draw() {
  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  if (!canvas.getContext) return;

  resizeCanvas(canvas, container);
  const ctx = canvas.getContext("2d");

  // Limpia el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =============================
  // RECTÁNGULO
  // =============================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  ctx.clearRect(45, 45, 60, 60);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // =============================
  // TRIÁNGULO RELLENO
  // =============================
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 50);
  ctx.closePath();
  ctx.fillStyle = "#f97316";
  ctx.fill();

  // =============================
  // CARITA
  // =============================
  ctx.beginPath();
  ctx.arc(400, 100, 50, 0, Math.PI * 2, true);

  ctx.moveTo(435, 100);
  ctx.arc(400, 100, 35, 0, Math.PI, false);

  ctx.moveTo(390, 90);
  ctx.arc(385, 90, 5, 0, Math.PI * 2, true);

  ctx.moveTo(420, 90);
  ctx.arc(415, 90, 5, 0, Math.PI * 2, true);

  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.stroke();

  // =============================
  // MATRIZ DE ARCOS
  // =============================
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "#6a63f1";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();

      const x = 50 + j * 60;
      const y = 250 + i * 60;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
// =============================
  // TRIÁNGULO RELLENO (2)
  // =============================
  ctx.beginPath();
  ctx.moveTo(525, 25);
  ctx.lineTo(605, 25);
  ctx.lineTo(525, 105);
  ctx.closePath();
  ctx.fill();

  // =============================
  // TRIÁNGULO CONTORNEADO
  // =============================
  ctx.beginPath();
  ctx.moveTo(625, 125);
  ctx.lineTo(625, 45);
  ctx.lineTo(545, 125);
  ctx.closePath();
  ctx.stroke();

  // =============================
  // NUEVA FIGURA: CURVAS CUADRÁTICAS
  // =============================
  ctx.beginPath();

  // La movemos hacia la derecha para que no se encime
  const offsetX = 675;
  const offsetY = 0;

  ctx.moveTo(75 + offsetX, 25 + offsetY);
  ctx.quadraticCurveTo(25 + offsetX, 25 + offsetY, 25 + offsetX, 62.5 + offsetY);
  ctx.quadraticCurveTo(25 + offsetX, 100 + offsetY, 50 + offsetX, 100 + offsetY);
  ctx.quadraticCurveTo(50 + offsetX, 120 + offsetY, 30 + offsetX, 125 + offsetY);
  ctx.quadraticCurveTo(60 + offsetX, 120 + offsetY, 65 + offsetX, 100 + offsetY);
  ctx.quadraticCurveTo(125 + offsetX, 100 + offsetY, 125 + offsetX, 62.5 + offsetY);
  ctx.quadraticCurveTo(125 + offsetX, 25 + offsetY, 75 + offsetX, 25 + offsetY);

  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 2;
  ctx.stroke();

    // =============================
  // NUEVA FIGURA: CURVAS CÚBICAS (Bezier)
  // =============================
  ctx.beginPath();

  // La movemos a la derecha de la matriz de arcos
  const bezierOffsetX = 250; // ajusta si quieres más separación
  const bezierOffsetY = 275; // alineado verticalmente con la matriz

  ctx.moveTo(75 + bezierOffsetX, 40 + bezierOffsetY);
  ctx.bezierCurveTo(75 + bezierOffsetX, 37 + bezierOffsetY, 70 + bezierOffsetX, 25 + bezierOffsetY, 50 + bezierOffsetX, 25 + bezierOffsetY);
  ctx.bezierCurveTo(20 + bezierOffsetX, 25 + bezierOffsetY, 20 + bezierOffsetX, 62.5 + bezierOffsetY, 20 + bezierOffsetX, 62.5 + bezierOffsetY);
  ctx.bezierCurveTo(20 + bezierOffsetX, 80 + bezierOffsetY, 40 + bezierOffsetX, 102 + bezierOffsetY, 75 + bezierOffsetX, 120 + bezierOffsetY);
  ctx.bezierCurveTo(110 + bezierOffsetX, 102 + bezierOffsetY, 130 + bezierOffsetX, 80 + bezierOffsetY, 130 + bezierOffsetX, 62.5 + bezierOffsetY);
  ctx.bezierCurveTo(130 + bezierOffsetX, 62.5 + bezierOffsetY, 130 + bezierOffsetX, 25 + bezierOffsetY, 100 + bezierOffsetX, 25 + bezierOffsetY);
  ctx.bezierCurveTo(85 + bezierOffsetX, 25 + bezierOffsetY, 75 + bezierOffsetX, 37 + bezierOffsetY, 75 + bezierOffsetX, 40 + bezierOffsetY);

  ctx.fillStyle = "#ec4899";
  ctx.fill();

    // =============================
  // NUEVA FIGURA: RECTÁNGULOS REDONDEADOS + DETALLES
  // =============================
  
  const rrOffsetX = 450;  // Ajusta si quieres mover más a la derecha
  const rrOffsetY = 250;
  
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "#10b981";

  roundedRect(ctx, 12 + rrOffsetX, 12 + rrOffsetY, 150, 150, 15);
  roundedRect(ctx, 19 + rrOffsetX, 19 + rrOffsetY, 150, 150, 9);
  roundedRect(ctx, 53 + rrOffsetX, 53 + rrOffsetY, 49, 33, 10);
  roundedRect(ctx, 53 + rrOffsetX, 119 + rrOffsetY, 49, 16, 6);
  roundedRect(ctx, 135 + rrOffsetX, 53 + rrOffsetY, 49, 33, 10);
  roundedRect(ctx, 135 + rrOffsetX, 119 + rrOffsetY, 25, 49, 10);

  ctx.beginPath();
  ctx.arc(37 + rrOffsetX, 37 + rrOffsetY, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31 + rrOffsetX, 37 + rrOffsetY);
  ctx.fill();

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16 + rrOffsetX, 35 + rrOffsetY, 4, 4);
  }

  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115 + rrOffsetX, 51 + i * 16 + rrOffsetY, 4, 4);
  }

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16 + rrOffsetX, 99 + rrOffsetY, 4, 4);
  }

  ctx.beginPath();
  ctx.moveTo(83 + rrOffsetX, 116 + rrOffsetY);
  ctx.lineTo(83 + rrOffsetX, 102 + rrOffsetY);
  ctx.bezierCurveTo(83 + rrOffsetX, 94 + rrOffsetY, 89 + rrOffsetX, 88 + rrOffsetY, 97 + rrOffsetX, 88 + rrOffsetY);
  ctx.bezierCurveTo(105 + rrOffsetX, 88 + rrOffsetY, 111 + rrOffsetX, 94 + rrOffsetY, 111 + rrOffsetX, 102 + rrOffsetY);
  ctx.lineTo(111 + rrOffsetX, 116 + rrOffsetY);
  ctx.lineTo(106.333 + rrOffsetX, 111.333 + rrOffsetY);
  ctx.lineTo(101.666 + rrOffsetX, 116 + rrOffsetY);
  ctx.lineTo(97 + rrOffsetX, 111.333 + rrOffsetY);
  ctx.lineTo(92.333 + rrOffsetX, 116 + rrOffsetY);
  ctx.lineTo(87.666 + rrOffsetX, 111.333 + rrOffsetY);
  ctx.lineTo(83 + rrOffsetX, 116 + rrOffsetY);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91 + rrOffsetX, 96 + rrOffsetY);
  ctx.bezierCurveTo(88 + rrOffsetX, 96 + rrOffsetY, 87 + rrOffsetX, 99 + rrOffsetY, 87 + rrOffsetX, 101 + rrOffsetY);
  ctx.bezierCurveTo(87 + rrOffsetX, 103 + rrOffsetY, 88 + rrOffsetX, 106 + rrOffsetY, 91 + rrOffsetX, 106 + rrOffsetY);
  ctx.bezierCurveTo(94 + rrOffsetX, 106 + rrOffsetY, 95 + rrOffsetX, 103 + rrOffsetY, 95 + rrOffsetX, 101 + rrOffsetY);
  ctx.bezierCurveTo(95 + rrOffsetX, 99 + rrOffsetY, 94 + rrOffsetX, 96 + rrOffsetY, 91 + rrOffsetX, 96 + rrOffsetY);

  ctx.moveTo(103 + rrOffsetX, 96 + rrOffsetY);
  ctx.bezierCurveTo(100 + rrOffsetX, 96 + rrOffsetY, 99 + rrOffsetX, 99 + rrOffsetY, 99 + rrOffsetX, 101 + rrOffsetY);
  ctx.bezierCurveTo(99 + rrOffsetX, 103 + rrOffsetY, 100 + rrOffsetX, 106 + rrOffsetY, 103 + rrOffsetX, 106 + rrOffsetY);
  ctx.bezierCurveTo(106 + rrOffsetX, 106 + rrOffsetY, 107 + rrOffsetX, 103 + rrOffsetY, 107 + rrOffsetX, 101 + rrOffsetY);
  ctx.bezierCurveTo(107 + rrOffsetX, 99 + rrOffsetY, 106 + rrOffsetX, 96 + rrOffsetY, 103 + rrOffsetX, 96 + rrOffsetY);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101 + rrOffsetX, 102 + rrOffsetY, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89 + rrOffsetX, 102 + rrOffsetY, 2, 0, Math.PI * 2, true);
  ctx.fill();

    // =============================
  // NUEVA FIGURA: Path2D
  // =============================

  const pathOffsetX = 675; // mueve a la derecha del Pac-Man
  const pathOffsetY = 300;

  const rectangle = new Path2D();
  rectangle.rect(10 + pathOffsetX, 10 + pathOffsetY, 50, 50);

  const circle = new Path2D();
  circle.arc(100 + pathOffsetX, 35 + pathOffsetY, 25, 0, 2 * Math.PI);

  ctx.lineWidth = 3;
  ctx.strokeStyle = "#111";
  ctx.fillStyle = "#3b82f6";

  ctx.stroke(rectangle);
  ctx.fill(circle);


}

// =============================
// EVENTOS
// =============================
function initUI() {
  document.getElementById("year").textContent =
    new Date().getFullYear();

  document
    .getElementById("btnRedraw")
    .addEventListener("click", draw);

  window.addEventListener("resize", draw);

  draw();
}

// =============================
// FUNCIÓN RECTÁNGULO REDONDEADO
// =============================
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}


initUI();
