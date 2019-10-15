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
		context.lineTo(x, y);
		context.stroke();
	}
}

function stopDrawing() {
    isDrawing = false;	
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}