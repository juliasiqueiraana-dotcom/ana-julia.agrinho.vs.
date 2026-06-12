// Função para calcular o resultado do Quiz Ambiental
function calcularPontuacao() {
    const form = document.getElementById('quizForm');
    const rQuiz = document.getElementById('resultadoQuiz');
    
    // Pegando as respostas selecionadas
    const p1 = form.elements['p1'].value;
    const p2 = form.elements['p2'].value;
    const p3 = form.elements['p3'].value;
    
    // Validação simples para garantir que responderam tudo
    if (!p1 || !p2 || !p3) {
        alert("Por favor, responda todas as perguntas antes de verificar!");
        return;
    }
    
    // Somando os pontos
    const total = parseInt(p1) + parseInt(p2) + parseInt(p3);
    
    // Definindo a mensagem baseada no texto do usuário
    let mensagem = "";
    if (total === 30) {
        mensagem = `Sua pontuação: ${total}/30. Excelente! Suas atitudes ajudam diretamente a manter o equilíbrio ambiental e a preservar os recursos naturais.`;
    } else if (total >= 10) {
        mensagem = `Sua pontuação: ${total}/30. Você já tem boas iniciativas! Lembre-se de que pequenas mudanças no dia a dia fazem toda a diferença para o planeta.`;
    } else {
        mensagem = `Sua pontuação: ${total}/30. Atenção! Atitudes como desperdiçar água, não reciclar ou descartar lixo incorretamente prejudicam gravemente a natureza. Vamos mudar de hábitos?`;
    }
    
    // Exibindo o resultado na tela
    rQuiz.innerText = mensagem;
    rQuiz.classList.remove('hidden');
}

// Função para exibir as informações dos pilares da sustentabilidade
function mostrarInfo(pilar) {
    const infoBox = document.getElementById('infoPilar');
    let textoInfo = "";
    
    switch(pilar) {
        case 'populacao':
            textoInfo = "<strong>O Papel da População:</strong> Ter mais consciência sobre suas ações diárias. Adotar pequenas mudanças que fazem a diferença, como separar o lixo reciclável, não jogar detritos nas ruas e evitar o desperdício crítico de água.";
            break;
        case 'empresas':
            textoInfo = "<strong>O Papel das Empresas:</strong> Investir em responsabilidade socioambiental. No setor agrícola, aplicar as pesquisas da Embrapa para desenvolver uma agricultura sustentável, produzindo alimentos de qualidade sem destruir ecossistemas.";
            break;
        case 'governo':
            textoInfo = "<strong>O Papel do Governo:</strong> Criar políticas públicas eficazes, fiscalizar e combater crimes ambientais severos como o desmatamento ilegal, poluição industrial e queimadas descontroladas.";
            break;
        default:
            textoInfo = "";
    }
    
    // Inserindo o texto e tornando visível
    infoBox.innerHTML = textoInfo;
    infoBox.classList.remove('hidden');
}