import React from 'react';
import { useQuery } from 'react-query';
import { Person } from './Person';

const fetchPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    return res.json();
}

export const People = () => {
    const { data, status } = useQuery('people', fetchPeople, { 
        staleTime: 5000,
        cacheTime: 300000,
        // onSuccess: () => console.log('onSuccess People: ', data)
    });
    console.log(data)

    return (
        <div>
            <h2>People</h2>
            
            { status === 'loading' && (
                <div>Loading people data...</div>
            )}
             { status === 'success' && (
                <div>
                    {data.results.map(person => <Person key={person.name} person={person} />)}
                </div>
            )}
            { status === 'error' && (
                <div>Error fetching people data</div>
            )}
        </div>
    )
}
