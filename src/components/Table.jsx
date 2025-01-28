export default function Table(props) {
    const teamsArray = []
    //format new array from props.data
    props.data.response.forEach((el) => {
        teamsArray.push({
            id: el.team.id,
            logo: el.team.logo,
            name: el.team.name,
            wins: el.win.total,
            losses: el.loss.total,
            winPercentage: el.win.percentage.replace(/^0/, ""),
            points: (el.win.total - el.loss.total)
        })
    })

    //sort in order of wins minus losses
    teamsArray.sort(function(a, b) {
        return (b.points - a.points)
    })

    //games behind formula based off first place points
    const highestPoints = teamsArray[0].points
    const gamesBehind = (points) => {
        return (highestPoints - points) / 2
    }
   
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th className="team-heading">Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>GB</th>
                    </tr>
                </thead>
                <tbody>
                    {teamsArray.map((team) => (
                        <tr key={team.id}>
                            <td>{teamsArray.indexOf(team) + 1}</td>
                            <td><img src={team.logo} alt="logo" className="team-logo"/></td>
                            <td>{team.name}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                            <td>{team.winPercentage}</td>
                            <td>{gamesBehind(team.points)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}