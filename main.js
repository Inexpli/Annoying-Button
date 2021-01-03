function Random(id) {
    minX = Math.ceil(5);
    maxX = Math.floor(90);
    minY = Math.ceil(5);
    maxY = Math.floor(90);
    id.style.top = Math.floor(Math.random() * (maxX-minX)) + minX + '%';
    id.style.left = Math.floor(Math.random() * (maxY-minY)) + minY + '%';
}

function Congratulations() {
    alert("There is nothing for free!!!")
}