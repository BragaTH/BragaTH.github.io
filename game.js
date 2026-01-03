// O CÉREBRO DO JOGO
const countries = [
    // Fáceis (5) - PAÍSES VERY EASY
    { name: "Brasil", code: "br", difficulty: "easy" },
    { name: "Estados Unidos", code: "us", difficulty: "easy" },
    { name: "Japão", code: "jp", difficulty: "easy" },
    { name: "Reino Unido", code: "gb", difficulty: "easy" },
    { name: "China", code: "cn", difficulty: "easy" },
    
    // Médias (15) - EASY PARA OS ESPERTOS
    { name: "Noruega", code: "no", difficulty: "medium" },
    { name: "Suécia", code: "se", difficulty: "medium" },
    { name: "Finlândia", code: "fi", difficulty: "medium" },
    { name: "Dinamarca", code: "dk", difficulty: "medium" },
    { name: "Polônia", code: "pl", difficulty: "medium" },
    { name: "Islândia", code: "is", difficulty: "medium" },
    { name: "Romênia", code: "ro", difficulty: "medium" },
    { name: "Bulgária", code: "bg", difficulty: "medium" },
    { name: "Hungria", code: "hu", difficulty: "medium" },
    { name: "República Tcheca", code: "cz", difficulty: "medium" },
    { name: "Áustria", code: "at", difficulty: "medium" },
    { name: "Suíça", code: "ch", difficulty: "medium" },
    { name: "Bélgica", code: "be", difficulty: "medium" },
    { name: "Holanda", code: "nl", difficulty: "medium" },
    { name: "Irlanda", code: "ie", difficulty: "medium" },
    
    // Difíceis (30) - TALVEZ VC SEJA BURRO E NÃO SAIBA
    { name: "Eslováquia", code: "sk", difficulty: "hard" },
    { name: "Eslovênia", code: "si", difficulty: "hard" },
    { name: "Croácia", code: "hr", difficulty: "hard" },
    { name: "Sérvia", code: "rs", difficulty: "hard" },
    { name: "Bósnia e Herzegovina", code: "ba", difficulty: "hard" },
    { name: "Montenegro", code: "me", difficulty: "hard" },
    { name: "Macedônia do Norte", code: "mk", difficulty: "hard" },
    { name: "Albânia", code: "al", difficulty: "hard" },
    { name: "Moldávia", code: "md", difficulty: "hard" },
    { name: "Lituânia", code: "lt", difficulty: "hard" },
    { name: "Letônia", code: "lv", difficulty: "hard" },
    { name: "Estônia", code: "ee", difficulty: "hard" },
    { name: "Bielorrússia", code: "by", difficulty: "hard" },
    { name: "Ucrânia", code: "ua", difficulty: "hard" },
    { name: "Armênia", code: "am", difficulty: "hard" },
    { name: "Azerbaijão", code: "az", difficulty: "hard" },
    { name: "Geórgia", code: "ge", difficulty: "hard" },
    { name: "Cazaquistão", code: "kz", difficulty: "hard" },
    { name: "Quirguistão", code: "kg", difficulty: "hard" },
    { name: "Tadjiquistão", code: "tj", difficulty: "hard" },
    { name: "Turcomenistão", code: "tm", difficulty: "hard" },
    { name: "Uzbequistão", code: "uz", difficulty: "hard" },
    { name: "Laos", code: "la", difficulty: "hard" },
    { name: "Camboja", code: "kh", difficulty: "hard" },
    { name: "Mianmar", code: "mm", difficulty: "hard" },
    { name: "Bangladesh", code: "bd", difficulty: "hard" },
    { name: "Nepal", code: "np", difficulty: "hard" },
    { name: "Butão", code: "bt", difficulty: "hard" },
    { name: "Tunísia", code: "tn", difficulty: "hard" },
    { name: "Argélia", code: "dz", difficulty: "hard" }
];

