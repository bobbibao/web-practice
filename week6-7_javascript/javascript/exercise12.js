
function checkUpper(str){
    ch = str.charAt(0)
    if(ch === ch.toUpperCase()){
        return true;
    }else
        return false;
}

btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', () =>{
    txt = document.getElementById('txt');
    if (checkUpper(txt.value)){
        alert("Ki tu dau la hoa")
    }
    else{
        alert("Ki tu dau khong phai la hoa")
    }
})