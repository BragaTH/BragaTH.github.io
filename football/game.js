/**
 * Jogo dos Times — quiz de escudos (HTML/CSS/JS puro).
 * Constantes de partida e pontuação alinhadas ao jogo de bandeiras.
 */
const ROUNDS_PER_GAME = 15;
const SECONDS_PER_ROUND = 30;
const BASE_POINTS = 100;
const POINTS_PER_SECOND_LEFT = 10;
const ROUND_GAP_MS = 800;
const CREST_BLUR_MAX = 12;
const RELAXED_CREST_REVEAL_SEC = 10;
const CREST_IMG_DROP_SHADOW = "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.18))";

/** Rótulo da liga de origem de cada time (campo `league` em TEAMS). */
const LEAGUE_LABEL_BY_ID = {
    premier: "Premier League",
    laliga: "La Liga",
    seriea: "Serie A (ITA)",
    bundesliga: "Bundesliga",
    ligue1: "Ligue 1",
    brasileirao: "Série A Brasil",
    extras: "Extras (NL + UA)"
};

const SESSION_MODE_LABEL = "Todas as ligas";

/**
 * Escudos em PNG estáveis (CDN TheSportsDB — strBadge).
 * league: chave em LEAGUE_LABEL_BY_ID.
 */
const TEAMS = [
    // Premier League
    { name: "Manchester City", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png" },
    { name: "Liverpool", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/kfaher1737969724.png" },
    { name: "Arsenal", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png" },
    { name: "Chelsea", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png" },
    { name: "Manchester United", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png" },
    { name: "Tottenham", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/dfyfhl1604094109.png" },
    { name: "Newcastle", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/lhwuiz1621593302.png" },
    { name: "Aston Villa", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/jykrpv1717309891.png" },
    { name: "West Ham", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/yutyxs1467459956.png" },
    { name: "Brighton", country: "Inglaterra", league: "premier", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/ywypts1448810904.png" },
    // La Liga
    { name: "Real Madrid", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vwvwrw1473502969.png" },
    { name: "Barcelona", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/wq9sir1639406443.png" },
    { name: "Atletico Madrid", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/0ulh3q1719984315.png" },
    { name: "Sevilla", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vpsqqx1473502977.png" },
    { name: "Real Sociedad", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vptvpr1473502986.png" },
    { name: "Villarreal", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vrypqy1473503073.png" },
    { name: "Athletic Club", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/68w7fe1639408210.png" },
    { name: "Valencia", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/dm8l6o1655594864.png" },
    { name: "Betis", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/2oqulv1663245386.png" },
    { name: "Osasuna", country: "Espanha", league: "laliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/rvspvt1473502960.png" },
    // Serie A
    { name: "Juventus", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/uxf0gr1742983727.png" },
    { name: "Inter Milan", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/ryhu6d1617113103.png" },
    { name: "AC Milan", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/wvspur1448806617.png" },
    { name: "Napoli", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/l8qyxv1742982541.png" },
    { name: "Roma", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/jwro2s1760820674.png" },
    { name: "Lazio", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/rwqyvs1448806608.png" },
    { name: "Atalanta", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/lrvxg71534873930.png" },
    { name: "Fiorentina", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/hc8nhu1656098030.png" },
    { name: "Torino", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/xxprty1448806802.png" },
    { name: "Bologna", country: "Itália", league: "seriea", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/2qi1u31655592366.png" },
    // Bundesliga
    { name: "Bayern Munich", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/01ogkh1716960412.png" },
    { name: "Borussia Dortmund", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/tqo8ge1716960353.png" },
    { name: "RB Leipzig", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/zjgapo1594244951.png" },
    { name: "Bayer Leverkusen", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/3x9k851726760113.png" },
    { name: "Eintracht Frankfurt", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/rurwpy1473453269.png" },
    { name: "Wolfsburg", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/07kp421599680274.png" },
    { name: "Freiburg", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/urwtup1473453288.png" },
    { name: "Union Berlin", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/q0o5001599679795.png" },
    { name: "Hoffenheim", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/9hwvb21621593919.png" },
    { name: "Mainz", country: "Alemanha", league: "bundesliga", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/fhm9v51552134916.png" },
    // Ligue 1
    { name: "Paris Saint-Germain", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/rwqrrq1473504808.png" },
    { name: "Olympique de Marseille", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/uutsyt1473504764.png" },
    { name: "Olympique Lyonnais", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/blk9771656932845.png" },
    { name: "Monaco", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/exjf5l1678808044.png" },
    { name: "Lille", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/2giize1534005340.png" },
    { name: "Nice", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/msy7ly1621593859.png" },
    { name: "Rennes", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/ypturx1473504818.png" },
    { name: "Lens", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/3pxoum1598797195.png" },
    { name: "Strasbourg", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/b8k77w1766625501.png" },
    { name: "Nantes", country: "França", league: "ligue1", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/mla9x61678808018.png" },
    // Série A Brasil
    { name: "Flamengo", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/syptwx1473538074.png" },
    { name: "Corinthians", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vvuvps1473538042.png" },
    { name: "Palmeiras", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vsqwqp1473538105.png" },
    { name: "São Paulo", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/sxpupx1473538135.png" },
    { name: "Santos", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/j8xk9g1679447486.png" },
    { name: "Grêmio", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/uvpwyt1473538089.png" },
    { name: "Internacional", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/yprvxx1473538097.png" },
    { name: "Atletico Mineiro", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/x5lixs1743742872.png" },
    { name: "Cruzeiro", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/upsvvu1473538059.png" },
    { name: "Botafogo", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/bs5mbw1733004596.png" },
    { name: "Fluminense", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/stvvwp1473538082.png" },
    { name: "Vasco", country: "Brasil", league: "brasileirao", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/ynqlxo1630521109.png" },
    // Extras (Holanda + Ucrânia)
    { name: "Ajax", country: "Holanda", league: "extras", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/zg9tii1755495289.png" },
    { name: "PSV Eindhoven", country: "Holanda", league: "extras", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/xfsz6i1721297428.png" },
    { name: "Feyenoord", country: "Holanda", league: "extras", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/uturtx1473534803.png" },
    { name: "AZ Alkmaar", country: "Holanda", league: "extras", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/wtqwvv1473534757.png" },
    { name: "Dynamo Kyiv", country: "Ucrânia", league: "extras", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/stxrpx1447696362.png" },
    { name: "Shakhtar Donetsk", country: "Ucrânia", league: "extras", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/sqrxsr1421791799.png" },
    // Liga Portugal
    { name: "Benfica", country: "Portugal", league: "Liga Portugal", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/0pywy21662316682.png" },
    { name: "Porto", country: "Portugal", league: "Liga Portugal", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/xu47rb1628855600.png" },
    { name: "Sporting CP", country: "Portugal", league: "Liga Portugal", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/ohj6ih1628855978.png" },
    // Scottish Premiership
    { name: "Celtic", country: "Escócia", league: "Scottish Premiership", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/3uv1641758780002.png" },
    { name: "Rangers", country: "Escócia", league: "Scottish Premiership", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/ti24j61614290048.png" },
    // Süper Lig
    { name: "Galatasaray", country: "Turquia", league: "Süper Lig", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/io7jk21767941298.png" },
    { name: "Fenerbahçe", country: "Turquia", league: "Süper Lig", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/twxxvs1448199691.png" },
    { name: "Besiktas", country: "Turquia", league: "Süper Lig", crestUrl: "https://www.thesportsdb.com/images/media/team/badge/svo05k1776827439.png" },
    // Pro League (Bélgica)
    { name: "Anderlecht", country: "Bélgica", league: "Pro League", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/auindn1771129464.png" },
    // Bundesliga Áustria
    { name: "Red Bull Salzburg", country: "Áustria", league: "Bundesliga Áustria", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/xy1m6m1576416143.png" },
    // Liga Profesional Argentina
    { name: "River Plate", country: "Argentina", league: "Liga Profesional", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/03dmi31645539717.png" },
    { name: "Boca Juniors", country: "Argentina", league: "Liga Profesional", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/bm7krb1775741582.png" },
    { name: "Racing Club", country: "Argentina", league: "Liga Profesional", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/vi4mu41695734959.png" },
    // Primera División Uruguai
    { name: "Peñarol", country: "Uruguai", league: "Primera División", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/uuwpux1473541171.png" },
    { name: "Nacional", country: "Uruguai", league: "Primera División", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/fvg3s21649793329.png" },
    // Primera División Chile
    { name: "Colo-Colo", country: "Chile", league: "Primera División", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/s41be31578347962.png" },
    // LigaPro Equador
    { name: "Liga de Quito", country: "Equador", league: "LigaPro", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/5tf5ch1736404372.png" },
    // Liga MX
    { name: "Club América", country: "México", league: "Liga MX", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/amy1xs1581857392.png" },
    { name: "Cruz Azul", country: "México", league: "Liga MX", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/cf4ozx1655760184.png" },
    { name: "Pumas UNAM", country: "México", league: "Liga MX", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/o01nvl1695734937.png" },
    // Saudi Pro League
    { name: "Al-Hilal", country: "Arábia Saudita", league: "Saudi Pro League", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/w0b80d1661656916.png" },
    { name: "Al-Nassr", country: "Arábia Saudita", league: "Saudi Pro League", crestUrl: "https://r2.thesportsdb.com/images/media/team/badge/84yvqi1748524565.png" }
];

let roundIndex = 0;
let score = 0;
let correctAnswers = 0;
let secondsLeft = SECONDS_PER_ROUND;
let tickId = null;
let relaxedRun = false;
let awaitingRoundAdvance = false;
let advanceTimerId = null;
let crestLoadGeneration = 0;
let roundsThisGame = ROUNDS_PER_GAME;
let poolThisGame = [];
let answerTeam = null;
let sessionLeagueId = "all";
let sessionLeagueLabel = "Todas as ligas";
let rafTimerId = null;
let relaxedBlurRafId = null;
let relaxedRevealStartTs = 0;

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getTeamPool(leagueId) {
    if (leagueId === "all") return TEAMS.slice();
    return TEAMS.filter((t) => t.league === leagueId);
}

function leagueLabelForId(id) {
    return LEAGUE_LABEL_BY_ID[id] || id;
}

function buildRoundQueue(pool, totalRounds) {
    if (pool.length === 0) return [];
    const out = [];
    while (out.length < totalRounds) {
        out.push(...shuffle(pool));
    }
    return shuffle(out.slice(0, totalRounds));
}

function initStartScreenModeCopy() {
    const hint = document.getElementById("leagueModeHint");
    if (!hint) return;
    const n = TEAMS.length;
    hint.textContent = `${n} times em todas as ligas.`;
}

function generateFourOptions(correct) {
    const pool = getTeamPool(sessionLeagueId);
    let distractorSource = pool.filter((t) => t.name !== correct.name);
    if (distractorSource.length < 3) {
        distractorSource = TEAMS.filter((t) => t.name !== correct.name);
    }
    const wrong = shuffle(distractorSource).slice(0, 3);
    return shuffle([correct, ...wrong]);
}

function clearTick() {
    if (tickId !== null) {
        clearInterval(tickId);
        tickId = null;
    }
    if (rafTimerId !== null) {
        cancelAnimationFrame(rafTimerId);
        rafTimerId = null;
    }
    if (relaxedBlurRafId !== null) {
        cancelAnimationFrame(relaxedBlurRafId);
        relaxedBlurRafId = null;
    }
}

function applyCrestBlurPx(blurPx, withTransition) {
    const img = document.getElementById("crestImage");
    const ph = document.getElementById("crestPlaceholder");
    const tr = withTransition ? "filter 0.3s ease" : "none";
    if (img) {
        img.style.transition = tr;
        img.style.filter = `${CREST_IMG_DROP_SHADOW} blur(${blurPx}px)`;
    }
    if (ph) {
        ph.style.transition = tr;
        ph.style.filter = `blur(${blurPx}px)`;
    }
}

function resetCrestBlurHard() {
    applyCrestBlurPx(CREST_BLUR_MAX, false);
}

function revealCrestInstantly() {
    if (relaxedBlurRafId !== null) {
        cancelAnimationFrame(relaxedBlurRafId);
        relaxedBlurRafId = null;
    }
    applyCrestBlurPx(0, true);
    window.setTimeout(() => {
        const img = document.getElementById("crestImage");
        const ph = document.getElementById("crestPlaceholder");
        if (img) img.style.transition = "none";
        if (ph) ph.style.transition = "none";
    }, 320);
}

function startRelaxedCrestRevealLoop() {
    if (!relaxedRun || awaitingRoundAdvance) return;
    if (relaxedBlurRafId !== null) {
        cancelAnimationFrame(relaxedBlurRafId);
        relaxedBlurRafId = null;
    }
    relaxedRevealStartTs = performance.now();
    const loop = () => {
        if (!relaxedRun || awaitingRoundAdvance) {
            relaxedBlurRafId = null;
            return;
        }
        const elapsed = (performance.now() - relaxedRevealStartTs) / 1000;
        const blur = Math.max(0, CREST_BLUR_MAX * (1 - Math.min(1, elapsed / RELAXED_CREST_REVEAL_SEC)));
        applyCrestBlurPx(blur, false);
        if (elapsed < RELAXED_CREST_REVEAL_SEC) {
            relaxedBlurRafId = requestAnimationFrame(loop);
        } else {
            relaxedBlurRafId = null;
        }
    };
    relaxedBlurRafId = requestAnimationFrame(loop);
}

function syncCrestBlurWhenCrestVisible() {
    if (awaitingRoundAdvance) return;
    applyCrestBlurPx(CREST_BLUR_MAX, false);
    if (relaxedRun) {
        startRelaxedCrestRevealLoop();
    }
}

function clearAdvanceTimer() {
    if (advanceTimerId !== null) {
        clearTimeout(advanceTimerId);
        advanceTimerId = null;
    }
}

function setTimeBarProgress(ratio) {
    const fill = document.getElementById("timeBarFill");
    const wrap = document.getElementById("timeBarWrap");
    if (!fill || !wrap) return;
    const r = Math.max(0, Math.min(1, ratio));
    fill.style.transform = `scaleX(${r})`;
}

function hashStringToHsl(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    const hue = Math.abs(h) % 360;
    return `hsl(${hue}, 58%, 40%)`;
}

function teamInitials(name) {
    const cleaned = name.trim().replace(/\s+/g, " ");
    const parts = cleaned.split(" ");
    if (parts.length >= 2) {
        const a = parts[0].charAt(0);
        const b = parts[parts.length - 1].charAt(0);
        return (a + b).toUpperCase();
    }
    return cleaned.slice(0, 2).toUpperCase();
}

function escapeXmlText(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildCrestPlaceholderSvg(teamName) {
    const fill = hashStringToHsl(teamName);
    const initials = escapeXmlText(teamInitials(teamName));
    return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" rx="12" fill="${fill}"/><text x="100" y="122" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="72" fill="rgba(255,255,255,0.92)">${initials}</text></svg>`;
}

function preloadCrestImage(url) {
    return new Promise((resolve, reject) => {
        const probe = new Image();
        probe.onload = () => resolve();
        probe.onerror = () => reject(new Error("preload"));
        probe.src = url;
    });
}

function beginCrestLoad(team) {
    const wrap = document.getElementById("crestWrap");
    const loader = document.getElementById("crestLoader");
    const img = document.getElementById("crestImage");
    const placeholder = document.getElementById("crestPlaceholder");
    const meta = document.getElementById("crestMeta");
    const generation = ++crestLoadGeneration;
    const url = team.crestUrl;
    const teamName = team.name;

    if (!wrap || !loader || !img || !placeholder) return;

    if (meta && answerTeam) {
        meta.textContent = `${answerTeam.leagueName} · ${answerTeam.country}`;
    }

    wrap.classList.add("is-loading");
    loader.hidden = false;
    loader.textContent = "Carregando escudo…";
    img.hidden = true;
    img.style.display = "";
    img.removeAttribute("src");
    placeholder.innerHTML = buildCrestPlaceholderSvg(teamName);
    placeholder.style.display = "none";

    const finishWithImage = () => {
        if (generation !== crestLoadGeneration) return;
        img.src = url;
        img.hidden = false;
        placeholder.style.display = "none";
        loader.hidden = true;
        wrap.classList.remove("is-loading");
        syncCrestBlurWhenCrestVisible();
    };

    const finishWithPlaceholder = () => {
        if (generation !== crestLoadGeneration) return;
        img.removeAttribute("src");
        img.hidden = true;
        img.style.display = "none";
        placeholder.style.display = "flex";
        loader.hidden = true;
        wrap.classList.remove("is-loading");
        syncCrestBlurWhenCrestVisible();
    };

    preloadCrestImage(url)
        .then(() => {
            if (generation !== crestLoadGeneration) return;
            finishWithImage();
        })
        .catch(() => {
            if (generation !== crestLoadGeneration) return;
            finishWithPlaceholder();
        });
}

function applyTimerUi() {
    const timerStat = document.getElementById("timerStat");
    const timerEl = document.getElementById("timer");
    const barWrap = document.getElementById("timeBarWrap");
    if (!timerStat || !timerEl) return;
    if (relaxedRun) {
        timerStat.querySelector(".stat-label").textContent = "Tempo";
        timerEl.textContent = "Livre";
        if (barWrap) {
            barWrap.classList.add("is-hidden");
        }
        return;
    }
    if (barWrap) barWrap.classList.remove("is-hidden");
    timerEl.textContent = `${secondsLeft}s`;
    setTimeBarProgress(secondsLeft / SECONDS_PER_ROUND);
}

function startGame() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;

    sessionLeagueId = "all";
    sessionLeagueLabel = SESSION_MODE_LABEL;
    relaxedRun = document.getElementById("relaxedMode").checked;

    const pool = getTeamPool(sessionLeagueId);
    if (pool.length < 4) {
        window.alert("Esta liga tem poucos times para montar quatro opções. Escolha outra liga.");
        return;
    }

    roundsThisGame = ROUNDS_PER_GAME;
    poolThisGame = buildRoundQueue(pool, roundsThisGame);

    roundIndex = 0;
    score = 0;
    correctAnswers = 0;

    showScreen("gameScreen");
    nextRound();
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
    const raw = poolThisGame[roundIndex - 1];
    const leagueName = leagueLabelForId(raw.league);
    answerTeam = { ...raw, leagueName };

    document.getElementById("roundNumber").textContent = `${roundIndex}/${roundsThisGame}`;
    document.getElementById("score").textContent = score;

    resetCrestBlurHard();
    beginCrestLoad(answerTeam);

    const choices = generateFourOptions(answerTeam);
    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";
    choices.forEach((team) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.textContent = team.name;
        btn.addEventListener("click", () => selectAnswer(team, btn));
        container.appendChild(btn);
    });

    if (relaxedRun) {
        secondsLeft = 0;
        applyTimerUi();
    } else {
        startTimer();
    }
}

function startTimer() {
    secondsLeft = SECONDS_PER_ROUND;
    const roundStartTs = performance.now();
    applyTimerUi();

    const tick = () => {
        const elapsed = (performance.now() - roundStartTs) / 1000;
        const left = Math.max(0, SECONDS_PER_ROUND - elapsed);
        secondsLeft = Math.ceil(left);
        document.getElementById("timer").textContent = `${secondsLeft}s`;
        setTimeBarProgress(left / SECONDS_PER_ROUND);

        if (left <= 0) {
            clearTick();
            selectAnswer(null, null);
            return;
        }
        rafTimerId = requestAnimationFrame(tick);
    };
    rafTimerId = requestAnimationFrame(tick);
}

function selectAnswer(guess, clickedBtn) {
    if (awaitingRoundAdvance) return;
    awaitingRoundAdvance = true;
    revealCrestInstantly();
    clearTick();

    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((btn) => {
        btn.disabled = true;
    });

    const hit = guess && guess.name === answerTeam.name;

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
            if (btn.textContent === answerTeam.name) {
                btn.classList.add("correct");
            }
        });
        showFeedback(false, `Correto: ${answerTeam.name}`);
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

    setTimeout(() => panel.classList.remove("show"), 1600);
}

function animateScoreTo(target, durationMs) {
    const el = document.getElementById("finalScore");
    const start = performance.now();
    const from = 0;
    const dur = durationMs;
    const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - (1 - t) * (1 - t);
        el.textContent = String(Math.round(from + (target - from) * eased));
        if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

function endGame() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;

    const precisionPct =
        roundsThisGame > 0 ? Math.round((correctAnswers / roundsThisGame) * 100) : 0;

    document.getElementById("finalScore").textContent = "0";
    document.getElementById("correctRatio").textContent = `${correctAnswers}/${roundsThisGame}`;
    document.getElementById("accuracy").textContent = `${precisionPct}%`;
    document.getElementById("resultLeague").textContent = `Liga: ${sessionLeagueLabel}`;

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
        headline.textContent = "Continue treinando!";
    } else {
        badge.textContent = "D";
        headline.textContent = "Tente de novo!";
    }

    showScreen("resultScreen");
    animateScoreTo(score, 900);
}

function restartSameLeague() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;
    startGame();
}

function goToLeagueSelect() {
    clearTick();
    clearAdvanceTimer();
    awaitingRoundAdvance = false;
    showScreen("startScreen");
}

document.addEventListener("DOMContentLoaded", () => {
    initStartScreenModeCopy();
    document.getElementById("btnStart").addEventListener("click", startGame);
    document.getElementById("btnRestart").addEventListener("click", restartSameLeague);
    document.getElementById("btnChangeLeague").addEventListener("click", goToLeagueSelect);

    document.getElementById("roundNumber").textContent = `0/${ROUNDS_PER_GAME}`;
    showScreen("startScreen");
});
