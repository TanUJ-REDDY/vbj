var mouseEvent="";
color=Red
witdth =3 
radius =25
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
ctx.beginPath()
 ctx.strokeStyle=color
 ctx.lineWidth=2
 ctx.arc(200,200,40,0,2*Math.PI)
 ctx.stroke()
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
    color = document.getElementById("color").value;
    console.log(color);
mouse_X=e.clientX-canvas.offsetLeft
mouse_Y=e.clientY-canvas.offsetTop
console.log(mouse_Y)
console.log(mouse_X)
circle(mouse_X,mouse_Y)
}
function circle(mouse_X,mouse_Y){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=2
    ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI)
    ctx.stroke()    
 }

 function clearArea() { 
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     }
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft
    current_position_of_mouse_y=e.clientY-canvas.offsetTop
    if (mouseEvent==="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width_of_line
        console.log("last position of x and y cordinates ")
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y); 
        ctx.moveTo(last_position_of_x, last_position_of_y); 
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
         ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x; last_position_of_y = current_position_of_mouse_y;

}
