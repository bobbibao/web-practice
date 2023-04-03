img = document.getElementById('image');
startBtn = document.getElementById('startBtn');
stopBtn = document.getElementById('stopBtn');

images = ["./exercise11_img1.jpeg", "./exercise11_img2.jpeg", "./exercise11_img3.jpeg"]

function changeImage(){
    index = Math.floor(Math.random() * images.length)
    img.src = images[index];
}
startBtn.addEventListener('click', function(){
    interval = setInterval(changeImage, 3000)

})
stopBtn.addEventListener('click', function(){
    clearInterval(interval)
})