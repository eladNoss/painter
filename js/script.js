var canvas = document.getElementById("box");
var dotSize = 5;
var picColor = document.getElementsByClassName("button");
var picSize = document.getElementsByClassName("size");
var mouseDown;
var mouseUp;
var mouseMove;
var color = "black";
canvas.addEventListener('click', function(e) {

});

for (var i = 0; i < picColor.length; i++) {
    picColor[i].addEventListener('click', function(e) {

        color = e.target.id
    })
}
for (var i = 0; i < picSize.length; i++) {
    picSize[i].addEventListener('click', function(e) {
        dotSize = e.target.id;
    })
}



function drawAt(point) {
    if (mouseDown == true) {
        var div = document.createElement('div');
        div.style.backgroundColor = color;
        div.style.width = dotSize + "px";
        div.style.height = dotSize + "px";
        div.style.position = "absolute";
        div.style.left = (point.x - dotSize / 2) + "px"
        div.style.top = (point.y - dotSize / 2) + "px"
        div.style.borderRadius = "50%"
        canvas.appendChild(div);
    }

}
document.getElementById("box").addEventListener('mousemove', drawAt)
document.getElementById("box").addEventListener('mousedown', function() {
    mouseDown = true;

})

document.getElementById("box").addEventListener('mouseup', function() {
    mouseDown = false;
})
document.getElementById("blue").addEventListener('click', changeBlue)

function changeBlue() {


}