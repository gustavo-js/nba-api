const API_URL = 'https://www.balldontlie.io/api/v1/'

$(() => {
    const teamsList = $('.teams-list')

    const renderTeams = (teams) => {
        for(var team in teams.data) {
            teamsList.append(`
            <div class="col-4 p-3">
                <div class="card col-12">
                    <img class="card-img-top" src="img/${teams.data[team].abbreviation}.png" alt="${teams.data[team].full_name}">
                    <div class="card-header bg-primary text-white">
                        <p><strong>Nome:</strong> ${teams.data[team].full_name}</p>
                        <strong>Sigla:</strong> ${teams.data[team].abbreviation}
                    </div>
                    <div class="card-body">
                        <p><strong>Cidade:</strong> ${teams.data[team].city}</p>
                        <p><strong>Divisão:</strong> ${teams.data[team].division}</p>
                    </div>
                </div>
            </div>
            `)
        }
    }

    const renderTeam = (team) => {
        teamsList.append(`
            <div class="card col-12 text-center d-inline">
                <img class="card-img-top" src="img/${team.abbreviation}.png" alt="${team.full_name}">
                <div class="card-header bg-primary text-white">
                    <p><strong>Nome:</strong> ${team.full_name}</p>
                    <strong>Sigla:</strong> ${team.abbreviation}
                </div>
                <div class="card-body">
                        <p><strong>Cidade:</strong> ${team.city}</p>
                        <p><strong>Divisão:</strong> ${team.division}</p>
                </div>
            </div>
        `)
    }

    const fetchApi = (resource, callback) => {
        $.ajax(`${API_URL}/${resource}`, {
            type: 'GET',
            success: callback,
            error: alert
        })
    }

    let param = window.location.search.substring(1);
    if(param){
        debugger;
        fetchApi(`teams/${param.replace("id=", "")}}`, renderTeam);
    }
    else{
        fetchApi('teams', renderTeams);
    }
})