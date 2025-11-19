function buscar() {
    let input = document.getElementById("buscador").value.toLowerCase();
    let filas = document.querySelectorAll("#resultado tr");

    filas.forEach(fila => {
        let textoFila = fila.innerText.toLowerCase();
        fila.style.display = textoFila.includes(input) ? "" : "none";
    });
}



function toggleModo() {
    const html = document.documentElement;
    const btn = document.getElementById("modoBtn");

    if (html.dataset.theme === "dark") {
        html.dataset.theme = "light";
        btn.textContent = "🌙";
    } else {
        html.dataset.theme = "dark";
        btn.textContent = "☀️";
    }
}
