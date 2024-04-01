let titulo = document.getElementById("titulo");
let h1 = document.getElementById("h1");
let valor = document.getElementById("valor");
let paragrafo = document.getElementById("paragrafo");
let descricao = document.getElementById("descricao");

function texto() {
    h1.style.textAlign = "center";
    h1.style.color = "blue";
};

function tamanhoImagem() {
    let imagem = document.getElementById("imagem");
    imagem.src = "./imagem.webp"
    imagem.style.width = "400px";
    imagem.style.height = "auto";
    imagem.style.display = "block";
    imagem.style.margin = "auto";
};

titulo.innerText = "Dedê Fashion";
h1.innerText = "Coleção Verão 2024";
valor.innerHTML = "<strong>R$129,90</strong>";
paragrafo.innerHTML = "<strong>Coleção 2024</strong>, de shortinhos feminino.<br>Temos shortinhos nas cores <strong>azul, lilás, preta e verde</strong>, com tamanhos <strong>P, M e G</strong>.";
descricao.innerHTML = "<strong>Informações do Produto:</strong><br>Short feminino social elegante cintura alta em alfaiataria.<br><br><strong>SHORT FEMININO EM ALFAIATARIA.</strong><br>Para saída noturna, festinhas ou aquele happy hour divertidíssimo, não há peça mais adequada que o short, que garante conforto e segurança. Possui fechamento em zíper na parte traseira, passante e acompanha cinto deixando a peça ainda mais linda. Para montar looks casuais de tirar o fôlego é uma peça indispensável na coleção!<br><br><strong>Medidas da peça:</strong><br>P- Comprimento 38 cm<br>P- Cintura 76 cm<br>P- Quadril 90 cm<br><br>M- Comprimento 41 cm<br>M- Cintura 82 cm<br>M- Quadril 96 cm<br><br>G- Comprimento 41 cm<br>G- Cintura 84 cm<br>G- Quadril 100 cm";

texto();
tamanhoImagem();
