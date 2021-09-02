import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Planet } from './Planet'

const fetchPlanets = async (page) => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

export const Planets = () => {
    const [page, setPage] = useState(1);
    const { data, isSuccess, isLoading, isError, error } = useQuery(['planets', page], () => fetchPlanets(page), {
        staleTime: 5000,
        cacheTime: 300000,
        keepPreviousData: true, 
        // onSuccess: () => console.log('onSuccess Planets: ', data)    
    });

    const pageUp = () => {
        setPage(prevPage => Math.min(prevPage + 1, 6))
    };
    const pageDown = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1))
    };

    return (
        <div>
            <h2>Planets</h2>

            {isLoading && (
                <div>Loading planets data...</div>
            )}
            {isSuccess && (
                <div>
                    <button onClick={() => pageDown()} disabled={ page === 1 }>prev</button>
                    <span>{ page }</span>
                    <button onClick={() => pageUp()} disabled={ page === 6 }>next</button>
                    <div>
                        {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                    </div>
                </div>
            )}
            {isError && (
                <div>Error: {error.message}</div>
            )}
        </div>
    )
}