// Grupos de países EXTREMAMENTE similares para opções confusas
const similarGroups = [
    // Países dos Balcãs (super similares)
    ["Eslováquia", "Eslovênia", "Croácia"],
    ["Sérvia", "Croácia", "Eslovênia"],
    ["Bósnia e Herzegovina", "Croácia", "Sérvia"],
    ["Montenegro", "Sérvia", "Macedônia do Norte"],
    ["Macedônia do Norte", "Bulgária", "Albânia"],
    
    // Países Bálticos (bandeiras parecidas)
    ["Lituânia", "Letônia", "Estônia"],
    ["Letônia", "Estônia", "Lituânia"],
    ["Estônia", "Lituânia", "Letônia"],
    
    // Países da Ásia Central (todos muito desconhecidos)
    ["Cazaquistão", "Quirguistão", "Uzbequistão"],
    ["Quirguistão", "Tadjiquistão", "Turcomenistão"],
    ["Turcomenistão", "Uzbequistão", "Cazaquistão"],
    ["Uzbequistão", "Quirguistão", "Tadjiquistão"],
    
    // Sudeste Asiático
    ["Laos", "Camboja", "Mianmar"],
    ["Camboja", "Mianmar", "Bangladesh"],
    ["Mianmar", "Bangladesh", "Nepal"],
    ["Nepal", "Butão", "Bangladesh"],
    
    // Cáucaso
    ["Azerbaijão", "Geórgia", "Armênia"],
    ["Geórgia", "Armênia", "Azerbaijão"],
    ["Armênia", "Azerbaijão", "Geórgia"],
    
    // Países Eslavos
    ["Ucrânia", "Bielorrússia", "Moldávia"],
    ["Bielorrússia", "Moldávia", "Ucrânia"],
    ["Polônia", "Hungria", "República Tcheca"],
    
    // Europa Ocidental/Central 
    ["Holanda", "Romênia", "Bulgária"],
    ["Áustria", "Suíça", "Dinamarca"],
    ["Bélgica", "Romênia", "Bulgária"],
    
    // Nórdicos
    ["Noruega", "Suécia", "Dinamarca"],
    ["Finlândia", "Noruega", "Suécia"],
    ["Islândia", "Noruega", "Finlândia"],
    ["Dinamarca", "Suécia", "Islândia"]
];

// Variáveis do jogo
let currentRound = 0;
let score = 0;
let correctAnswers = 0;
let timer = 10; // TEMPO DE RODADA
let timerInterval = null;
let selectedCountries = [];
let currentQuestion = null;

// Função para embaralhar array
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Função para selecionar países aleatórios
function selectRandomCountries() {
    const shuffled = shuffle(countries);
    return shuffled.slice(0, 15); // MINHAS RODADAS
}

// Função para gerar opções de resposta
function generateOptions(correctCountry) {
    let options = [correctCountry];
    
    // Tenta encontrar um grupo similar
    let similarGroup = similarGroups.find(group => group.includes(correctCountry.name));
    
    if (similarGroup) {
        // Usa países do grupo similar
        const otherCountries = similarGroup
            .filter(name => name !== correctCountry.name)
            .map(name => countries.find(c => c.name === name))
            .filter(c => c !== undefined);
        
        options.push(...otherCountries.slice(0, 2));
    }
    
    // Se não tiver opções suficientes, adiciona países aleatórios da mesma dificuldade
    while (options.length < 3) {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        if (!options.includes(randomCountry) && randomCountry !== correctCountry) {
            options.push(randomCountry);
        }
    }
    
    return shuffle(options.slice(0, 3));
}

// Função para iniciar o jogo
function startGame() {
    currentRound = 0;
    score = 0;
    correctAnswers = 0;
    selectedCountries = selectRandomCountries();
    
    showScreen('gameScreen');
    nextRound();
}

