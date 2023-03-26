var n;
var ds = new Array(100)
n = prompt('Nhap so nguoi cho phong ban: ', 10)

for(i=1; i <= n; i++){
    ds[i] = prompt('Nhap ten cho nguoi thu ' + i + ": ", "")
}
ds.sort()

document.write("<h3>Danh sach phong ban sau khi da sap xep</h3>")
for(x in ds){
    document.write("<li>"+ ds[x] +"</li>")
}