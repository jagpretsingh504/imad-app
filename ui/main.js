console.log('Loaded!');

var element = doceument.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = merginLeft + 'px';
}




img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};