Canvas = document.getElementById("Canvas");
ctx= Canvas.getContext("2d");

ctx.beginPath();
Color = "blue"
ctx.strokeStyle = Color;
ctx.lineWidth = 5;
ctx.arc(120, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
Color = "black"
ctx.strokeStyle = Color;
ctx.lineWidth = 5;
ctx.arc(220, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
Color = "red"
ctx.strokeStyle = Color;
ctx.lineWidth = 5;
ctx.arc(320, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
Color = "yellow"
ctx.strokeStyle = Color;
ctx.lineWidth = 5;
ctx.arc(170, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
Color = "green"
ctx.strokeStyle = Color;
ctx.lineWidth = 5;
ctx.arc(270, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();














Circle (mouse_x , mouse_y) 


function Circle (mouse_x , mouse_y) 
{
    ctx.beginPath();
    ctx.strokeStyle = Color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);

    ctx.stroke();}