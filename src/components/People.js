import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Person } from './Person';

const fetchPeople = async (page) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    return res.json();
}

export const People = () => {
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(['people', page], () => fetchPeople(page), {
        staleTime: 5000,
        cacheTime: 300000,
        keepPreviousData: true, 
        // onSuccess: () => console.log('onSuccess People: ', data)
    });

    const pageUp = () => {
        setPage(page + 1)
    };
    const pageDown = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1))
    };

    return (
        <div>
            <h2>People</h2>

            {status === 'loading' && (
                <div>Loading people data...</div>
            )}
            {status === 'success' && (
                <div>
                    <button onClick={() => pageDown()} disabled={page === 1}>prev</button>
                    <span>{ page }</span>
                    <button onClick={() => pageUp()}>next</button>
                    <div>
                        {data.results.map(person => <Person key={person.name} person={person} />)}
                    </div>
                </div>
            )}
            {status === 'error' && (
                <div>Error fetching people data</div>
            )}
        </div>
    )
}
