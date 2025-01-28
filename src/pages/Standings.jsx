import { useEffect, useState } from 'react'
import './Standings.css'
import Header from '../components/Header'
import Dropdown from '../components/Dropdown'
import Table from '../components/Table'

export default function Standings(props) {
    const [ data, setData ] = useState(null)
    const [ currentYear, setCurrentYear ] = useState(2024)
    const [ selectedYear, setSelectedYear ] = useState(2024)
    const conference = props.conference

    useEffect(() => {
        async function fetchAPI() {
            const url = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${selectedYear}&conference=${conference}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_NBA_API_KEY,
                    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
                } 
            };
            try {
                const res = await fetch(url, options)
                const apiData = await res.json()
                console.log(apiData)
                setData(apiData)
            } catch(err) {
                console.log(err)
            }
        }
        fetchAPI()
    }, [selectedYear, conference])

    return (
        <>
            <Header conference={conference}/>
            <Dropdown currentYear={currentYear} selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
            {data && (<Table data={data} currentYear={currentYear} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />)}
        </>
    )
}