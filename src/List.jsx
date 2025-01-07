

function List() {

    const actionHeroes = [  {id: 1, name: "Arnold Swarzenegger", movies: ["Terminator","Kindergarden Cop"]}, 
                            {id: 2, name: "Silvester Stallone", movies: ["Rambo","Rocky"]}, 
                            {id: 3, name: "Jean Claude van Damme", movies: ["Bloodsport", "Kickboxer"]}, 
                            {id: 4, name: "Chuck Norris", movies:["Missing in Action", "The Delta Force"]}];

    actionHeroes.sort();

    const listItems = actionHeroes.map(actionHero => <li key={actionHero.id}>
                                                        {actionHero.name}: &nbsp;
                                                        {actionHero.movies.map(movie => movie.concat(", "))}</li>)

    return (<ol>{listItems}</ol>);
}

export default List