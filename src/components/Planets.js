import React from 'react';
import { useQuery } from 'react-query';
import { Planet } from './Planet'

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

export const Planets = () => {
    const { data, status } = useQuery('planets', fetchPlanets, { 
        staleTime: 5000, 
        cacheTime: 300000,
        onSuccess: () => console.log('onSuccess fired in useQuery config')    
    });
    console.log(data)

    return (
        <div>
            <h2>Planets</h2>
            
            { status === 'loading' && (
                <div>Loading planets data...</div>
            )}
             { status === 'success' && (
                <div>
                    {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}
            { status === 'error' && (
                <div>Error fetching planets data</div>
            )}
        </div>
    )
}
