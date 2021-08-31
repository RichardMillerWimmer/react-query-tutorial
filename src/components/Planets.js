import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

export const Planets = () => {
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data)

    return (
        <div>
            <h2>Planets</h2>
            
            { status === 'loading' && (
                <div>Loading planets data...</div>
            )}
             { status === 'success' && (
                <div>
                    {data.results.map(planet => {
                        <div>
                            {planet.name}
                        </div>
                    })}
                </div>
            )}
            { status === 'error' && (
                <div>Error fetching planets data</div>
            )}
        </div>
    )
}
