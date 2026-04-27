const ROUNDS_PER_GAME = 15;
const SECONDS_PER_ROUND = 30;
const BASE_POINTS = 100;
const POINTS_PER_SECOND_LEFT = 10;
const STORAGE_KEY = "flagGameBestV1";
const ROUND_GAP_MS = 2000;

const DIFFICULTY_LABEL = { easy: "Fácil", medium: "Médio", hard: "Difícil" };

const countries = [
    { name: "Brasil", code: "br", difficulty: "easy" },
    { name: "Estados Unidos", code: "us", difficulty: "easy" },
    { name: "Japão", code: "jp", difficulty: "easy" },
    { name: "Reino Unido", code: "gb", difficulty: "easy" },
    { name: "China", code: "cn", difficulty: "easy" },
    { name: "França", code: "fr", difficulty: "easy" },
    { name: "Alemanha", code: "de", difficulty: "easy" },
    { name: "Itália", code: "it", difficulty: "easy" },
    { name: "Espanha", code: "es", difficulty: "easy" },
    { name: "México", code: "mx", difficulty: "easy" },
    { name: "Canadá", code: "ca", difficulty: "easy" },
    { name: "Austrália", code: "au", difficulty: "easy" },
    { name: "Coreia do Sul", code: "kr", difficulty: "easy" },
    { name: "Índia", code: "in", difficulty: "easy" },
    { name: "Rússia", code: "ru", difficulty: "easy" },
    { name: "Argentina", code: "ar", difficulty: "easy" },
    { name: "Portugal", code: "pt", difficulty: "easy" },
    { name: "Grécia", code: "gr", difficulty: "easy" },
    { name: "Turquia", code: "tr", difficulty: "easy" },
    { name: "Egito", code: "eg", difficulty: "easy" },
    { name: "África do Sul", code: "za", difficulty: "easy" },
    { name: "Arábia Saudita", code: "sa", difficulty: "easy" },
    { name: "Israel", code: "il", difficulty: "easy" },
    { name: "Chile", code: "cl", difficulty: "easy" },
    { name: "Colômbia", code: "co", difficulty: "easy" },
    { name: "Peru", code: "pe", difficulty: "easy" },
    { name: "Venezuela", code: "ve", difficulty: "easy" },
    { name: "Uruguai", code: "uy", difficulty: "easy" },
    { name: "Paraguai", code: "py", difficulty: "easy" },
    { name: "Holanda", code: "nl", difficulty: "easy" },
    { name: "Suíça", code: "ch", difficulty: "easy" },
    { name: "Bélgica", code: "be", difficulty: "easy" },
    { name: "Irlanda", code: "ie", difficulty: "easy" },
    { name: "Ucrânia", code: "ua", difficulty: "easy" },
    { name: "Emirados Árabes Unidos", code: "ae", difficulty: "easy" },
    { name: "Catar", code: "qa", difficulty: "easy" },

    { name: "Tailândia", code: "th", difficulty: "medium" },
    { name: "Vietnã", code: "vn", difficulty: "medium" },
    { name: "Filipinas", code: "ph", difficulty: "medium" },
    { name: "Indonésia", code: "id", difficulty: "medium" },
    { name: "Nova Zelândia", code: "nz", difficulty: "medium" },
    { name: "Singapura", code: "sg", difficulty: "medium" },
    { name: "Cuba", code: "cu", difficulty: "medium" },
    { name: "Equador", code: "ec", difficulty: "medium" },
    { name: "Bolívia", code: "bo", difficulty: "medium" },
    { name: "Panamá", code: "pa", difficulty: "medium" },
    { name: "Costa Rica", code: "cr", difficulty: "medium" },
    { name: "Jamaica", code: "jm", difficulty: "medium" },
    { name: "República Dominicana", code: "do", difficulty: "medium" },
    { name: "Guatemala", code: "gt", difficulty: "medium" },
    { name: "Honduras", code: "hn", difficulty: "medium" },
    { name: "El Salvador", code: "sv", difficulty: "medium" },
    { name: "Nicarágua", code: "ni", difficulty: "medium" },
    { name: "Nigéria", code: "ng", difficulty: "medium" },
    { name: "Quênia", code: "ke", difficulty: "medium" },
    { name: "Gana", code: "gh", difficulty: "medium" },
    { name: "Senegal", code: "sn", difficulty: "medium" },
    { name: "Marrocos", code: "ma", difficulty: "medium" },
    { name: "Irã", code: "ir", difficulty: "medium" },
    { name: "Iraque", code: "iq", difficulty: "medium" },
    { name: "Paquistão", code: "pk", difficulty: "medium" },
    { name: "Bangladesh", code: "bd", difficulty: "medium" },
    { name: "Sri Lanka", code: "lk", difficulty: "medium" },
    { name: "Malásia", code: "my", difficulty: "medium" },
    { name: "Kuwait", code: "kw", difficulty: "medium" },
    { name: "Omã", code: "om", difficulty: "medium" },
    { name: "Jordânia", code: "jo", difficulty: "medium" },
    { name: "Líbano", code: "lb", difficulty: "medium" },
    { name: "Tunísia", code: "tn", difficulty: "medium" },
    { name: "Argélia", code: "dz", difficulty: "medium" },
    { name: "Noruega", code: "no", difficulty: "medium" },
    { name: "Suécia", code: "se", difficulty: "medium" },
    { name: "Finlândia", code: "fi", difficulty: "medium" },
    { name: "Dinamarca", code: "dk", difficulty: "medium" },
    { name: "Polônia", code: "pl", difficulty: "medium" },
    { name: "Romênia", code: "ro", difficulty: "medium" },
    { name: "Bulgária", code: "bg", difficulty: "medium" },
    { name: "Hungria", code: "hu", difficulty: "medium" },
    { name: "República Tcheca", code: "cz", difficulty: "medium" },
    { name: "Áustria", code: "at", difficulty: "medium" },
    { name: "Croácia", code: "hr", difficulty: "medium" },
    { name: "Sérvia", code: "rs", difficulty: "medium" },
    { name: "Lituânia", code: "lt", difficulty: "medium" },
    { name: "Letônia", code: "lv", difficulty: "medium" },
    { name: "Estônia", code: "ee", difficulty: "medium" },
    { name: "Angola", code: "ao", difficulty: "medium" },
    { name: "Moçambique", code: "mz", difficulty: "medium" },
    { name: "Síria", code: "sy", difficulty: "medium" },
    { name: "Iêmen", code: "ye", difficulty: "medium" },
    { name: "Bahrein", code: "bh", difficulty: "medium" },
    { name: "Mongólia", code: "mn", difficulty: "medium" },
    { name: "Cazaquistão", code: "kz", difficulty: "medium" },

    { name: "Nepal", code: "np", difficulty: "hard" },
    { name: "Afeganistão", code: "af", difficulty: "hard" },
    { name: "Butão", code: "bt", difficulty: "hard" },
    { name: "Mianmar", code: "mm", difficulty: "hard" },
    { name: "Camboja", code: "kh", difficulty: "hard" },
    { name: "Laos", code: "la", difficulty: "hard" },
    { name: "Uzbequistão", code: "uz", difficulty: "hard" },
    { name: "Quirguistão", code: "kg", difficulty: "hard" },
    { name: "Tadjiquistão", code: "tj", difficulty: "hard" },
    { name: "Turcomenistão", code: "tm", difficulty: "hard" },
    { name: "Armênia", code: "am", difficulty: "hard" },
    { name: "Geórgia", code: "ge", difficulty: "hard" },
    { name: "Azerbaijão", code: "az", difficulty: "hard" },
    { name: "Chade", code: "td", difficulty: "hard" },
    { name: "Níger", code: "ne", difficulty: "hard" },
    { name: "Mali", code: "ml", difficulty: "hard" },
    { name: "Burkina Faso", code: "bf", difficulty: "hard" },
    { name: "Guiné", code: "gn", difficulty: "hard" },
    { name: "Serra Leoa", code: "sl", difficulty: "hard" },
    { name: "Libéria", code: "lr", difficulty: "hard" },
    { name: "Togo", code: "tg", difficulty: "hard" },
    { name: "Benim", code: "bj", difficulty: "hard" },
    { name: "Gabão", code: "ga", difficulty: "hard" },
    { name: "República do Congo", code: "cg", difficulty: "hard" },
    { name: "RD Congo", code: "cd", difficulty: "hard" },
    { name: "República Centro-Africana", code: "cf", difficulty: "hard" },
    { name: "Eritreia", code: "er", difficulty: "hard" },
    { name: "Djibuti", code: "dj", difficulty: "hard" },
    { name: "Somália", code: "so", difficulty: "hard" },
    { name: "Sudão", code: "sd", difficulty: "hard" },
    { name: "Sudão do Sul", code: "ss", difficulty: "hard" },
    { name: "Camarões", code: "cm", difficulty: "hard" },
    { name: "Costa do Marfim", code: "ci", difficulty: "hard" },
    { name: "Uganda", code: "ug", difficulty: "hard" },
    { name: "Tanzânia", code: "tz", difficulty: "hard" },
    { name: "Etiópia", code: "et", difficulty: "hard" },
    { name: "Zimbábue", code: "zw", difficulty: "hard" },
    { name: "Botsuana", code: "bw", difficulty: "hard" },
    { name: "Namíbia", code: "na", difficulty: "hard" },
    { name: "Ruanda", code: "rw", difficulty: "hard" },
    { name: "Mauritânia", code: "mr", difficulty: "hard" },
    { name: "Gâmbia", code: "gm", difficulty: "hard" },
    { name: "Guiné-Bissau", code: "gw", difficulty: "hard" },
    { name: "Guiné Equatorial", code: "gq", difficulty: "hard" },
    { name: "São Tomé e Príncipe", code: "st", difficulty: "hard" },
    { name: "Lesoto", code: "ls", difficulty: "hard" },
    { name: "Essuatíni", code: "sz", difficulty: "hard" },
    { name: "Malawi", code: "mw", difficulty: "hard" },
    { name: "Zâmbia", code: "zm", difficulty: "hard" },
    { name: "Burundi", code: "bi", difficulty: "hard" },
    { name: "Madagascar", code: "mg", difficulty: "hard" },
    { name: "Comores", code: "km", difficulty: "hard" },
    { name: "Seicheles", code: "sc", difficulty: "hard" },
    { name: "Maurício", code: "mu", difficulty: "hard" },
    { name: "Papua-Nova Guiné", code: "pg", difficulty: "hard" },
    { name: "Fiji", code: "fj", difficulty: "hard" },
    { name: "Ilhas Salomão", code: "sb", difficulty: "hard" },
    { name: "Vanuatu", code: "vu", difficulty: "hard" },
    { name: "Samoa", code: "ws", difficulty: "hard" },
    { name: "Tonga", code: "to", difficulty: "hard" },
    { name: "Palau", code: "pw", difficulty: "hard" },
    { name: "Micronésia", code: "fm", difficulty: "hard" },
    { name: "Ilhas Marshall", code: "mh", difficulty: "hard" },
    { name: "Kiribati", code: "ki", difficulty: "hard" },
    { name: "Nauru", code: "nr", difficulty: "hard" },
    { name: "Tuvalu", code: "tv", difficulty: "hard" },
    { name: "Liechtenstein", code: "li", difficulty: "hard" },
    { name: "Andorra", code: "ad", difficulty: "hard" },
    { name: "San Marino", code: "sm", difficulty: "hard" },
    { name: "Mônaco", code: "mc", difficulty: "hard" },
    { name: "Vaticano", code: "va", difficulty: "hard" },
    { name: "Malta", code: "mt", difficulty: "hard" },
    { name: "Chipre", code: "cy", difficulty: "hard" },
    { name: "Luxemburgo", code: "lu", difficulty: "hard" },
    { name: "Eslovênia", code: "si", difficulty: "hard" },
    { name: "Eslováquia", code: "sk", difficulty: "hard" },
    { name: "Bósnia e Herzegovina", code: "ba", difficulty: "hard" },
    { name: "Montenegro", code: "me", difficulty: "hard" },
    { name: "Macedônia do Norte", code: "mk", difficulty: "hard" },
    { name: "Albânia", code: "al", difficulty: "hard" },
    { name: "Moldávia", code: "md", difficulty: "hard" },
    { name: "Bielorrússia", code: "by", difficulty: "hard" },
    { name: "Haiti", code: "ht", difficulty: "hard" },
    { name: "Belize", code: "bz", difficulty: "hard" },
    { name: "Suriname", code: "sr", difficulty: "hard" },
    { name: "Guiana", code: "gy", difficulty: "hard" },
    { name: "Guiana Francesa", code: "gf", difficulty: "hard" },
    { name: "Barbados", code: "bb", difficulty: "hard" },
    { name: "Trinidad e Tobago", code: "tt", difficulty: "hard" },
    { name: "Bahamas", code: "bs", difficulty: "hard" },
    { name: "Brunei", code: "bn", difficulty: "hard" },
    { name: "Timor-Leste", code: "tl", difficulty: "hard" }
];

