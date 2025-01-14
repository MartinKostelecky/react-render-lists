import PropTypes, { string } from 'prop-types';

function List(props) {

    const category = props.category;

    const itemList = props.items;

    //sorting
    //actionHeroes.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical sort
    //actionHeroes.sort((a,b) => b.name.localeCompare(a.name)); // Reverse alphabetical sort
    //actionHeroes.sort((a,b) => a.name.length - b.name.length); // Numeric ascending sort

    //filtering
    //const actionHeroesWithoutLetterO = actionHeroes.filter(actionHero => !actionHero.name.includes("o"));

    //const actionHeroesWithoutLetterO = actionHeroes.filter(actionHero => !actionHero.movies.includes("Terminator"));

    
    const listItems = itemList.map(item => { 
        const medium = item.movies ? "Movies: " : "Games: "; 
        return ( 
            <li key={item.id}> 
                {item.name} <b>{medium}</b> &nbsp; 
                {(item.movies || item.games).join(", ")} 
            </li> 
        ); 
    });            

    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>
            );

}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                movies: PropTypes.arrayOf(PropTypes.string),
                                                games: PropTypes.arrayOf(PropTypes.string)
    }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;