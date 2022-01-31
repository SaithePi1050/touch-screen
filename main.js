var px;
var py;
var color = "black";
var width = 1;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var swidth = screen.width;

var newwidth = screen.width - 70;
var newhieght = screen.height - 300; 

if (swidth < 992) 
{
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newhieght;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",mymousedown);

function mymousedown(e)
{
    mousevent = "touchstart";
    color = document.getElementById("color").value; width = document.getElementById("width").value;
}

canvas.addEventListener("touchmove",mymousemove);

function mymousemove(e)
{
    var cx = e.touches[0].clientX - canvas.offsetLeft;
    var cy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo (px, py);
    ctx.lineTo (cx,cy);
    ctx. stroke();

    px = cx;
    py = cy;
}

function cleararea() 
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}