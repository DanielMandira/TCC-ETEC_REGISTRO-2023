let count = 1;
document.getElementById("radio1").checked =true;
setInterval(function()
{
    nextImage()
},5000)

function nextImage()
{
count++;
if(count>4)
{
    count=1;
}
document.getElementById("radio"+count).checked =true;

}

function LerMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLerMais = document.getElementById("btnLerMais");

    if (pontos.style.display === "none"){
        pontos.style.display = "inline";
        btnLerMais.innerHTML = "inline";
        maisTexto.style.display = "none";
    }

    else{
        pontos.style.display = "none";
        btnLerMais.innerHTML = "Read less";
        maisTexto.style.display = "inline";
    }
}

