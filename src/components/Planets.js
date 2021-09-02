import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Planet } from './Planet'

const fetchPlanets = async (page) => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    return res.json();
  }

export const Planets = () => {
    const [ page, setPage ] = useState(1);
    const { data, status } = useQuery(['planets', page],  () => fetchPlanets(page), { 
        // staleTime: 5000, 
        cacheTime: 300000,
        // onSuccess: () => console.log('onSuccess Planets: ', data)    
    });
    
    

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