const similarGroups = [
    ["Brasil", "Argentina", "Uruguai"],
    ["Argentina", "Uruguai", "Paraguai"],
    ["Chile", "Peru", "Colômbia"],
    ["Colômbia", "Venezuela", "Peru"],
    ["Holanda", "Bélgica", "Suíça"],
    ["França", "Alemanha", "Itália"],
    ["Reino Unido", "França", "Alemanha"],
    ["México", "Canadá", "Estados Unidos"],
    ["Arábia Saudita", "Emirados Árabes Unidos", "Catar"],
    ["Israel", "Turquia", "Egito"],
    ["China", "Japão", "Coreia do Sul"],
    ["Índia", "China", "Japão"],
    ["Grécia", "Portugal", "Espanha"],
    ["Tailândia", "Vietnã", "Filipinas"],
    ["Indonésia", "Malásia", "Singapura"],
    ["Cuba", "Jamaica", "República Dominicana"],
    ["Panamá", "Costa Rica", "Nicarágua"],
    ["Guatemala", "Honduras", "El Salvador"],
    ["Nigéria", "Gana", "Senegal"],
    ["Marrocos", "Tunísia", "Argélia"],
    ["Irã", "Iraque", "Paquistão"],
    ["Paquistão", "Bangladesh", "Sri Lanka"],
    ["Kuwait", "Omã", "Jordânia"],
    ["Jordânia", "Líbano", "Síria"],
    ["Noruega", "Suécia", "Finlândia"],
    ["Dinamarca", "Polônia", "Romênia"],
    ["Bulgária", "Hungria", "República Tcheca"],
    ["Croácia", "Sérvia", "Hungria"],
    ["Lituânia", "Letônia", "Estônia"],
    ["Angola", "Moçambique", "Quênia"],
    ["Síria", "Iêmen", "Bahrein"],
    ["Mongólia", "Cazaquistão", "Uzbequistão"],
    ["Nepal", "Butão", "Mianmar"],
    ["Laos", "Camboja", "Mianmar"],
    ["Quirguistão", "Tadjiquistão", "Turcomenistão"],
    ["Uzbequistão", "Quirguistão", "Cazaquistão"],
    ["Armênia", "Geórgia", "Azerbaijão"],
    ["Chade", "Níger", "Mali"],
    ["Burkina Faso", "Guiné", "Serra Leoa"],
    ["República do Congo", "RD Congo", "Gabão"],
    ["Sudão", "Sudão do Sul", "Chade"],
    ["Uganda", "Tanzânia", "Ruanda"],
    ["Etiópia", "Eritreia", "Djibuti"],
    ["Zimbábue", "Botsuana", "Namíbia"],
    ["Malawi", "Zâmbia", "Burundi"],
    ["Seicheles", "Comores", "Maurício"],
    ["Micronésia", "Ilhas Marshall", "Palau"],
    ["Kiribati", "Nauru", "Tuvalu"],
    ["Liechtenstein", "Andorra", "San Marino"],
    ["Malta", "Chipre", "Luxemburgo"],
    ["Eslovênia", "Eslováquia", "Bósnia e Herzegovina"],
    ["Montenegro", "Macedônia do Norte", "Albânia"],
    ["Moldávia", "Bielorrússia", "Ucrânia"],
    ["Barbados", "Trinidad e Tobago", "Bahamas"],
    ["Suriname", "Guiana", "Guiana Francesa"],
    ["Brunei", "Timor-Leste", "Indonésia"],
    ["Papua-Nova Guiné", "Fiji", "Ilhas Salomão"]
];

