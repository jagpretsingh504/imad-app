console.log('Loaded!');

var image = doceument.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft +=1;
    img.style.marginLeft = merginLeft + 'px';
}




img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};