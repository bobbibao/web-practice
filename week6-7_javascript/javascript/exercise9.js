var charNum = 0;
txtCharNum = document.getElementsByName("txtCharNum")[0];
txtContent = document.getElementsByName("txtContent")[0];
function check(){
    if(txtContent.value.length > 50){
        alert("Ban da nhap qua so ky tu cho phep!")
    }
    txtCharNum.value = txtContent.value.length
}