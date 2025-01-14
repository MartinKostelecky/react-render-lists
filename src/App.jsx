import List from "./List.jsx"

function App() {

  const actionHeroes = [{ id: 1, name: "Arnold Swarzenegger", movies: ["Terminator", "Kindergarden Cop"] },
                        { id: 2, name: "Silvester Stallone", movies: ["Rambo", "Rocky"] },
                        { id: 3, name: "Jean Claude van Damme", movies: ["Bloodsport", "Kickboxer"] },
                        { id: 4, name: "Chuck Norris", movies: ["Missing in Action", "The Delta Force"] }];

  const gameHeroes = [{ id: 5, name: "Gordon Freeman", games: ["Half-Life", "Half-Life 2"] },
                        { id: 6, name: "Doom Slayer", games: ["Doom", "Doom 2", "Doom 3", "Doom 2016","Doom Eternal"] },
                        { id: 7, name: "Jindra", games: ["Kingdom Come: Deliverance", "Kingdom Come: Deliverance 2"] },
                        { id: 8, name: null, games: [] }];                      
  return (
    <>
      <List items={actionHeroes} category="Action heroes" />
      <List items={gameHeroes} category="Game heroes" />
    </>  
  );

}

export default App
