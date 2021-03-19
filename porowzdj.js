Array.from(document.getElementsByClassName("photoinput")).forEach(e => e.addEventListener('input', function () {
    const wybplik = new FileReader();
    wybplik.addEventListener('load', function () {
        document.querySelector("#" + e.dataset.img).src = wybplik.result
    });
    wybplik.readAsDataURL(e.files[0]);
}))

document.getElementById("range-select").addEventListener('input', function () {
    document.querySelector('#pho2').style.clipPath = "inset(0 " + (100 - document.querySelector('#range-select').value) + "% 0 0)";
})
