function actualizar(){
    const valor = document.getElementById("texto").value
    document.getElementById("input").addEventListener("input", function() {
        document.getElementById("mH1").textContent = this.value;
    });
    
}