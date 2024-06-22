export function People()
{
    const peoples = [
        {id: 1, name: 'John' },
        {id: 2, name: 'Cena' },
        {id: 3, name: 'Randy' },
        {id: 4, name: 'Ortan' },
        {id: 5, name: 'Jiri' },
        {id: 6, name: 'Jonas' },
        {id: 7, name: 'Jamal' }
    ]

    return <>
        <h2>People</h2>
        <ul>
            {peoples.map((people)=> <li key={people.id}>{people.name}</li>)}
        </ul>
    </>
}