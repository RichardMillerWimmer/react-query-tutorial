import React from 'react'

export const NavBar = ( { setPage } ) => {
    return (
        <div>
            <h2>NavBar</h2>
            <button onClick={() => setPage('planets')}>Planets</button>
            <button onClick={() => setPage('people')}>People</button>
        </div>
    )
}