let roundIndex = 0;
let score = 0;
let correctAnswers = 0;
let secondsLeft = SECONDS_PER_ROUND;
let tickId = null;
let poolThisGame = [];
let answerCountry = null;
let relaxedRun = false;
let awaitingRoundAdvance = false;
let advanceTimerId = null;
let flagLoadGeneration = 0;
let roundsThisGame = ROUNDS_PER_GAME;
let sessionDifficulty = "medium";

function emptyBestScores() {
    const z = { easy: 0, medium: 0, hard: 0 };
    return { timed: { ...z }, relaxed: { ...z } };
}

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function loadBestScores() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return emptyBestScores();
        const parsed = JSON.parse(raw);
        if (typeof parsed.timed === "number") {
            const t = Number(parsed.timed) || 0;
            const r = Number(parsed.relaxed) || 0;
            const upgraded = {
                timed: { easy: t, medium: t, hard: t },
                relaxed: { easy: r, medium: r, hard: r }
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(upgraded));
            return upgraded;
        }
        const out = emptyBestScores();
        ["timed", "relaxed"].forEach((mode) => {
            if (parsed[mode] && typeof parsed[mode] === "object") {
                ["easy", "medium", "hard"].forEach((d) => {
                    out[mode][d] = Number(parsed[mode][d]) || 0;
                });
            }
        });
        return out;
    } catch {
        return emptyBestScores();
    }
}

