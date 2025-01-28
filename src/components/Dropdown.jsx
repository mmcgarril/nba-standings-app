export default function Dropdown(props) {
    const currentYear = props.currentYear
    const setSelectedYear = props.setSelectedYear

    const numOfSeasons = 6

    //format year to season (yyyy-yyyy)
    const yearToSeason = (year) => {
        return year.toString() + '-' + (year + 1).toString()
    }

    let yearsArray = []
    //add a season by minus 1 each iteration
    for (let i = 0; i < numOfSeasons; i++) {
        yearsArray.push(currentYear - i)
    }

    const handleChange = (e) => {
        setSelectedYear(e.target.value)
    }

    return (
        <>
            <label className="year-label">Year:</label>
            <select id="years" onChange={handleChange} >
                {yearsArray.map((year, i) => (
                    <option key={i} value={year}>{yearToSeason(year)}</option>
                ))}
            </select>
        </>
    )
}