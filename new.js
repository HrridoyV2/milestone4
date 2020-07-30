
function generatePin(){
    var pin = Math.floor(Math.random()*9001) + 1000;
    
    document.getElementById('pin').value = pin;
    return pin;
}