function persistBestIfBeat(relaxed, difficultyTier, finalScore) {
    const modeKey = relaxed ? "relaxed" : "timed";
    const best = loadBestScores();
    if (finalScore <= best[modeKey][difficultyTier]) return false;
    best[modeKey][difficultyTier] = finalScore;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(best));
    return true;
}

function countInDifficulty(tier) {
    return countries.filter((c) => c.difficulty === tier).length;
}

function syncDifficultyHint() {
    const selected = document.querySelector('input[name="difficulty"]:checked');
    const hint = document.getElementById("difficultyHint");
    if (!selected || !hint) return;
    const tier = selected.value;
    const total = countInDifficulty(tier);
    const rounds = Math.min(ROUNDS_PER_GAME, total);
    hint.textContent = `Até ${rounds} rodada${rounds === 1 ? "" : "s"} (${total} país${total === 1 ? "" : "es"} nesta lista).`;
}

function getSelectedDifficulty() {
    const el = document.querySelector('input[name="difficulty"]:checked');
    return el ? el.value : "medium";
}

function pickCountriesForSession(tier) {
    const inTier = countries.filter((c) => c.difficulty === tier);
    const cap = Math.min(ROUNDS_PER_GAME, inTier.length);
    return {
        pool: shuffle(inTier).slice(0, cap),
        roundsThisGame: cap,
        tier
    };
}

