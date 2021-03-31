const API_URL = 'https://www.balldontlie.io/api/v1/'

$(() => {
    const playersList = $('.players-list')

    const renderPlayers = (players) => {
        for(var player in players.data) {
            let formattedName = players.data[player].first_name + " " + (players.data[player].last_name)
            playersList.append(`
            <div class="col-4 p-3">
                <div class="card col-12">
                    <div class="card-header bg-primary text-white">
                        <p><strong>Nome:</strong> ${formattedName}</p>
                    </div>
                    <div class="card-body">
                        <p><strong>Time:</strong> <a class="card-link" href="teams.html?id=${players.data[player].team.id}">${players.data[player].team.full_name}</a></p>
                        <p><strong>Posição:</strong> ${players.data[player].position}</p>
                    </div>
                </div>
            </div>
            `)
        }
    }

    const fetchApi = (resource, callback) => {
        $.ajax(`${API_URL}/${resource}`, {
            type: 'GET',
            success: callback,
        })
    }

    fetchApi('players?per_page=36', renderPlayers);
})