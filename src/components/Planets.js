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
        </div>
    )
}