// Função para mostrar tela
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Função para próxima rodada
function nextRound() {
    if (currentRound >= 15) { // AUMENTADO DE 10 PARA 15
        endGame();
        return;
    }
    
    currentRound++;
    currentQuestion = selectedCountries[currentRound - 1];
    
    // Atualizar UI
    document.getElementById('roundNumber').textContent = `${currentRound}/15`; // ATUALIZADO
    document.getElementById('score').textContent = score;
    
    // Carregar bandeira
    const flagUrl = `https://flagcdn.com/w640/${currentQuestion.code}.png`;
    document.getElementById('flagImage').src = flagUrl;
    
    // Gerar opções
    const options = generateOptions(currentQuestion);
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    options.forEach(country => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = country.name;
        button.onclick = () => selectAnswer(country, button);
        optionsContainer.appendChild(button);
    });
    
    // Iniciar timer
    startTimer();
}

// Função para iniciar o timer
function startTimer() {
    timer = 10; // REDUZIDO DE 15s PARA 10s
    document.getElementById('timer').textContent = `${timer}s`;
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = `${timer}s`;
        
        if (timer <= 0) {
            clearInterval(timerInterval);
            selectAnswer(null, null); // Tempo esgotado
        }
    }, 1000);
}

// Função para selecionar resposta
function selectAnswer(selectedCountry, button) {
    clearInterval(timerInterval);
    
    // Desabilitar todos os botões
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedCountry && selectedCountry.name === currentQuestion.name;
    
    if (isCorrect) {
        correctAnswers++;
        const basePoints = 100;
        const timeBonus = Math.floor(timer * 10); // AUMENTADO DE 5 PARA 10 pontos/segundo
        const roundScore = basePoints + timeBonus;
        score += roundScore;
        
        if (button) button.classList.add('correct');
        showFeedback(true, `+${roundScore} pontos!`);
    } else {
        if (button) button.classList.add('wrong');
        
        // Mostrar resposta correta
        allButtons.forEach(btn => {
            if (btn.textContent === currentQuestion.name) {
                btn.classList.add('correct');
            }
        });
        
        showFeedback(false, `Correto: ${currentQuestion.name}`);
    }
    
    // Atualizar pontuação
    document.getElementById('score').textContent = score;
    
    // Próxima rodada após 2 segundos
    setTimeout(() => {
        nextRound();
    }, 2000);
}

// Função para mostrar feedback
function showFeedback(isCorrect, message) {
    const feedback = document.getElementById('answerFeedback');
    const icon = document.getElementById('feedbackIcon');
    const text = document.getElementById('feedbackText');
    
    feedback.className = 'answer-feedback';
    
    if (isCorrect) {
        feedback.classList.add('correct');
        icon.textContent = '✓';
    } else {
        feedback.classList.add('wrong');
        icon.textContent = '✗';
    }
    
    text.textContent = message;
    feedback.classList.add('show');
    
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 1800);
}

// Função para finalizar o jogo
function endGame() {
    clearInterval(timerInterval);
    
    const accuracy = Math.round((correctAnswers / 15) * 100); // ATUALIZADO DE 10 PARA 15
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    
    // Definir ícone e título baseado na performance
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    
    if (accuracy >= 80) {
        resultIcon.textContent = '🏆';
        resultTitle.textContent = 'LENDÁRIO!';
    } else if (accuracy >= 60) {
        resultIcon.textContent = '🎉';
        resultTitle.textContent = 'Excelente!';
    } else if (accuracy >= 40) {
        resultIcon.textContent = '👍';
        resultTitle.textContent = 'Bom Trabalho!';
    } else if (accuracy >= 20) {
        resultIcon.textContent = '📚';
        resultTitle.textContent = 'Continue Estudando!';
    } else {
        resultIcon.textContent = '💪';
        resultTitle.textContent = 'Tente Novamente!';
    }
    
    showScreen('resultScreen');
}

// Função para reiniciar o jogo
function restartGame() {
    showScreen('startScreen');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    showScreen('startScreen');
});
