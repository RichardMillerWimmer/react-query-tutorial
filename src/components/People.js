import React from 'react';
import { useQuery } from 'react-query';
import { Person } from './Person';

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}

export const People = () => {
    const { data, status } = useQuery('people', fetchPeople);
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
