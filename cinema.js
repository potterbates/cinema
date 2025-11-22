function calcular() {
    //entrada de dados
    const titulo = document.getElementById("titulo").value
    const duração = document.getElementById("duração").value
    //processamento
    const horas = Math.floor(duração / 60)
    const minutos = duração - horas * 60
    //saída
    document.getElementById("nomeFilme").textContent = titulo
    document.getElementById("duraçãoFilme").textContent = horas + "h e " + minutos + "m"
}