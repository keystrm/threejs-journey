import {useState, useEffect} from 'react'

export function People()
{
    const [people,setPeople] = useState([
        {id: 1, name: 'John' },
        {id: 2, name: 'Cena' },
        {id: 3, name: 'Randy' },
        {id: 4, name: 'Ortan' },
        {id: 5, name: 'Jiri' },
        {id: 6, name: 'Jonas' },
        {id: 7, name: 'Jamal' }
    ])

    const getPeople = async () =>
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        setPeople(result)
    }
    
    useEffect(() =>
    {
        getPeople()
    }, [])

    return <>
        <h2>People</h2>
        <ul>
            {people.map((person)=> <li key={person.id}>{person.name}</li>)}
        </ul>
    </>
}