# Script auxiliar: consulta TheSportsDB e imprime name|search|badge (executar uma vez offline).
$ErrorActionPreference = "Stop"
$key = "3"
$rows = @(
    @{ n = "Manchester City"; s = "Manchester City" }
    @{ n = "Liverpool"; s = "Liverpool" }
    @{ n = "Arsenal"; s = "Arsenal" }
    @{ n = "Chelsea"; s = "Chelsea" }
    @{ n = "Manchester United"; s = "Manchester United" }
    @{ n = "Tottenham"; s = "Tottenham Hotspur" }
    @{ n = "Newcastle"; s = "Newcastle United" }
    @{ n = "Aston Villa"; s = "Aston Villa" }
    @{ n = "West Ham"; s = "West Ham United" }
    @{ n = "Brighton"; s = "Brighton and Hove Albion" }
    @{ n = "Real Madrid"; s = "Real Madrid" }
    @{ n = "Barcelona"; s = "Barcelona" }
    @{ n = "Atletico Madrid"; s = "Atletico Madrid" }
    @{ n = "Sevilla"; s = "Sevilla" }
    @{ n = "Real Sociedad"; s = "Real Sociedad" }
    @{ n = "Villarreal"; s = "Villarreal" }
    @{ n = "Athletic Club"; s = "Athletic Bilbao" }
    @{ n = "Valencia"; s = "Valencia" }
    @{ n = "Betis"; s = "Real Betis" }
    @{ n = "Osasuna"; s = "Osasuna" }
    @{ n = "Juventus"; s = "Juventus" }
    @{ n = "Inter Milan"; s = "Inter Milan" }
    @{ n = "AC Milan"; s = "AC Milan" }
    @{ n = "Napoli"; s = "Napoli" }
    @{ n = "Roma"; s = "AS Roma" }
    @{ n = "Lazio"; s = "Lazio" }
    @{ n = "Atalanta"; s = "Atalanta" }
    @{ n = "Fiorentina"; s = "Fiorentina" }
    @{ n = "Torino"; s = "Torino" }
    @{ n = "Bologna"; s = "Bologna" }
    @{ n = "Bayern Munich"; s = "Bayern Munich" }
    @{ n = "Borussia Dortmund"; s = "Borussia Dortmund" }
    @{ n = "RB Leipzig"; s = "RB Leipzig" }
    @{ n = "Bayer Leverkusen"; s = "Bayer Leverkusen" }
    @{ n = "Eintracht Frankfurt"; s = "Eintracht Frankfurt" }
    @{ n = "Wolfsburg"; s = "Wolfsburg" }
    @{ n = "Freiburg"; s = "Freiburg" }
    @{ n = "Union Berlin"; s = "Union Berlin" }
    @{ n = "Hoffenheim"; s = "Hoffenheim" }
    @{ n = "Mainz"; s = "Mainz" }
    @{ n = "Paris Saint-Germain"; s = "Paris Saint-Germain" }
    @{ n = "Olympique de Marseille"; s = "Marseille" }
    @{ n = "Olympique Lyonnais"; s = "Lyon" }
    @{ n = "Monaco"; s = "Monaco" }
    @{ n = "Lille"; s = "Lille" }
    @{ n = "Nice"; s = "Nice" }
    @{ n = "Rennes"; s = "Rennes" }
    @{ n = "Lens"; s = "Lens" }
    @{ n = "Strasbourg"; s = "Strasbourg" }
    @{ n = "Nantes"; s = "Nantes" }
    @{ n = "Flamengo"; s = "Flamengo" }
    @{ n = "Corinthians"; s = "Corinthians" }
    @{ n = "Palmeiras"; s = "Palmeiras" }
    @{ n = "São Paulo"; s = "Sao Paulo" }
    @{ n = "Santos"; s = "Santos" }
    @{ n = "Grêmio"; s = "Gremio" }
    @{ n = "Internacional"; s = "Internacional" }
    @{ n = "Atletico Mineiro"; s = "Atletico Mineiro" }
    @{ n = "Cruzeiro"; s = "Cruzeiro" }
    @{ n = "Botafogo"; s = "Botafogo" }
    @{ n = "Fluminense"; s = "Fluminense" }
    @{ n = "Vasco"; s = "Vasco da Gama" }
    @{ n = "Ajax"; s = "Ajax" }
    @{ n = "PSV Eindhoven"; s = "PSV Eindhoven" }
    @{ n = "Feyenoord"; s = "Feyenoord" }
    @{ n = "AZ Alkmaar"; s = "AZ Alkmaar" }
    @{ n = "Dynamo Kyiv"; s = "Dynamo Kyiv" }
    @{ n = "Shakhtar Donetsk"; s = "Shakhtar Donetsk" }
)
foreach ($r in $rows) {
    $u = "https://www.thesportsdb.com/api/v1/json/$key/searchteams.php?t=$([uri]::EscapeDataString($r.s))"
    $resp = Invoke-RestMethod -Uri $u -Method Get
    $badge = $resp.teams[0].strBadge
    Write-Output "$($r.n)|$($r.s)|$badge"
    Start-Sleep -Milliseconds 350
}
