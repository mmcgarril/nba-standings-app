import './Home.css'

export default function Home() {

    return (
        <>
           <img src='nba-logo.png' alt='nba-logo' className='logo'></img>
            <div className='text-div'>
                <h1 className='title'>NBA Standings</h1>
                <div className='btn-div'>
                    <a href="/standings/east" >EAST</a>
                    <a href="/standings/west" >WEST</a>
                </div>
            </div>
        </>
    )
}