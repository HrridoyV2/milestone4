function generatePin(){
    const pin = Math.floor(Math.random()*9001) + 1000;
    
    document.getElementById('pin').value = pin;
    document.getElementById('incorrect').style.display = "none";
    document.getElementById('correct').style.display = "none";    
    
}


function insertNumber(number){
    let existingNumber = document.getElementById('input').value;
    document.getElementById('input').value = (existingNumber + number)
}
function clearInput(){
    document.getElementById('input').value = ""
}
function deleteLast(){
    const presentValue = (document.getElementById('input').value);
    document.getElementById('input').value = (presentValue.slice(0, -1));
}
function submit(){
    const pin = document.getElementById('pin').value;
    const input = document.getElementById('input').value;
    let tryCnt = parseInt(document.getElementById('tryCnt').innerText);
    if(pin == input){
        document.getElementById('correct').style.display = "block";
    }
    else{
        tryCnt--;
        if(tryCnt > 0){
            document.getElementById('tryCnt').innerText = tryCnt;
        }
        else{
            document.getElementById('tryCnt').innerText = tryCnt;
            document.getElementById('submit').disabled = "true";
        }
        document.getElementById('incorrect').style.display = "block";
    }
    document.getElementById('input').value = "";
    document.getElementById('pin').value = "";
}
