var canvas;
var context;

window.onload = function() {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

    myColor = "black";
    document.getElementById('color').oninput = function() {
		myColor = this.value;
	}

	thickness = "4";

}

function razm(){
	thickness = $("#widthSel :selected").val();
}

function startDrawing(e) {
	// Начинаем рисовать
	isDrawing = true;
	
	// Создаем новый путь
	context.beginPath();
	
	// Нажатием левой кнопки мыши помещаем "кисть" на холст
	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
	if (isDrawing == true)
	{
	  	// Определяем текущие координаты указателя мыши
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		
		// Рисуем линию до новой координаты
		context.lineWidth = thickness;
		context.strokeStyle = myColor;
		context.lineTo(x, y);				//линия
		context.stroke();

		// context.beginPath();			//треугольник
  //       context.moveTo(x, y);
  //       context.lineTo(x+120, y+120);
  //       context.lineTo(x+220, y+10);
  //       context.closePath();
		// context.stroke();

		// context.beginPath();				//диалог
	 //    context.moveTo(x,y);
	 //    context.quadraticCurveTo(x-50,y,x-50,y+37.5);
	 //    context.quadraticCurveTo(x-50,y+75,x-25,y+75);
	 //    context.quadraticCurveTo(x-25,y+95,x-45,y+100);
	 //    context.quadraticCurveTo(x-15,y+95,x-10,y+75);
	 //    context.quadraticCurveTo(x+50,y+75,x+50,y+37.5);
	 //    context.quadraticCurveTo(x+50,y,x,y);
	 //    context.stroke();
	}
}

function stopDrawing() {
    isDrawing = false;	
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}