function pickDistractor(choices, correctCountry) {
    const tierOnly = countries.filter((c) => c.difficulty === correctCountry.difficulty);
    const candidates = tierOnly.filter((c) => c !== correctCountry && !choices.includes(c));
    if (candidates.length === 0) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
}

function generateOptions(correctCountry) {
    let choices = [correctCountry];

    const cluster = similarGroups.find((names) => names.includes(correctCountry.name));
    if (cluster) {
        const fromCluster = cluster
            .filter((name) => name !== correctCountry.name)
            .map((name) => countries.find((c) => c.name === name))
            .filter((c) => c && c.difficulty === correctCountry.difficulty);
        choices.push(...fromCluster.slice(0, 2));
    }

    let guard = 0;
    while (choices.length < 3 && guard++ < 200) {
        const extra = pickDistractor(choices, correctCountry);
        if (extra) choices.push(extra);
    }

    return shuffle(choices.slice(0, 3));
}

function clearTick() {
    if (tickId !== null) {
        clearInterval(tickId);
        tickId = null;
    }
}

function clearAdvanceTimer() {
    if (advanceTimerId !== null) {
        clearTimeout(advanceTimerId);
        advanceTimerId = null;
    }
}

function preloadNextFlag() {
    if (roundIndex >= roundsThisGame) return;
    const next = poolThisGame[roundIndex];
    if (!next) return;
    const img = new Image();
    img.src = `https://flagcdn.com/w640/${next.code}.png`;
}

