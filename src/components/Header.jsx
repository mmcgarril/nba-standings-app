export default function Header(props) {

    return (
        <>
            <div className='heading'>
                <h2 className="standings-heading">{props.conference.toUpperCase()}ERN CONFERENCE STANDINGS</h2>
                <a href='/' className='to-home'>Home</a>
            </div>
        </>
    )
}