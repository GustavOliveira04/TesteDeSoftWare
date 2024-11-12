function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value, 10);
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 

    let texto, imagemSrc;

    if (isNaN(idade)) {
        texto = "Por favor, insira uma idade válida.";
    } else if (idade < 0) {
        texto = "Você é um Zumbi";
        imagemSrc = "https://www.blogs.unicamp.br/ciencianerd/wp-content/uploads/sites/113/2018/10/zombies_eat_brains____by_gabsteve-d5i1483.jpg"; 
    } else if (idade < 18) {
        texto = "Menor de idade";
        imagemSrc = "https://www.avivaescolainfantil.com.br/wp-content/uploads/2024/04/criancas-chorando-por-tudo.jpg";
    } else if (idade >= 18 && idade <= 60) {
        texto = "Maior de idade";
        imagemSrc = "https://img.freepik.com/fotos-gratis/homem-adulto-atraente-cruzando-os-bracos-e-sorrindo_176420-18744.jpg";
    } else if (idade > 60) {
        texto = "Idoso";
        imagemSrc = "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/07/20125204/Musculacao-de-idosos.jpg";
    }

    resultDiv.innerHTML = `<p>${texto}</p>`;
    if (imagemSrc) {
        resultDiv.innerHTML += `<img src="${imagemSrc}" alt="${texto}">`;
    }
}