function beginFlagLoad(url) {
    const wrap = document.getElementById("flagWrap");
    const loader = document.getElementById("flagLoader");
    const img = document.getElementById("flagImage");
    const generation = ++flagLoadGeneration;

    wrap.classList.add("is-loading");
    loader.hidden = false;
    loader.textContent = "Carregando bandeira…";
    img.hidden = true;
    img.removeAttribute("src");
    img.onload = () => {
        if (generation !== flagLoadGeneration) return;
        img.hidden = false;
        loader.hidden = true;
        wrap.classList.remove("is-loading");
    };
    img.onerror = () => {
        if (generation !== flagLoadGeneration) return;
        loader.textContent = "Não foi possível carregar esta bandeira. Verifique a conexão.";
        img.hidden = true;
        wrap.classList.add("is-loading");
    };
    img.src = url;
}

function applyTimerUi() {
    const timerStat = document.getElementById("timerStat");
    const timerEl = document.getElementById("timer");
    if (relaxedRun) {
        timerStat.querySelector(".stat-label").textContent = "Tempo";
        timerEl.textContent = "Livre";
        return;
    }
    timerEl.textContent = `${secondsLeft}s`;
}

function startGame() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;

    relaxedRun = document.getElementById("relaxedMode").checked;
    const picked = pickCountriesForSession(getSelectedDifficulty());
    sessionDifficulty = picked.tier;
    roundsThisGame = picked.roundsThisGame;
    poolThisGame = picked.pool;

    roundIndex = 0;
    score = 0;
    correctAnswers = 0;

    showScreen("gameScreen");
    nextRound();
}

/** Volta à tela de seleção de modo na raiz (hub). */
function goToHub() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;
    document.getElementById("answerFeedback").classList.remove("show");
    showScreen("hubScreen");
}

function abortToMenu() {
    goToHub();
}

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function nextRound() {
    awaitingRoundAdvance = false;
    clearTick();

    if (roundIndex >= roundsThisGame) {
        endGame();
        return;
    }

    roundIndex++;
    answerCountry = poolThisGame[roundIndex - 1];

    document.getElementById("roundNumber").textContent = `${roundIndex}/${roundsThisGame}`;
    document.getElementById("score").textContent = score;

    beginFlagLoad(`https://flagcdn.com/w640/${answerCountry.code}.png`);

    const choices = generateOptions(answerCountry);
    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";

    choices.forEach((country) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.textContent = country.name;
        btn.addEventListener("click", () => selectAnswer(country, btn));
        container.appendChild(btn);
    });

    if (relaxedRun) {
        secondsLeft = 0;
        applyTimerUi();
    } else {
        startTimer();
    }

    preloadNextFlag();
}

function startTimer() {
    secondsLeft = SECONDS_PER_ROUND;
    applyTimerUi();

    tickId = setInterval(() => {
        secondsLeft--;
        document.getElementById("timer").textContent = `${secondsLeft}s`;

        if (secondsLeft <= 0) {
            clearTick();
            selectAnswer(null, null);
        }
    }, 1000);
}

function selectAnswer(guess, clickedBtn) {
    if (awaitingRoundAdvance) return;
    awaitingRoundAdvance = true;
    clearTick();

    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((btn) => {
        btn.disabled = true;
    });

    const hit = guess && guess.name === answerCountry.name;

    if (hit) {
        correctAnswers++;
        const timeBonus = relaxedRun ? 0 : Math.floor(secondsLeft * POINTS_PER_SECOND_LEFT);
        const gained = BASE_POINTS + timeBonus;
        score += gained;
        if (clickedBtn) clickedBtn.classList.add("correct");
        showFeedback(true, `+${gained} pontos!`);
    } else {
        if (clickedBtn) clickedBtn.classList.add("wrong");
        optionButtons.forEach((btn) => {
            if (btn.textContent === answerCountry.name) {
                btn.classList.add("correct");
            }
        });
        showFeedback(false, `Correto: ${answerCountry.name}`);
    }

    document.getElementById("score").textContent = score;

    clearAdvanceTimer();
    advanceTimerId = setTimeout(() => {
        advanceTimerId = null;
        nextRound();
    }, ROUND_GAP_MS);
}

