canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")
color="purple"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",mousedown)
function mousedown(e) {
color=document.getElementById("color").value


    mousex=e.clientX-canvas.offsetLeft
mousey=e.clientY-canvas.offsetTop
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(mousex,mousey,40,0,2*Math.PI)
ctx.stroke()





}