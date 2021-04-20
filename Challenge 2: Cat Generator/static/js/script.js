function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = 'static/img/cat.jpg';
    div.appendChild(image);

}

function eraseCat() {
    document.getElementById('flex-cat-gen').remove();
}