function showFeedback(wasRight, message) {
    const panel = document.getElementById("answerFeedback");
    const iconEl = document.getElementById("feedbackIcon");
    const msgEl = document.getElementById("feedbackText");

    panel.className = "answer-feedback";
    if (wasRight) {
        panel.classList.add("correct");
        iconEl.textContent = "Certo";
    } else {
        panel.classList.add("wrong");
        iconEl.textContent = "Errado";
    }

    msgEl.textContent = message;
    panel.classList.add("show");

    setTimeout(() => panel.classList.remove("show"), 1800);
}

function endGame() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;

    const precisionPct =
        roundsThisGame > 0 ? Math.round((correctAnswers / roundsThisGame) * 100) : 0;
    const isNewRecord = persistBestIfBeat(relaxedRun, sessionDifficulty, score);

    document.getElementById("finalScore").textContent = score;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("accuracy").textContent = `${precisionPct}%`;

    const banner = document.getElementById("recordBanner");
    const diffLabel = DIFFICULTY_LABEL[sessionDifficulty] || sessionDifficulty;
    if (isNewRecord) {
        banner.textContent = relaxedRun
            ? `Novo recorde em ${diffLabel} (sem tempo)!`
            : `Novo recorde em ${diffLabel} (com tempo)!`;
        banner.hidden = false;
    } else {
        banner.hidden = true;
    }

    const badge = document.getElementById("resultIcon");
    const headline = document.getElementById("resultTitle");

    if (precisionPct >= 80) {
        badge.textContent = "S";
        headline.textContent = "Lendário!";
    } else if (precisionPct >= 60) {
        badge.textContent = "A";
        headline.textContent = "Excelente!";
    } else if (precisionPct >= 40) {
        badge.textContent = "B";
        headline.textContent = "Bom trabalho!";
    } else if (precisionPct >= 20) {
        badge.textContent = "C";
        headline.textContent = "Continue estudando!";
    } else {
        badge.textContent = "D";
        headline.textContent = "Tente de novo!";
    }

    showScreen("resultScreen");
}

function restartGame() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;
    showScreen("startScreen");
}

function syncStaticCopyFromConfig() {
    const maxPerRound = BASE_POINTS + SECONDS_PER_ROUND * POINTS_PER_SECOND_LEFT;
    document.getElementById("infoRounds").textContent = String(ROUNDS_PER_GAME);
    document.getElementById("infoSeconds").textContent = `${SECONDS_PER_ROUND}s`;
    document.getElementById("infoMaxPts").textContent = String(maxPerRound);
    document.getElementById("roundNumber").textContent = `0/${ROUNDS_PER_GAME}`;
}

function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("sw.js").catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
    syncStaticCopyFromConfig();
    syncDifficultyHint();

    document.getElementById("btnStart").addEventListener("click", startGame);
    document.getElementById("btnRestart").addEventListener("click", restartGame);
    document.getElementById("btnBackToMenu").addEventListener("click", abortToMenu);
    const btnResultToHub = document.getElementById("btnResultToHub");
    if (btnResultToHub) btnResultToHub.addEventListener("click", goToHub);

    const hubBtnFlags = document.getElementById("hubBtnFlags");
    if (hubBtnFlags) {
        hubBtnFlags.addEventListener("click", () => {
            showScreen("startScreen");
        });
    }

    const btnFlagsStartToHub = document.getElementById("btnFlagsStartToHub");
    if (btnFlagsStartToHub) btnFlagsStartToHub.addEventListener("click", goToHub);

    document.querySelectorAll('input[name="difficulty"]').forEach((radio) => {
        radio.addEventListener("change", syncDifficultyHint);
    });

    showScreen("hubScreen");
    registerServiceWorker();
});
